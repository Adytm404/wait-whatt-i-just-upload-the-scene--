# Anime Scene Finder

Aplikasi web untuk melacak sumber adegan anime dari tangkapan layar. Pengguna dapat mengunggah gambar (atau cukup *paste* dari *clipboard*), dan aplikasi akan mengidentifikasi anime, episode, dan stempel waktu yang tepat dari adegan tersebut.

## Fitur Utama

* **Pencarian Adegan:** Mengidentifikasi anime, episode, dan stempel waktu dari gambar adegan.
* **Berbagai Metode Input:**
    * Unggah file gambar standar.
    * Fungsionalitas *Drag-and-drop* gambar ke jendela browser.
    * Tempel (*paste*) gambar langsung dari *clipboard* (misalnya, setelah mengambil *screenshot*).
* **Tampilan Hasil Interaktif:**
    * Menampilkan daftar hasil yang cocok dengan persentase kesamaan, *thumbnail*, dan info episode.
    * Memutar pratinjau video dari adegan yang ditemukan.
    * Mengambil dan menampilkan detail anime lengkap (judul, deskripsi, genre, studio) dari AniList.

## Teknologi & Layanan yang Digunakan

* **Frontend:** React, Vite, TypeScript
* **Styling:** Tailwind CSS, Font Awesome
* **Layanan API:**
    * **`tmpfiles.org`**: Untuk hosting gambar sementara yang diunggah pengguna.
    * **`trace.moe`**: API inti untuk melakukan pencarian gambar adegan anime.
    * **`anilist.co` (GraphQL)**: Untuk mengambil metadata dan detail anime.

## Cara Menjalankan Secara Lokal

**Prasyarat:** [Node.js](https://nodejs.org/)

1.  **Instal dependensi:**
    ```bash
    npm install
    ```
   

2.  **Jalankan server pengembangan:**
    ```bash
    npm run dev
    ```
   

3.  Buka browser Anda dan kunjungi `http://localhost:3000` (sesuai konfigurasi di `vite.config.ts`).