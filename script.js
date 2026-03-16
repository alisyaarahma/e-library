function login() {

const npm = document.getElementById("npm").value.trim();
const errorMsg = document.getElementById("errorMsg");
const npmNumber = Number(npm);

if (
/^\d{13}$/.test(npm) &&
npmNumber >= 2300000000000 &&
npmNumber <= 2500000000000
){

document.getElementById("loginPage").classList.add("hidden");
document.getElementById("kategoriPage").classList.remove("hidden");

const userNpm = document.querySelectorAll(".userNpm");

userNpm.forEach(el=>{
el.innerText = npm;
});

sessionStorage.setItem("npmLogin", npm);

errorMsg.innerText="";

}else{

errorMsg.innerText =
"NPM harus 13 digit";

}

}

function logout(){

sessionStorage.removeItem("npmLogin");

document.getElementById("kategoriPage").classList.add("hidden");
document.getElementById("bukuPage").classList.add("hidden");
document.getElementById("loginPage").classList.remove("hidden");

}

function showBooks(kategori) {
    document.getElementById("kategoriPage").classList.add("hidden");
    document.getElementById("bukuPage").classList.remove("hidden");

    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";

    let books = [];

    if (kategori === "perdata") {
        books = [
            {
                title: "Hukum Perikatan",
                file: "books/perdata/[Nanda Amalia] Hukum Perikatan.pdf"
            },
            {
                title: "Hukum Waris",
                file: "books/perdata/4. BUKU HUKUM WARIS FIX.pdf"
            },
            {
                title: "Pengantar Hukum Acara Perdata",
                file: "books/perdata/28. Pengantar Hukum Acara Perdata Modul by Laila M. Rasyid, SH, M.Hum.  Herinawati, SH, M.Hum. (z-lib.org).pdf"
            },
            {
                title: "Buku Belajar Hukum Perdata",
                file: "books/perdata/9786023590513.pdf"
            },
            {
                title: "Hukum Perkawinan",
                file: "books/perdata/Buku Ajar Hukum Perkawinan by Nanda Amalia (z-lib.org).pdf"
            },
            {
                title: "Hukum Perdata Hukum Orang dan Keluarga",
                file: "books/perdata/BUKU HUKUM PERDATA HUKUM ORANG DAN KELUARGA _ RESTI HARTYO.pdf"
            },
            {
                title: "Hukum Perdata (Martha Eri Safira)",
                file: "books/perdata/BUKU HUKUM PERDATA(1).pdf"
            },
            {
                title: "Hukum Perdata dan Asas-Asas Perkembangannya",
                file: "books/perdata/BUKU HUKUM PERDATA.pdf"
            },
            {
                title: "Buku Ajar Hukum Acara Perdata",
                file: "books/perdata/BukuAjarHukumAcaraPerdata.pdf"
            },
            {
                title: "Hukum Harta Kekayaan",
                file: "books/perdata/E-BOOK_BRAVO_HUKUMHARTAKEKAYAAN1.pdf"
            },
            {
                title: "Praktik Peradilan Perdata",
                file: "books/perdata/Ebook_Bravo_PRAKTIKPERADILANPERDATA1.pdf"
            },
            {
                title: "Buku Ajar Hukum Acara Perdata Dr. Ma’ruf  Akib, S.H., M.H., M.Kn., M.Kes., M.Hum",
                file: "books/perdata/EBOOK_BUKUAJARHUKUMACARAPERDATA1.pdf"
            },  
            {
                title: "Hukum Perdata dalam Sebuah Perjanjian",
                file: "books/perdata/E-Book_GPI_BukuAjarHukumPerdatadalamSebuahPerjanjian11.pdf"
            },  
            {
                title: "Kapita Selekta Hukum Perdata",
                file: "books/perdata/E-BOOK_KAPITASELEKTAHUKUMPERDATA_removed.pdf"
            },
            {
                title: "Hukum Perdata Indonesia",
                file: "books/perdata/Hukum Perdata Indonesia Full.pdf"
            },
            {
                title: "Pengantar Hukum Perdata di Indonesia",
                file: "books/perdata/Pengantar hukum perdata di Indonesia.pdf"
            },
            {
                title: "Perbandingan Hukum Perdata",
                file: "books/perdata/Perbandingan Hukum Perdata.pdf"
            },
            {
                title: "Hukum Perdata",
                file: "books/perdata/Perdata.pdf"
            },
            {
                title: "Buku Dasar-Dasar Hukum Perdata Internasional",
                file: "books/perdata/Buku Dasar Dasar Hukum Perdata Internasional_Ari Purwadi.pdf"
            },
            {
                title: "Hukum Perdata (Dr. Muhamad Sadi Is, S.H.I., M.H., Dkk)",
                file: "books/perdata/eBook Buku Hukum Perdata.pdf"
            } 
        ];
    }

    if (kategori === "pidana") {
        books = [
            {
                title: "Buku Ajar Hukum Pidana",
                file: "books/pidana/BUKU AJAR HUKUM PIDANA (1).pdf"
            },
            {
                title: "Pengantar Hukum Pidana",
                file: "books/pidana/buku pengantar hukum pidana-revcompressed.pdf"
            },
            {
                title: "Buku Hukum Pidana (Dr. H. Imron Rosyadi, S.H.,M.H)",
                file: "books/pidana/buku_Hukum Pidana.pdf"
            },
            {
                title: "Hukum Pidana",
                file: "books/pidana/BUKUHUKUMPIDANA.pdf"
            },
            {
                title: "Dasar-Dasar Hukum Pidana di Indonesia",
                file: "books/pidana/Dasar-Dasar Hukum Pidana di Indonesia by Dr. Fitri Wahyuni., S.H., M.H..pdf"
            },
            {
                title: "Hukum Pidana Khusus",
                file: "books/pidana/DR. HAMSIR.pdf"
            },
            {
                title: "Buku Ajar Hukum Siber Perspektif Pidana",
                file: "books/pidana/Ebook_BUKUAJARHUKUMSIBERPERSPEKTIFPIDANA1.pdf"
            },
            {
                title: "Hukum Pidana Korupsi",
                file: "books/pidana/Ebook_Hukum Pidana Korupsi.pdf"
            },
            {
                title: "Buku Ajar Hukum dan Kriminologi",
                file: "books/pidana/Hukum dan Kriminologi Buku Ajar (Emilia Susanti, S.H., M.H.  Eko Rahadjo, S.H. etc.) (z-lib.org).pdf"
            },
            {
                title: "Hukum Pidana di Era Digital",
                file: "books/pidana/Hukum pidana .pdf"
            },
            {
                title: "Hukum Pidana Dasar-Dasar Hukum Pidana Berdasarkan KUHP dan RUU KUHP",
                file: "books/pidana/Hukum Pidana Dasar-Dasar Hukum Pidana Berdasarkan KUHP dan RUU KUHP by Sudaryono  Natangsa Surbakti.pdf"
            },
            {
                title: "Kajian Hukum Pidana Indonesia",
                file: "books/pidana/KAJIAN HUKUM PIDANA INDONESIA.pdf"
            },
            {
                title: "Hukum Pidana (Dr. Tofik Yanuar Chandra, S.H., M.H.)",
                file: "books/pidana/Pidana(1).pdf"
            },
            {
                title: "Pengantar Hukum Pidana (Transisi Hukum Pidana di Indonesia)",
                file: "books/pidana/Pidana.pdf"
            },
            {
                title: "Hukum Acara Pidana dan Rencana Kitab Undang-Undang Hukum Pidana Indonesia",
                file: "books/pidana/ResearchGate_HUKUMACARAPIDANADANRENCANAKITABUNDANG-UNDANGHUKUMPIDANAINDONESIA.pdf"
            },
            {
                title: "Suatu Pengantar Kriminologi",
                file: "books/pidana/SUATUPENGANTARKRIMINOLOGI.pdf"
            },
            {
                title: "Penyidikan Pidana di Indonsia",
                file: "books/pidana/UploadResearchgate_EBOOK_DPB_PENYIDIKANPIDANADIINDONESIA.pdf"
            },
            {
                title: "Hukum Pidana Islam",
                file: "books/pidana/Hukum-Pidana-Islam.pdf"
            },
            {
                title: "Hukum Pidana Dasar-Dasar Hukum Pidana Berdasarkan KUHP dan RUU KUHP",
                file: "books/pidana/Hukum Pidana Dasar-Dasar Hukum Pidana Berdasarkan KUHP dan RUU KUHP by Sudaryono  Natangsa Surbakti (z-lib.org).pdf"
            }
        ];
    }

     if (kategori === "tata negara") {
        books = [
             {
                title: "Hukum Tata Negara dan Pengawasan terhadap Kekuasaan Eksekutif",
                file: "books/tata negara/(+ISBN) K 175 - Hukum Tata Negara.pdf"
            },
            {
                title: "Hukum Tata Negara Indonesia",
                file: "books/tata negara/4. Buku Hukum Tata Negara (Editor).pdf"
            },
            {
                title: "Hukum Hak Asasi Manusia",
                file: "books/tata negara/13. Hukum Hak Asasi Manusia by Rhona K.M. Smith, dkk. (z-lib.org).pdf"
            },
            {
                title: "Dasar-Dasar Teori Hukum Tata Negara (Perspektif dan Praktik)",
                file: "books/tata negara/a65bc816-b8af-430f-bd4d-a449d4f2e973Ebook_Dasar-Dasar+Teori+Hukum+Tata+Negara+(Perspektif+dan+Praktik)_organized.pdf"
            },
            {
                title: "Hukum Tata Negara Indonesia (Drs. Nuruddin, M.H.)",
                file: "books/tata negara/BUKU HUKUM TATA NEGARA.pdf"
            },
            {
                title: "Filsafat dan Praktik Hukum Acara Tata Usaha Negara",
                file: "books/tata negara/Ebook_FilsafatdanPraktikHukumAcaraTataUsahaNegara_organized.pdf"
            },
            {
                title: "Hukum Tata Negara (Ibnu Sam Widodo, dkk)",
                file: "books/tata negara/Ebook_HukumTataNegara.pdf"
            },
            {
                title: "Hukum Pemerintahan Daerah",
                file: "books/tata negara/Hukum Pemerintahan Daerah.pdf"
            },
            {
                title: "Pengantar Hukum Tata Negara dan Dinamika Ketatanegaraan Indonesia",
                file: "books/tata negara/Hukum Tata Negara.pdf"
            },
            {
                title: "Hukum Tata Negara Indonesia (Imam Mahdi, S.H., M.H.)",
                file: "books/tata negara/Hukum tata negara_compressed.pdf"
            },
            {
                title: "Hukum Tata Negara (Agus Riewanto, dkk)",
                file: "books/tata negara/Hukum-Tata-Negara.pdf"
            },
            {
                title: "Hukum Tata Negara Indonesia (Teori dan Penerapannya)",
                file: "books/tata negara/Hukum-Tata-Negara-Indonesia-Teori-dan-Penerapannya_250422_155713.pdf"
            },
            {
                title: "Konstitusi (Teori, Hukum, dan Perkembangannya)",
                file: "books/tata negara/Konstitusi Teori, Hukum dan Perkembangannya.pdf"
            },
            {
                title: "Pengantar Hukum Tata Negara Indonesia",
                file: "books/tata negara/Pengantar Hukum Tata Negara Indonesia.pdf"
            },
            {
                title: "Pengantar Ilmu Hukum Tata Negara Jilid I",
                file: "books/tata negara/pengantar_ilmu_hukum_tata_negara.pdf.pdf"
            },
            {
                title: "Pengantar Ilmu Hukum Tata Negara Jilid II",
                file: "books/tata negara/Pengantar_Ilmu_Hukum_Tata_Negara_Jilid2.pdf .pdf"
            },
            {
                title: "Pengantar Hukum Tata Negara (Arman Koedoeboen, S.H., M.H.)",
                file: "books/tata negara/UploadResearchgate_EBOOK_DPB_PENGANTARHUKUMTATANEGARA.pdf"
            },
            {
                title: "Rekontruksi Hukum Tata Negara",
                file: "books/tata negara/KF Konstruksi HTN.pdf"
            },
            {
                title: "Hukum Konstitusi di Indonesia",
                file: "books/tata negara/Binder4-dikompresi.pdf"
            },
            {
                title: "Hukum Tata Negara (Vernando, S.Sos., S.H., M.Kn., dkk)",
                file: "books/tata negara/eBook Buku Hukum Tata Negara.pdf"
            }
        ];
    }

    books.forEach(book => {
        const div = document.createElement("div");
        div.className = "book-card";
        div.innerHTML = `<h3>${book.title}</h3>`;

        div.addEventListener("click", function () {
            window.open(book.file, "_blank");
        });

        bookList.appendChild(div);
    });
}

function kembaliKategori() {
    document.getElementById("bukuPage").classList.add("hidden");
    document.getElementById("kategoriPage").classList.remove("hidden");
}

function searchBook(){

const input =
document.getElementById("searchBook")
.value
.toLowerCase();

const books =
document.querySelectorAll(".book-card");

books.forEach(book=>{

const title =
book.innerText
.toLowerCase();

if(title.includes(input)){

book.style.display="flex";

}else{

book.style.display="none";

}

});

}

window.onload = function(){

const npm = sessionStorage.getItem("npmLogin")

if(npm){

document.getElementById("loginPage").classList.add("hidden");
document.getElementById("kategoriPage").classList.remove("hidden");

const userNpm = document.querySelectorAll(".userNpm");

userNpm.forEach(el=>{
el.innerText = npm;
});

}

}
