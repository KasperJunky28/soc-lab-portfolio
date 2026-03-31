console.log("1");

const closeBtn = document.querySelector(".close");

/* ===================== */
/* Image modal (if present) */
/* ===================== */
const imageModal = document.getElementById("imageModal");
const imageModalImg = document.getElementById("modalImg");

if (imageModal && imageModalImg && closeBtn) {
    console.log("2");
    document.querySelectorAll(".image-card img, .images img").forEach(img => {
        img.addEventListener("click", () => {
            console.log("3");
            imageModalImg.style.display = "block";
            imageModalImg.src = img.src;
            imageModal.style.display = "block";
        });
    });

    closeBtn.onclick = () => {
        imageModal.style.display = "none";
    };

    imageModal.onclick = (e) => {
        if (e.target === imageModal) {
            imageModal.style.display = "none";
            console.log("4");
        }
    };
}
