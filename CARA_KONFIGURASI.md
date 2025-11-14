# Panduan Konfigurasi Website Tahunya Krispi-ya!

## 🏦 Cara Mengubah Nomor Rekening Bank

Buka file: `client/src/components/BankInfo.tsx`

Cari bagian ini (sekitar baris 22-26):

```typescript
const ENCRYPTED_ACCOUNT_NUMBER = encryptNumber("1234567890");
const BANK_NAME = "Bank Mandiri";
const ACCOUNT_HOLDER = "Tahunya Krispi-ya";
```

**Ubah sesuai kebutuhan:**
- `"1234567890"` → Ganti dengan nomor rekening Anda yang sebenarnya
- `"Bank Mandiri"` → Ganti dengan nama bank Anda
- `"Tahunya Krispi-ya"` → Ganti dengan nama pemilik rekening

**Contoh:**
```typescript
const ENCRYPTED_ACCOUNT_NUMBER = encryptNumber("9876543210123");
const BANK_NAME = "Bank BCA";
const ACCOUNT_HOLDER = "John Doe";
```

---

## 🔐 Cara Mengubah Password Bank Info

Buka file yang sama: `client/src/components/BankInfo.tsx`

Cari bagian ini (sekitar baris 20):

```typescript
const BANK_PASSWORD = "krispi123";
```

**Ubah password:**
```typescript
const BANK_PASSWORD = "passwordbarukamu";
```

⚠️ **PENTING:** Password ini akan digunakan pengunjung untuk melihat nomor rekening. Pastikan Anda memberikan password ini hanya kepada pelanggan yang sudah confirm order.

---

## 📱 Cara Mengubah Nomor WhatsApp

Buka file: `client/src/pages/Home.tsx`

Cari bagian ini (sekitar baris 14):

```typescript
const WHATSAPP_NUMBER = "6281234567890";
```

**Ubah dengan nomor WhatsApp bisnis Anda:**
```typescript
const WHATSAPP_NUMBER = "628123456789"; // Format: 62 + nomor tanpa 0 di depan
```

**Contoh:**
- Nomor: 0812-3456-7890
- Menjadi: `"6281234567890"`

---

## 🏪 Cara Mengubah Info Toko (Alamat, Kontak, Jam Buka)

Buka file: `client/src/pages/Home.tsx`

Cari bagian `<InfoSection />` dan ubah menjadi:

```typescript
<InfoSection 
  address="Alamat toko Anda yang lengkap"
  phone="+62 812-3456-7890"
  hours="Senin - Sabtu: 08.00 - 20.00 WIB"
/>
```

---

## 🍔 Cara Menambahkan Link Aplikasi Delivery (GoFood, GrabFood, ShopeeFood)

Buka file: `client/src/components/DeliveryApps.tsx`

Cari bagian `deliveryApps` (sekitar baris 6-24):

**Ubah URL dari `"#gofood"` menjadi link aktual Anda:**

```typescript
const deliveryApps = [
  {
    name: "GoFood",
    color: "bg-green-600",
    url: "https://gofood.link/tokoanda", // ← Ganti dengan link GoFood toko Anda
    description: "Pesan via GoFood"
  },
  {
    name: "GrabFood",
    color: "bg-emerald-600",
    url: "https://grab.com/tokoanda", // ← Ganti dengan link GrabFood toko Anda
    description: "Pesan via GrabFood"
  },
  {
    name: "ShopeeFood",
    color: "bg-orange-600",
    url: "https://shopee.co.id/tokoanda", // ← Ganti dengan link ShopeeFood toko Anda
    description: "Pesan via ShopeeFood"
  }
];
```

Kemudian ubah bagian onClick (sekitar baris 49):

```typescript
onClick={() => {
  window.open(app.url, '_blank'); // ← Tambahkan baris ini
}}
```

---

## 💰 Cara Mengubah Harga Produk

Buka file: `client/src/pages/Home.tsx`

Cari bagian `products` (sekitar baris 21-71):

**Ubah harga sesuai kebutuhan:**

```typescript
const products: Product[] = [
  {
    id: "small",
    name: "Small Pack",
    size: "5 pcs",
    pieces: 5,
    price: 10000, // ← Ubah harga di sini
    // ...
  },
  // ... produk lainnya
];
```

---

## 📧 Cara Mengubah Info Kontak di Footer & Contact Section

### Footer
Buka file: `client/src/components/Footer.tsx` (sekitar baris 45-48)

```typescript
<li>+62 812-3456-7890</li>  // ← Nomor telepon
<li>info@krispiya.com</li>  // ← Email
<li>Jl. Raya Contoh No. 123</li>  // ← Alamat
<li>Jakarta Selatan</li>  // ← Kota
```

### Contact Section
Buka file: `client/src/components/ContactSection.tsx` (sekitar baris 29, 47, 65)

Ubah link dan teks sesuai kebutuhan:
- WhatsApp: Baris 29
- Instagram: Baris 47
- Email: Baris 65

---

## 🚀 Setelah Mengubah, Apa Yang Harus Dilakukan?

1. **Simpan semua file** yang sudah diubah
2. **Restart aplikasi** (otomatis jika menggunakan Replit)
3. **Refresh browser** untuk melihat perubahan
4. **Test semua tombol** untuk memastikan semuanya bekerja dengan baik

---

## ❓ Butuh Bantuan?

Jika ada yang kurang jelas, silakan tanyakan dan saya akan bantu menjelaskan lebih detail!
