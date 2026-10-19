
/* 1. Menampilkan tahun sekarang pada footer */
document.querySelectorAll("[data-year]").forEach(function (element) {
    element.textContent = new Date().getFullYear();
});


/* 2. Menutup menu navigasi setelah tautan dipilih di HP */
const navMenu = document.getElementById("navMenu");
const navToggler = document.querySelector(".navbar-toggler");

document.querySelectorAll(".navbar-nav .nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
        if (
            navMenu &&
            navMenu.classList.contains("show") &&
            window.innerWidth < 992 &&
            navToggler
        ) {
            navToggler.click();
        }
    });
});


/* 3. Validasi formulir login */
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username");
        const password = document.getElementById("password");
        const status = document.getElementById("loginStatus");

        let valid = true;

        [username, password].forEach(function (field) {
            field.classList.remove("is-invalid", "is-valid");

            if (!field.value.trim()) {
                field.classList.add("is-invalid");
                valid = false;
            } else if (
                field === password &&
                field.value.length < 8
            ) {
                field.classList.add("is-invalid");
                valid = false;
            } else {
                field.classList.add("is-valid");
            }
        });

        status.className = "status-message";

        if (!valid) {
            status.textContent =
                "Periksa kembali isian. Password minimal 8 karakter.";
            status.classList.add("status-error");
        } else {
            status.textContent =
                "Validasi berhasil! Ini hanya simulasi login untuk tugas UTS.";
            status.classList.add("status-success");
        }
    });
}


/* 4. Validasi formulir kontak */
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const fields = [
            document.getElementById("nama"),
            document.getElementById("email"),
            document.getElementById("pesan")
        ];

        let valid = true;

        fields.forEach(function (field) {
            field.classList.remove("is-invalid", "is-valid");

            if (!field.checkValidity() || !field.value.trim()) {
                field.classList.add("is-invalid");
                valid = false;
            } else {
                field.classList.add("is-valid");
            }
        });

        const status = document.getElementById("contactStatus");
        status.className = "status-message";

        if (valid) {
            status.textContent =
                "Semua isian sudah valid. Formulir ini belum mengirim pesan ke server.";
            status.classList.add("status-success");
        } else {
            status.textContent =
                "Masih ada isian yang perlu diperbaiki.";
            status.classList.add("status-error");
        }
    });
}
