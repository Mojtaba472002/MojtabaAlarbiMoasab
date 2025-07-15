document.addEventListener("DOMContentLoaded", () => {
  // ❗ Clear saved role on each load for testing error message
  localStorage.removeItem("selectedRole");

  const roleForm = document.querySelector(".choose-options");
  const continueBtn = document.getElementById("continue-btn");
  const cards = document.querySelectorAll(".option-card");

  // Restore selected role from localStorage (if you remove the line above later)
  const savedRole = localStorage.getItem("selectedRole");
  if (savedRole) {
    const radio = roleForm.querySelector(`input[value="${savedRole}"]`);
    if (radio) {
      radio.checked = true;
      highlightSelectedCard(radio);
    }
  }

  // ✅ Handle card click: manually check the hidden radio and dispatch change event
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const radio = card.querySelector('input[type="radio"]');
      if (radio) {
        radio.checked = true;
        radio.dispatchEvent(new Event("change", { bubbles: true }));
      }
    });

    // ✅ Handle keyboard (Enter/Space) for accessibility
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const radio = card.querySelector('input[type="radio"]');
        if (radio) {
          radio.checked = true;
          radio.dispatchEvent(new Event("change", { bubbles: true }));
        }
      }
    });
  });

  // ✅ Handle radio button change: update visual selection
  roleForm.addEventListener("change", event => {
    if (event.target.name === "role") {
      highlightSelectedCard(event.target);
    }
  });

  // ✅ Highlight logic (CSS class + accessibility)
  function highlightSelectedCard(radio) {
    cards.forEach(card => {
      card.classList.remove("selected");
      card.setAttribute("aria-checked", "false");
      card.setAttribute("tabindex", "-1");
    });

    const selectedCard = radio.closest(".option-card");
    if (selectedCard) {
      selectedCard.classList.add("selected");
      selectedCard.setAttribute("aria-checked", "true");
      selectedCard.setAttribute("tabindex", "0");
      selectedCard.focus(); // optional: move focus for accessibility
    }
  }

  // ✅ Handle "Continue" button
  continueBtn.addEventListener("click", () => {
    const checked = roleForm.querySelector('input[name="role"]:checked');
    if (!checked) {
      Swal.fire({
        icon: "warning",
        title: "يرجى اختيار نوع الحساب",
        text: "لا يمكنك المتابعة بدون اختيار نوع الحساب.",
        confirmButtonText: "حسنًا"
      });
      return;
    }

    localStorage.setItem("selectedRole", checked.value);

    if (checked.value === "client") {
      window.location.href = "Main_Page.html";
    } else if (checked.value === "employee") {
      window.location.href = "Employee.html";
    } else {
      window.location.href = "Main_Page.html"; // fallback if unknown
    }

  });
});
