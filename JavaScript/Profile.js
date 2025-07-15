document.addEventListener('DOMContentLoaded', function() {
    function showMessage(msg) {
        // Use alert for simplicity; replace with a custom modal if desired
        alert(msg);
    }

    document.querySelectorAll('.approve-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            showMessage('تم قبول العمل');
            const appointment = btn.closest('.appointment');
            if (appointment) appointment.remove();
        });
    });

    document.querySelectorAll('.cancel-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            showMessage('تم رفض العمل');
            const appointment = btn.closest('.appointment');
            if (appointment) appointment.remove();
        });
    });
}); 