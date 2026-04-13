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
                file: "https://drive.google.com/file/d/16hV5N3qqFJFxg0iLC4_9G9uqrWgCZzTe/preview"
            },
            {
                title: "Hukum Waris",
                file: "https://drive.google.com/file/d/1WcLDBLEPerXNyZUgjNA6bljjMRs2OQoF/preview"
            },
            {
                title: "Pengantar Hukum Acara Perdata",
                file: "https://drive.google.com/file/d/1YN314rPHVWb4vCEP-ZdmRvHEB6NFKtRq/preview"
            },
            {
                title: "Buku Belajar Hukum Perdata",
                file: "https://drive.google.com/file/d/1_muxUh5QB7UrrbU1hAifLOHTAXdFW9Ms/preview"
            },
            {
                title: "Hukum Perkawinan",
                file: "https://drive.google.com/file/d/1QwFk-raf0Ye3y8JXe6KvgFiFY5mv2j4U/preview"
            },
            {
                title: "Hukum Perdata Hukum Orang dan Keluarga",
                file: "https://drive.google.com/file/d/1DZpArIBI4f51vDZYEWM1JMuAEw0se_gw/preview"
            },
            {
                title: "Hukum Perdata (Martha Eri Safira)",
                file: "https://drive.google.com/file/d/1GdaCRyW7pfEwGx5vOjU3fds7_ePRCQ-I/preview"
            },
            {
                title: "Hukum Perdata dan Asas-Asas Perkembangannya",
                file: "https://drive.google.com/file/d/1o90RT4UTBW5W6GulMLxHf255r1O9OwjQ/preview"
            },
            {
                title: "Buku Ajar Hukum Acara Perdata",
                file: "https://drive.google.com/file/d/1p0I4E1d-oMmk7XypWSsenlJr-SO7t0F7/preview"
            },
            {
                title: "Hukum Harta Kekayaan",
                file: "https://drive.google.com/file/d/1IE4bRVWHgfrjX8kiREMoRc4OkOnBorTb/preview"
            },
            {
                title: "Praktik Peradilan Perdata",
                file: "https://drive.google.com/file/d/1nxW1EKIe_mp9gGkKsFQCaa-teTiUEX_Q/preview"
            },
            {
                title: "Buku Ajar Hukum Acara Perdata Dr. Ma’ruf  Akib, S.H., M.H., M.Kn., M.Kes., M.Hum",
                file: "https://drive.google.com/file/d/1g8FJHfncH2Jn6V6M8jlNXn3_JMOsavLw/preview"
            },  
            {
                title: "Hukum Perdata dalam Sebuah Perjanjian",
                file: "https://drive.google.com/file/d/11vuQB_29ssqkeF8Hn1mSjbN-TAssQYwu/preview"
            },  
            {
                title: "Kapita Selekta Hukum Perdata",
                file: "https://drive.google.com/file/d/1xb-o4ZSPAqD7vUO3c7AwIiKDXSW3O_R0/preview"
            },
            {
                title: "Hukum Perdata Indonesia",
                file: "https://drive.google.com/file/d/1RfTFmlaUTnH5j8Gk2J_n8WMuYqQcRQ_c/preview"
            },
            {
                title: "Pengantar Hukum Perdata di Indonesia",
                file: "https://drive.google.com/file/d/1N95FPHlVzGUqLf49nNJ1Ldb_x1RTyNJY/preview"
            },
            {
                title: "Perbandingan Hukum Perdata",
                file: "https://drive.google.com/file/d/1MJSHVyu34TGekntVJxxg97vaUH6Ygev0/preview"
            },
            {
                title: "Hukum Perdata",
                file: "https://drive.google.com/file/d/18HFEvkUWS7vsG6vddKkba5ofYokR8jHc/preview"
            },
            {
                title: "Buku Dasar-Dasar Hukum Perdata Internasional",
                file: "https://drive.google.com/file/d/1UxahPY_qisy5uMSSOGjv4XUw3h1aNtDu/preview"
            },
            {
                title: "Hukum Perdata (Dr. Muhamad Sadi Is, S.H.I., M.H., Dkk)",
                file: "https://drive.google.com/file/d/1ck-sRL1Go7HamWT7MpgPZTwQD3mg4nv-/preview"
            } 
        ];
    }

    if (kategori === "pidana") {
        books = [
            {
                title: "Buku Ajar Hukum Pidana",
                file: "https://drive.google.com/file/d/1_Afc-OvuIEYowle9KZp8vqh3ogBbbHUt/preview"
            },
            {
                title: "Pengantar Hukum Pidana",
                file: "https://drive.google.com/file/d/11fLOMeGleJCOUCeQx3yOOqsS5HCQlm9i/preview"
            },
            {
                title: "Buku Hukum Pidana (Dr. H. Imron Rosyadi, S.H.,M.H)",
                file: "https://drive.google.com/file/d/1PE6O-82_5SYT4cKPF-Wb86LGzyjrv49n/preview"
            },
            {
                title: "Hukum Pidana",
                file: "https://drive.google.com/file/d/1ufsYIaKIaXI69S9Y_HfnYOG_JUUM2UAs/preview"
            },
            {
                title: "Dasar-Dasar Hukum Pidana di Indonesia",
                file: "https://drive.google.com/file/d/1zpGy8L46KlYI4aaJv5FLvLEI-AeD_W9Z/preview"
            },
            {
                title: "Hukum Pidana Khusus",
                file: "https://drive.google.com/file/d/1orrYWVVRHFYmS8vgqTQgCgwpoHsPl1D9/preview"
            },
            {
                title: "Buku Ajar Hukum Siber Perspektif Pidana",
                file: "https://drive.google.com/file/d/1fRGZsGlIkxhJvqzaBoyJJe1_QC5PixFF/preview"
            },
            {
                title: "Hukum Pidana Korupsi",
                file: "https://drive.google.com/file/d/1mlxnFoSuFWogB8l5ynd4oOrOnjuoCpQ7/preview"
            },
            {
                title: "Buku Ajar Hukum dan Kriminologi",
                file: "https://drive.google.com/file/d/1ZXjpsuso-CXjfK7BnNM6Nd0ImeafyGS7/preview"
            },
            {
                title: "Hukum Pidana di Era Digital",
                file: "https://drive.google.com/file/d/1Wmt1iiLwQEJQNXf-BkniT-mEbilZDSSb/preview"
            },
            {
                title: "Hukum Pidana Dasar-Dasar Hukum Pidana Berdasarkan KUHP dan RUU KUHP",
                file: "https://drive.google.com/file/d/1-4PzuIGZSyUwnIGj0YWQxIl7t1bpUBKh/preview"
            },
            {
                title: "Kajian Hukum Pidana Indonesia",
                file: "https://drive.google.com/file/d/1eju8Lhao35KymQu9a88FESv_CAbRnNRY/preview"
            },
            {
                title: "Hukum Pidana (Dr. Tofik Yanuar Chandra, S.H., M.H.)",
                file: "https://drive.google.com/file/d/1Mt7e0nSuemHuAmJHQWlAjsWPX-py9Fjh/preview"
            },
            {
                title: "Pengantar Hukum Pidana (Transisi Hukum Pidana di Indonesia)",
                file: "https://drive.google.com/file/d/1p1SWugM3zRif2VKakxBSpEtmMF3YiBVW/preview"
            },
            {
                title: "Hukum Acara Pidana dan Rencana Kitab Undang-Undang Hukum Pidana Indonesia",
                file: "https://drive.google.com/file/d/1YvcTwdlnHUTwlUe9dljOeu1SHVzo2srA/preview"
            },
            {
                title: "Suatu Pengantar Kriminologi",
                file: "https://drive.google.com/file/d/1q_GAXdEhpexQk_Z1pPWQGz-Ucd9FONpS/preview"
            },
            {
                title: "Penyidikan Pidana di Indonsia",
                file: "https://drive.google.com/file/d/1TXwjJS1sqCwWCaayFo4jyCbrkSbL2lJM/preview"
            },
            {
                title: "Hukum Pidana Islam",
                file: "https://drive.google.com/file/d/1VxPRr8yaXyLbWQg4ZTD9jmxDFC9HHC-O/preview"
            },
            {
                title: "Buku Ajar Kriminologi",
                file: "https://drive.google.com/file/d/1U10X34FlsF5_xpolJAjyX0ovXd3VvxLw/preview"
            },
            {
                title: "Hukum Acara Pidana dan Pidana Cyber",
                file: "https://drive.google.com/file/d/1sov0vegibJ9ar0kEq9WHsdJ4nA5QCNYq/preview"
            }
        ];
    }

     if (kategori === "tata negara") {
        books = [
             {
                title: "Hukum Tata Negara dan Pengawasan terhadap Kekuasaan Eksekutif",
                file: "https://drive.google.com/file/d/1dW-IV1rUKfg9mm76RFYm3HzXkAvFXCql/preview"
            },
            {
                title: "Hukum Tata Negara Indonesia",
                file: "https://drive.google.com/file/d/1UmAvA8J1p_QbXyR7u5gpz32Ey2B1NMUs/preview"
            },
            {
                title: "Hukum Hak Asasi Manusia",
                file: "https://drive.google.com/file/d/1jxizzAZe_BSBcYdgU9IC210Ezk8wmf1y/preview"
            },
            {
                title: "Dasar-Dasar Teori Hukum Tata Negara (Perspektif dan Praktik)",
                file: "https://drive.google.com/file/d/1cSXyhVFU3HvNrNr-JfIQeqTUcLZiDtH8/preview"
            },
            {
                title: "Hukum Tata Negara Indonesia (Drs. Nuruddin, M.H.)",
                file: "https://drive.google.com/file/d/19helVlOZN7HwxJCxL0Kw899uvcSeDvNY/preview"
            },
            {
                title: "Filsafat dan Praktik Hukum Acara Tata Usaha Negara",
                file: "https://drive.google.com/file/d/1dsm3i0KvwaAPYkVKL5tY8k2XNuMbqqT2/preview"
            },
            {
                title: "Hukum Tata Negara (Ibnu Sam Widodo, dkk)",
                file: "https://drive.google.com/file/d/1gvXMoXHLn4C5LSOCjLcKvgSEpL9UIbSC/preview"
            },
            {
                title: "Hukum Pemerintahan Daerah",
                file: "https://drive.google.com/file/d/1QlBR69zO1UebBWlu-9oF1RKHdZw9zoaz/preview"
            },
            {
                title: "Pengantar Hukum Tata Negara dan Dinamika Ketatanegaraan Indonesia",
                file: "https://drive.google.com/file/d/1YgKAOOeSX-MJD-bdcWBh9ndxoRIX_BZl/preview"
            },
            {
                title: "Hukum Tata Negara Indonesia (Imam Mahdi, S.H., M.H.)",
                file: "https://drive.google.com/file/d/1LDjmOVb9wULHr2V69abHaXBSSv_PVixB/preview"
            },
            {
                title: "Hukum Tata Negara (Agus Riewanto, dkk)",
                file: "https://drive.google.com/file/d/1om-_N-wolzkzUv8iVcBWWWhZ1OOZ2oxL/preview"
            },
            {
                title: "Hukum Tata Negara Indonesia (Teori dan Penerapannya)",
                file: "https://drive.google.com/file/d/17Oovu1XWLOyTi0sjVO-RB4eGRw4Ey3_a/preview"
            },
            {
                title: "Konstitusi (Teori, Hukum, dan Perkembangannya)",
                file: "https://drive.google.com/file/d/1MO9ttJh1RPhn0uHfgaXpspNy5nwt3v78/preview"
            },
            {
                title: "Pengantar Hukum Tata Negara Indonesia",
                file: "https://drive.google.com/file/d/1BX0-HUDRzQZ-ACBE3i6Pps50JjhPqHm1/preview"
            },
            {
                title: "Pengantar Ilmu Hukum Tata Negara Jilid I",
                file: "https://drive.google.com/file/d/1ILW2Lir40mhNLDGtOhWd09QhRICqSt1e/preview"
            },
            {
                title: "Pengantar Ilmu Hukum Tata Negara Jilid II",
                file: "https://drive.google.com/file/d/19IgGfTN-nkaUbbEB2-OmNHDJbDUaxFUD/preview"
            },
            {
                title: "Pengantar Hukum Tata Negara (Arman Koedoeboen, S.H., M.H.)",
                file: "https://drive.google.com/file/d/1zc9Id9ULP0GLWstk9R1gBmL5AQ7Yxd1N/preview"
            },
            {
                title: "Rekontruksi Hukum Tata Negara",
                file: "https://drive.google.com/file/d/1CljRY4T7-kfDeDCgPJJ7Ya0xXp1jBtN7/preview"
            },
            {
                title: "Hukum Konstitusi di Indonesia",
                file: "https://drive.google.com/file/d/1ZCpI0WAZXUWCQRVzqGl5j9N46VYrWmWA/preview"
            },
            {
                title: "Hukum Tata Negara (Vernando, S.Sos., S.H., M.Kn., dkk)",
                file: "https://drive.google.com/file/d/1jYOrLaKMEerunh6xYKRTU3XcUCR-MtQy/preview"
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
