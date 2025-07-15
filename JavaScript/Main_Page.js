document.addEventListener("DOMContentLoaded", () => {
    const nameElement = document.getElementById("user-name");
    const storedName = localStorage.getItem("username");

    if (storedName) {
        nameElement.textContent = storedName;
        localStorage.removeItem("username"); // Show once
    } else {
        nameElement.textContent = "مجتبى";
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const photographerCard = document.getElementById("photographer");
    const designerCard = document.getElementById("designer");


    photographerCard.addEventListener("click", () => {
        const specialty = photographerCard.dataset.specialty;
        window.location.href = `Hiring_Page.html?specialty=${encodeURIComponent(specialty)}`;
    });

    designerCard.addEventListener("click", () => {
        const specialty = designerCard.dataset.specialty;
        window.location.href = `Hiring_Page.html?specialty=${encodeURIComponent(specialty)}`;
    });
});

