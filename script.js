// =========================
// DATA LOGIN
// =========================
const validNPM = [
    "2310631150056",
    "2410631010177",
    "2023003"
];

// =========================
// DATA BUKU PER KATEGORI
// =========================
const books = {
    pidana: [
        {
            title: "Pengantar Hukum Islam",
            file: "books/pidana/Pengantar-Hukum-Islam-buku-ajar-rohidin-fh-uii.pdf.pdf"
        },
        {
            title: "Asas-Asas Hukum Pidana",
            file: "books/pidana/pidana2.pdf"
        }
    ],
    perdata: [
        {
            title: "Pengantar Ilmu Hukum",
            file: "books/perdata/pengantar-ilmu-hukum.pdf"
        },
        {
            title: "Hukum Perjanjian",
            file: "books/perdata/perdata2.pdf"
        }
    ]
};

// =========================
// FUNCTION LOGIN
// =========================
function login() {
    let npm = document.getElementById("npm").value.trim();

    if (validNPM.includes(npm)) {
        document.getElementById("loginPage").classList.add("hidden");
        document.getElementById("kategoriPage").classList.remove("hidden");
        document.getElementById("error").innerText = "";
    } else {
        document.getElementById("error").innerText = "NPM tidak terdaftar!";
    }
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
        books[kategori].forEach(function(book) {

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
