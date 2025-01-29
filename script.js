document.addEventListener("DOMContentLoaded", () => {
    const registerModal = document.getElementById("registerModal");
    const loginModal = document.getElementById("loginModal");
    const openRegister = document.getElementById("openRegister");
    const openLogin = document.getElementById("openLogin");
    const closeButtons = document.querySelectorAll(".close");

    openRegister.addEventListener("click", () => {
        registerModal.style.display = "block";
    });

    openLogin.addEventListener("click", () => {
        loginModal.style.display = "block";
    });

    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modalId = button.getAttribute("data-close");
            document.getElementById(modalId).style.display = "none";
        });
    });

    window.addEventListener("click", (event) => {
        if (event.target.classList.contains("modal")) {
            event.target.style.display = "none";
        }
    });
});