## Cara install

1. Install <a href="https://nodejs.org/en/">nodejs</a>
2. Install yarn: `npm install -g yarn`
3. Masuk ke directory project
3. Install library yang dibutuhkan `yarn install`
4. Buat database baru dengan nama `manliest-db`
5. Jalankan server: `yarn dev`

## Struktur

`src` --> Root folder.

`src/db` --> Komponen - komponen yang berhubungan dengan database

`src/db/entities` --> Class model `ORM`

`src/app.ts` --> Berisi entry point applikasi