import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import * as http from "http"; // Tambahkan import untuk tipe Server

const app = express();

declare module 'http' {
  interface IncomingMessage {
    rawBody: unknown
  }
}
app.use(express.json({
  verify: (req, _res, buf) => {
    req.rawBody = buf;
  }
}));
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  // server sekarang memiliki tipe http.Server
  const server: http.Server = await registerRoutes(app); 

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    // ✅ REVISI: Catat error untuk debugging
    console.error(`Error ${status} di ${status}ms:`, err); 

    res.status(status).json({ message });
    
    // ✅ REVISI: Menghapus 'throw err;' karena melemparkan error setelah 
    // mengirim respons dapat menyebabkan proses Node.js crash.
    // throw err; 
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    // Di sini 'server' yang diteruskan harus berupa http.Server, 
    // bukan app (express instance), yang sudah Anda lakukan dengan benar di atas.
    await setupVite(app, server); 
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || '5000', 10);
  
  // ✅ REVISI: Mengubah konfigurasi listen untuk mengatasi ENOTSUP.
  // Menggunakan '127.0.0.1' lebih aman daripada '0.0.0.0' di lingkungan 
  // pengembangan yang dibatasi. Juga, opsi 'reusePort' dihapus.
  server.listen({
    port,
    host: "127.0.0.1", // Ubah dari "0.0.0.0" ke "127.0.0.1"
    // reusePort: true, // Hapus opsi ini (dapat menyebabkan ENOTSUP)
  }, () => {
    log(`serving on http://127.0.0.1:${port} (NODE_ENV=${app.get("env")})`);
  });
})();
