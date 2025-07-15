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

// DOM Ready
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#signup-form");
    if (form) {
        form.addEventListener("submit", validateSignUpForm);
    }
});

function validateSignUpForm(e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check for empty fields
    if (!username || !email || !password || !confirmPassword) {
        Swal.fire({
            icon: 'warning',
            title: 'تنبيه',
            text: 'يرجى تعبئة جميع الحقول.',
            confirmButtonText: 'حسنًا'
        });
        return false;
    }

    // Username rule: max one space not at start or end
    if (/^\s|\s$/.test(username) || (username.split(" ").length - 1) > 1) {
        Swal.fire({
            icon: 'error',
            title: 'اسم المستخدم غير صالح',
            text: 'اسم المستخدم يمكن أن يحتوي على مسافة واحدة فقط، ويجب ألا تكون في البداية أو النهاية.',
            confirmButtonText: 'حسنًا'
        });
        return false;
    }

    // Email validation
    if (!emailPattern.test(email)) {
        Swal.fire({
            icon: 'error',
            title: 'بريد إلكتروني غير صالح',
            text: 'يرجى إدخال بريد إلكتروني صحيح.',
            confirmButtonText: 'حسنًا'
        });
        return false;
    }

    // Password checks
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

    // Password match
    if (password !== confirmPassword) {
        Swal.fire({
            icon: 'error',
            title: 'كلمات المرور غير متطابقة',
            text: 'كلمة المرور وتأكيد كلمة المرور غير متطابقين.',
            confirmButtonText: 'حسنًا'
        });
        return false;
    }

    localStorage.setItem("username", username); 
    // Success – Redirect
   window.location.href = "ChooseRole_Page.html";
    return false;
}
