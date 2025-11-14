import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-gradient-to-br from-primary/20 via-accent/30 to-secondary/20 flex items-center justify-center animate-fade-in"
      data-testid="loading-screen"
    >
      <div className="text-center space-y-6">
        <div className="relative">
          <div className="w-24 h-24 border-8 border-primary/30 rounded-full animate-spin border-t-primary mx-auto" />
        </div>
        <div className="space-y-2 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">
            Tahunya Krispi-ya!
          </h1>
          <p className="text-xl text-foreground font-medium">
            Krispinya Bikin Nagih Lagi...
          </p>
        </div>
      </div>
    </div>
  );
}
