// Modal functionality for gallery images with dynamic overlay color
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImg");
    document.querySelectorAll(".gallery-item.img1 img, .gallery-item.img2 img, .gallery-item.img3 img").forEach(img => {
        img.addEventListener("click", function(e) {
            modal.classList.remove("hidden");
            modalImg.src = this.src;
            modalImg.alt = this.alt;
        });
    });
    modal.addEventListener("click", function(e) {
        if (!e.target.closest(".modal-img")) {
            modal.classList.add("hidden");
            modalImg.src = "";
        }
    });

    // Video modal functionality
    const videoModal = document.getElementById("videoModal");
    const modalVideo = document.getElementById("modalVideo");
    document.querySelectorAll(".gallery-item.vid1 video, .gallery-item.vid2 video, .gallery-item.vid3 video").forEach(video => {
        video.addEventListener("click", function(e) {
            e.preventDefault();
            e.stopPropagation();
            videoModal.classList.remove("hidden");
            modalVideo.src = this.src;
            modalVideo.currentTime = 0;
            modalVideo.play();
        });
    });
    videoModal.addEventListener("click", function(e) {
        if (!e.target.closest(".modal-video")) {
            videoModal.classList.add("hidden");
            modalVideo.pause();
            modalVideo.src = "";
        }
    });

    // Reservation modal functionality (only open on button, close on cancel)
    const reserveModal = document.getElementById("reserveModal");
    const reserveBtn = document.querySelector(".reserve-btn");
    const reserveCancel = document.querySelector(".reserve-cancel");
    const reserveForm = document.getElementById("reserveForm");
    reserveBtn.addEventListener("click", function(e) {
        e.preventDefault();
        reserveModal.classList.remove("hidden");
    });
    reserveCancel.addEventListener("click", function() {
        reserveModal.classList.add("hidden");
    });
    reserveForm.addEventListener("submit", function(e) {
        e.preventDefault();
        // Show success message
        let msg = document.createElement("div");
        msg.textContent = "تم ارسال طلبك بنجاح";
        msg.style.cssText = "color:#39b54a;font-size:1.2rem;text-align:center;margin-top:18px;font-weight:bold;";
        reserveForm.innerHTML = "";
        reserveForm.appendChild(msg);
        setTimeout(() => {
            reserveModal.classList.add("hidden");
            // Optionally reset form after closing
            setTimeout(() => { reserveForm.reset && reserveForm.reset(); window.location.reload(); }, 400);
        }, 1500);
    });
