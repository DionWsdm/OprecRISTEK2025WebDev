Panduan Instalasi Proyek

1. Persyaratan
   Sebelum menjalankan proyek ini, pastikan tools berikut telah diinstall:
    - Node.js (versi terbaru). Download: https://nodejs.org/
    - MySQL Server. Download: https://dev.mysql.com/downloads/installer/
    - Git. Download: https://git-scm.com/
    - NPM atau Yarn (terinstall bersama Node.js)

2. Clone Repository
   Jalankan perintah-perintah berikut di terminal/command prompt untuk mendownload proyek:
    1) git clone https://github.com/DionWsdm/OprecRISTEK2025WebDev.git
    2) cd OprecRISTEK2025WebDev

3. Setelah berganti directory di terminal/command prompt, jalankan:
    1) "npm install" (jika menggunakan npm) atau "yarn install" (jika menggunakan yarn). Jalankan tanpa tanda petik ("").

4. Konfigurasi database MySQL
    1) Pastikan MySQL server sudah berjalan
    2) Buka MySQL Workbench atau terminal, lalu buat database:
       CREATE DATABASE tryout_db;
    3) Perbarui/buat file ".env" di folder tryout-app-BE. Isinya sesuaikan dengan database anda, berikut templatenya:
        PORT=4000
        DB_HOST=localhost
        DB_USER=root
        DB_PASSWORD=password_anda
        DB_NAME=tryout_db

5. Import Database
    Jika menggunakan MySQL Workbench:
    1) Buka MySQL Workbench, lalu masuk ke menu Server → Data Export
    2) Pilih database yang ingin diekspor
    3) Pilih Dump Structure and Data (agar tabel dan datanya ikut diekspor)
    4) Klik Start Export dan simpan file "tryouts_tryouts.sql" dan "tryouts_questions.sql"

    Jika menggunakan command line/terminal, jalankan:
    1) mysql -u root -p tryouts_db < tryouts_tryouts.sql
    2) mysql -u root -p tryouts_db < tryouts_questions.sql

6. Menjalankan Backend (Server):
    1. Buka terminal dan pastikan sudah berada di directory tryout-app-BE
    2. ketik "npm start" (tanpa tanda petik) dan klik enter

7. Menjalankan Frontend:
    1. Buka terminal dan pastikan sudah berada di directory tryout-app-FE
    2. ketik "npm run dev" dan klik enter