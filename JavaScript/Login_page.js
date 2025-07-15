// Toggle Password Visibility
function togglePassword(inputId, iconElement) {
    const input = document.getElementById(inputId);
    if (input.type === "password") {
        input.type = "text";
        iconElement.textContent = "🙈";
      iconElement.title = "إخفاء كلمة المرور";
    } else {
        input.type = "password";
        iconElement.textContent = "👁️";
        iconElement.title = "عرض كلمة المرور";
    }

}

// Handle keyboard toggle
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".login-box");
    if (form) {
        form.addEventListener("submit", validateLoginForm);
    }
});

function validateLoginForm(e) {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password) {
        Swal.fire({
            icon: 'warning',
            title: 'تنبيه',
            text: 'يرجى تعبئة جميع الحقول.',
            confirmButtonText: 'حسنًا'
        });
        return false;
    }

    if (!emailPattern.test(email)) {
        Swal.fire({
            icon: 'error',
            title: 'بريد إلكتروني غير صالح',
            text: 'يرجى إدخال بريد إلكتروني صحيح.',
            confirmButtonText: 'حسنًا'
        });
        return false;
    }

    if (password.length <= 5) {
        Swal.fire({
            icon: 'error',
            title: 'كلمة المرور قصيرة',
            text: 'يجب أن تحتوي كلمة المرور على أكثر من 5 أحرف.',
            confirmButtonText: 'حسنًا'
        });
        return false;
    }

    if (/\s/.test(password)) {
        Swal.fire({
            icon: 'error',
            title: 'كلمة المرور غير صالحة',
            text: 'لا يُسمح بالمسافات في كلمة المرور.',
            confirmButtonText: 'حسنًا'
        });
        return false;
    }

    // Redirect on successful login
    window.location.href = "ChooseRole_Page.html";
    return false;
}