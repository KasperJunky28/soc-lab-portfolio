// =====================
// CERTIFICATES MODAL
// =====================

// אלמנטים
const modal = document.getElementById("certModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

// כל התמונות
const images = document.querySelectorAll(".cert-img");

// פתיחת מודל בלחיצה
images.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

// סגירה עם כפתור X
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// סגירה בלחיצה מחוץ לתמונה
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// סגירה עם ESC (שדרוג מקצועי 🔥)
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modal.style.display = "none";
    }
});