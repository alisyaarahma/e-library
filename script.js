// =========================
// DATA BUKU PER KATEGORI
// =========================
const books = {
    pidana: [
        { title: "Pengantar Hukum Islam", file: "books/pidana/Pengantar-Hukum-Islam-buku-ajar-rohidin-fh-uii.pdf.pdf" },
        { title: "Asas-Asas Hukum Pidana", file: "books/pidana/pidana2.pdf" }
    ],
    perdata: [
        { title: "Pengantar Ilmu Hukum", file: "books/perdata/pengantar-ilmu-hukum.pdf" },
        { title: "Hukum Perjanjian", file: "books/perdata/perdata2.pdf" }
    ]
};

// =========================
// VALIDASI NPM DENGAN RENTANG ANGKA
// =========================
function isValidNPM(npm) {
    // harus angka 13 digit
    if (!/^\d{13}$/.test(npm)) return false;

    const number = parseInt(npm, 10);
    const min = 2310631000000;
    const max = 2510631999999;

    return number >= min && number <= max;
}

// =========================
// LOGIN TANPA DATABASE
// =========================
function login() {
    let npm = document.getElementById("npm").value.trim();

    if (!isValidNPM(npm)) {
        document.getElementById("error").innerText = "NPM tidak valid atau di luar rentang!";
        return;
    }

    // Jika valid → tampil halaman kategori
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("kategoriPage").classList.remove("hidden");
    document.getElementById("error").innerText = "";
}

// =========================
// LOGOUT
// =========================
function logout() {
    document.getElementById("kategoriPage").classList.add("hidden");
    document.getElementById("bukuPage").classList.add("hidden");
    document.getElementById("loginPage").classList.remove("hidden");
}

// =========================
// TAMPILKAN BUKU
// =========================
function showBooks(kategori) {
    document.getElementById("kategoriPage").classList.add("hidden");
    document.getElementById("bukuPage").classList.remove("hidden");

    let bookList = document.getElementById("bookList");
    bookList.innerHTML = "";

    let judul = kategori === "pidana"
        ? "Kumpulan Buku Hukum Pidana"
        : "Kumpulan Buku Hukum Perdata";

    document.getElementById("judulKategori").innerText = judul;

    if (books[kategori]) {
        books[kategori].forEach(book => {
            let div = document.createElement("div");
            div.className = "book-card";

            div.innerHTML = `
                <h3>${book.title}</h3>
                <a href="${book.file}" target="_blank">
                    <button>Baca</button>
                </a>
            `;

            bookList.appendChild(div);
        });
    }
}

// =========================
// KEMBALI KE KATEGORI
// =========================
function backToKategori() {
    document.getElementById("bukuPage").classList.add("hidden");
    document.getElementById("kategoriPage").classList.remove("hidden");
}
