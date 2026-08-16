# Player Dashboard - Vercel + Firebase

Project ini sudah disusun untuk Vercel.

## Deploy
1. Upload/import folder project ini ke Vercel.
2. Framework Preset: Other.
3. Build Command: `npm run build`
4. Output Directory: `.`
5. Tambahkan Environment Variables berikut di Vercel:
   - `FIREBASE_API_KEY`
   - `FIREBASE_AUTH_DOMAIN`
   - `FIREBASE_PROJECT_ID`
   - `FIREBASE_STORAGE_BUCKET`
   - `FIREBASE_MESSAGING_SENDER_ID`
   - `FIREBASE_APP_ID`
6. Deploy.

URL:
- `/` = daftar player publik, read-only
- `/admin` = panel admin

## Firebase
Aktifkan:
- Authentication > Email/Password
- Firestore Database

Gunakan `firestore.rules` untuk rules Firestore.

Struktur collection:
`players/{autoId}`

Fields:
- `name`
- `playerId`
- `tiktok`
- `wa`

Catatan keamanan:
Firebase Web config bukan password. Jangan memasukkan password admin atau service-account private key ke HTML/client-side.
Rules saat ini mengizinkan read publik dan write untuk user yang sudah login. Untuk produksi, sebaiknya batasi write hanya ke UID admin tertentu.
