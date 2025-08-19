document.addEventListener("DOMContentLoaded", function () {
    const toggleButtons = document.querySelectorAll(".toggle-password");

    toggleButtons.forEach(button => {
        button.addEventListener("click", function () {
            const targetId = this.getAttribute("data-target");
            const input = document.getElementById(targetId);

            if (input.type === "password") {
                input.type = "text";
                this.textContent = "🙈"; // міняємо іконку
            } else {
                input.type = "password";
                this.textContent = "👁"; // міняємо іконку назад
            }
        });
    });
});