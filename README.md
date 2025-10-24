# E2E Testing for Amazon Product Search using Cypress

Proyek ini berisi serangkaian pengujian End-to-End (E2E) untuk fungsionalitas pencarian produk di situs web Amazon. Pengujian ini dibuat menggunakan [Cypress](https://www.cypress.io/) dan mengikuti pola desain Page Object Model (POM) untuk keterbacaan dan pemeliharaan kode yang lebih baik.

## Fitur yang Diuji

1.  **Pencarian Produk**: Memasukkan nama produk ke dalam bilah pencarian dan memulai pencarian.
2.  **Penyortiran Hasil**: Mengurutkan hasil pencarian berdasarkan "Harga: Tinggi ke Rendah".
3.  **Pemilihan Produk**: Memilih produk tertentu (produk ke-5) dari hasil pencarian.
4.  **Verifikasi Detail Produk**: Memastikan judul dan harga produk pada halaman detail sesuai dengan yang ditampilkan di halaman hasil pencarian.

## Struktur Proyek

```
e2e-amazon-testing/
├── cypress/
│   ├── e2e/
│   │   └── 1-ui-testing/
│   │       └── amazon.cy.js      # File spesifikasi tes utama
│   ├── fixtures/
│   │   └── product.json          # Data uji (nama produk)
│   ├── locators/
│   │   └── amazonLocators.js     # Kumpulan semua locator XPath
│   ├── pages/
│   │   ├── detailProduct.js      # Page Object untuk halaman detail produk
│   │   ├── homePage.js           # Page Object untuk halaman utama
│   │   └── searchResultPage.js   # Page Object untuk halaman hasil pencarian
│   ├── reports/                  # Laporan pengujian (dihasilkan setelah dijalankan)
│   ├── support/
│   │   ├── commands.js           # Perintah kustom Cypress
│   │   └── e2e.js                # Konfigurasi global Cypress
│   └── videos/                   # Rekaman video pengujian
├── images/                       # Screenshot pengujian
├── node_modules/
├── .env.example                  # Contoh file variabel lingkungan
├── .gitignore
├── cypress.config.js             # File konfigurasi utama Cypress
├── package.json
└── README.md
```

## Teknologi yang Digunakan

*   **Framework Pengujian**: [Cypress](https://www.cypress.io/)
*   **Bahasa**: JavaScript
*   **Manajemen Dependensi**: Node.js & NPM
*   **Plugin Cypress**:
    *   `cypress-xpath`: Untuk menggunakan selector XPath.
    *   `cypress-mochawesome-reporter`: Untuk menghasilkan laporan pengujian HTML yang indah.
*   **Lainnya**:
    *   `dotenv`: Untuk mengelola variabel lingkungan.

## Prasyarat

*   [Node.js](https://nodejs.org/en/) (disarankan versi LTS)
*   NPM (biasanya terinstal bersama Node.js)

## Instalasi dan Konfigurasi

1.  **Clone repositori ini:**
    ```bash
    git clone <URL_REPOSITORI_ANDA>
    cd e2e-amazon-testing
    ```

2.  **Instal semua dependensi:**
    ```bash
    npm install
    ```

3.  **Buat file `.env`:**
    Salin konten dari `.env.example` ke file baru bernama `.env`.
    ```bash
    # Di Windows (Command Prompt)
    copy .env.example .env

    # Di Windows (PowerShell)
    Copy-Item .env.example .env

    # Di macOS/Linux
    cp .env.example .env
    ```

4.  **Atur URL dasar:**
    Buka file `.env` dan atur `CYPRESS_BASE_URL` ke URL situs web yang ingin Anda uji.

## Menjalankan Pengujian

Ada dua cara untuk menjalankan pengujian:

1.  **Membuka Cypress Test Runner (Mode Interaktif):**
    Perintah ini akan membuka antarmuka grafis Cypress di mana Anda dapat memilih dan menjalankan tes secara visual.
    ```bash
    npm run cypress:open
    ```

2.  **Menjalankan Tes di Headless Mode (CLI):**
    Perintah ini akan menjalankan semua tes di *background* menggunakan browser Chrome dan menghasilkan laporan HTML setelah selesai.
    ```bash
    npm run html-report
    ```

## Laporan Pengujian

*   **Laporan HTML**: Dihasilkan di direktori `cypress/reports/html/`. Buka file `index.html` untuk melihat hasilnya.
*   **Video**: Rekaman video dari setiap proses pengujian disimpan di `cypress/videos/`.
*   **Screenshot**: Screenshot diambil secara otomatis saat terjadi kegagalan atau secara manual menggunakan `cy.screenshot()`. Screenshot disimpan di `images/`.

---
Dibuat oleh **dio**.
