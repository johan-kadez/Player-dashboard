SETUP FIREBASE

1. Buka Firebase Console dan buat project baru.
2. Tambahkan Web App (ikon </>).
3. Salin Firebase Config ke bagian firebaseConfig pada index.html dan admin.html.
4. Aktifkan Authentication > Sign-in method > Email/Password.
5. Buat akun admin di Authentication > Users.
6. Buka Firestore Database dan buat database.
7. Masukkan Firestore Rules dari file firestore.rules.
8. Upload index.html sebagai halaman publik dan admin.html sebagai panel admin melalui hosting seperti Firebase Hosting.

STRUKTUR:
players/
  auto-id/
    name: "Nama Player"
    playerId: "ID Player"
    tiktok: "@username"
    wa: "08xxxxxxxxxx"

KEAMANAN:
- Dashboard publik hanya dapat membaca koleksi players.
- Hanya user yang sudah login Firebase Authentication yang dapat menulis data.
- Password admin tidak disimpan di HTML.
- Untuk produksi, sebaiknya batasi hak tulis berdasarkan UID admin tertentu, bukan semua akun yang berhasil login.
