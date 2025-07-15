const modalImages = [
      {src: '/My Code/Logos/Mojtaba/بحر/photo_2025-06-02_02-26-33.jpg', caption: 'صورة 1'},
      {src: '/My Code/Logos/Mojtaba/بحر/photo_2025-06-02_02-26-37.jpg', caption: 'صورة 2'},
      {src: '/My Code/Logos/Mojtaba/بحر/photo_2025-06-02_02-26-27.jpg', caption: 'صورة 3'}
    ];
    const redModalImages = [
      {src: '/My Code/Logos/Mojtaba/الاحمر/Artboard 1 (2).jpg', caption: 'الأحمر 1'},
      {src: '/My Code/Logos/Mojtaba/الاحمر/Artboard 2 (2).png', caption: 'الأحمر 2'},
      {src: '/My Code/Logos/Mojtaba/الاحمر/Artboard 3 (2).png', caption: 'الأحمر 3'},
      {src: '/My Code/Logos/Mojtaba/الاحمر/Artboard 3-1.png', caption: 'الأحمر 4'},
      {src: '/My Code/Logos/Mojtaba/الاحمر/Artboard 4 (2).png', caption: 'الأحمر 5'},
      {src: '/My Code/Logos/Mojtaba/الاحمر/Artboard 4-1.png', caption: 'الأحمر 6'},
      {src: '/My Code/Logos/Mojtaba/الاحمر/Artboard 4-2.png', caption: 'الأحمر 7'},
      {src: '/My Code/Logos/Mojtaba/الاحمر/Artboard 4-3.png', caption: 'الأحمر 8'},
      {src: '/My Code/Logos/Mojtaba/الاحمر/Artboard 4-4.png', caption: 'الأحمر 9'},
      {src: '/My Code/Logos/Mojtaba/الاحمر/Artboard 5 (2).png', caption: 'الأحمر 10'}
    ];
    const orangeModalImages = [
      {src: '/My Code/Logos/Mojtaba/برتقالية/EVO_للتوصيل_و_الشحن_السريع_تخزين_ب_2_دينار.jpg', caption: 'برتقالية 1'},
      {src: '/My Code/Logos/Mojtaba/برتقالية/EVO للتوصيل و الشحن السريع - ح.jpg', caption: 'برتقالية 2'},
      {src: '/My Code/Logos/Mojtaba/برتقالية/EVO_للتوصيل_و_الشحن_السريع_بوست_رقم_1_2.jpg', caption: 'برتقالية 3'},
      {src: '/My Code/Logos/Mojtaba/برتقالية/EVO_للتوصيل_و_الشحن_السريع_تجميع_مجاني.jpg', caption: 'برتقالية 4'},
      {src: '/My Code/Logos/Mojtaba/برتقالية/Artboard 1.jpg', caption: 'برتقالية 5'},
      {src: '/My Code/Logos/Mojtaba/برتقالية/Artboard 2.jpg', caption: 'برتقالية 6'},
      {src: '/My Code/Logos/Mojtaba/برتقالية/EVO_للتوصيل_و_الشحن_السريع_الحماية_الشاملة.jpg', caption: 'برتقالية 7'}
    ];
    let modalIndex = 0;
    let redModalIndex = 0;
    function openModal(idx = 0) {
      modalIndex = idx;
      updateModalImage();
      document.getElementById('modal-overlay').style.display = 'flex';
    }
    function openRedModal(idx = 0) {
      redModalIndex = idx;
      updateRedModalImage();
      document.getElementById('modal-overlay-red').style.display = 'flex';
    }
    function closeModal() {
      document.getElementById('modal-overlay').style.display = 'none';
    }
    function closeRedModal() {
      document.getElementById('modal-overlay-red').style.display = 'none';
    }
    function updateModalImage() {
      const img = document.getElementById('modal-img');
      const caption = document.getElementById('modal-caption');
      img.src = modalImages[modalIndex].src;
      caption.textContent = modalImages[modalIndex].caption;
    }
    function updateRedModalImage() {
      const img = document.getElementById('modal-img-red');
      img.src = redModalImages[redModalIndex].src;
      // Optional: add caption if you want
    }
    function nextModalImage() {
      modalIndex = (modalIndex + 1) % modalImages.length;
      updateModalImage();
    }
    function prevModalImage() {
      modalIndex = (modalIndex - 1 + modalImages.length) % modalImages.length;
      updateModalImage();
    }
    function nextRedModalImage() {
      redModalIndex = (redModalIndex + 1) % redModalImages.length;
      updateRedModalImage();
    }
    function prevRedModalImage() {
      redModalIndex = (redModalIndex - 1 + redModalImages.length) % redModalImages.length;
      updateRedModalImage();
    }

    const matrexModalImages = [
      {src: '/My Code/Logos/Mojtaba/الاحمر/Artboard 1 (2).jpg'},
      {src: '/My Code/Logos/Mojtaba/الاحمر/Artboard 2 (2).png'},
      {src: '/My Code/Logos/Mojtaba/الاحمر/Artboard 3 (2).png'},
      {src: '/My Code/Logos/Mojtaba/الاحمر/Artboard 3-1.png'},
      {src: '/My Code/Logos/Mojtaba/الاحمر/Artboard 4 (2).png'},
      {src: '/My Code/Logos/Mojtaba/الاحمر/Artboard 4-1.png'},
      {src: '/My Code/Logos/Mojtaba/الاحمر/Artboard 4-2.png'},
      {src: '/My Code/Logos/Mojtaba/الاحمر/Artboard 4-3.png'},
      {src: '/My Code/Logos/Mojtaba/الاحمر/Artboard 4-4.png'}
    ];
    let matrexModalIndex = 0;
    function openMatrexModal() {
      document.getElementById('modal-overlay-matrex').style.display = 'flex';
    }
    function closeMatrexModal() {
      document.getElementById('modal-overlay-matrex').style.display = 'none';
    }
    function updateMatrexModalImage() {
      const img = document.getElementById('modal-img-matrex');
      img.src = matrexModalImages[matrexModalIndex].src;
    }
    function nextMatrexModalImage() {
      matrexModalIndex = (matrexModalIndex + 1) % matrexModalImages.length;
      updateMatrexModalImage();
    }
    function prevMatrexModalImage() {
      matrexModalIndex = (matrexModalIndex - 1 + matrexModalImages.length) % matrexModalImages.length;
      updateMatrexModalImage();
    }

    const matrexSingleModalImages = [
      {src: '/My Code/Logos/Mojtaba/الاحمر/Artboard 1 (2).jpg', caption: 'SOCIAL MEDIA DESIGN MATREX'}
    ];
    let matrexSingleModalIndex = 0;
    function openMatrexSingleModal(idx = 0) {
      matrexSingleModalIndex = idx;
      updateMatrexSingleModalImage();
      document.getElementById('modal-overlay-matrex-single').style.display = 'flex';
    }
    function closeMatrexSingleModal() {
      document.getElementById('modal-overlay-matrex-single').style.display = 'none';
    }
    function updateMatrexSingleModalImage() {
      const img = document.getElementById('modal-img-matrex-single');
      const caption = document.getElementById('modal-caption-matrex-single');
      img.src = matrexSingleModalImages[matrexSingleModalIndex].src;
      caption.textContent = matrexSingleModalImages[matrexSingleModalIndex].caption;
    }
    function nextMatrexSingleModalImage() {
      matrexSingleModalIndex = (matrexSingleModalIndex + 1) % matrexSingleModalImages.length;
      updateMatrexSingleModalImage();
    }
    function prevMatrexSingleModalImage() {
      matrexSingleModalIndex = (matrexSingleModalIndex - 1 + matrexSingleModalImages.length) % matrexSingleModalImages.length;
      updateMatrexSingleModalImage();
    }
    function openOrangeModal(idx = 0) {
      orangeModalIndex = idx;
      updateOrangeModalImage();
      document.getElementById('modal-overlay-orange').style.display = 'flex';
    }
    let orangeModalIndex = 0;
    function closeOrangeModal() {
      document.getElementById('modal-overlay-orange').style.display = 'none';
    }
    function updateOrangeModalImage() {
      const img = document.getElementById('modal-img-orange');
      img.src = orangeModalImages[orangeModalIndex].src;
    }
    function nextOrangeModalImage() {
      orangeModalIndex = (orangeModalIndex + 1) % orangeModalImages.length;
      updateOrangeModalImage();
    }
    function prevOrangeModalImage() {
      orangeModalIndex = (orangeModalIndex - 1 + orangeModalImages.length) % orangeModalImages.length;
      updateOrangeModalImage();
    }

    const greenModalImages = [
      {src: '/My Code/Logos/Mojtaba/الاخضر/Artboard 2.png', caption: 'اخضر 1'},
      {src: '/My Code/Logos/Mojtaba/الاخضر/Artboard 4.png', caption: 'اخضر 2'},
      {src: '/My Code/Logos/Mojtaba/الاخضر/Artboard 8.png', caption: 'اخضر 3'},
      {src: '/My Code/Logos/Mojtaba/الاخضر/Artboard 3.png', caption: 'اخضر 4'},
      {src: '/My Code/Logos/Mojtaba/الاخضر/Artboard 6.png', caption: 'اخضر 5'},
      {src: '/My Code/Logos/Mojtaba/الاخضر/Artboard 5.png', caption: 'اخضر 6'}
    ];
    function openGreenModal(idx = 0) {
      greenModalIndex = idx;
      updateGreenModalImage();
      document.getElementById('modal-overlay-green').style.display = 'flex';
    }
    let greenModalIndex = 0;
    function closeGreenModal() {
      document.getElementById('modal-overlay-green').style.display = 'none';
    }
    function updateGreenModalImage() {
      const img = document.getElementById('modal-img-green');
      img.src = greenModalImages[greenModalIndex].src;
    }
    function nextGreenModalImage() {
      greenModalIndex = (greenModalIndex + 1) % greenModalImages.length;
      updateGreenModalImage();
    }
    function prevGreenModalImage() {
      greenModalIndex = (greenModalIndex - 1 + greenModalImages.length) % greenModalImages.length;
      updateGreenModalImage();
    }

    const blueModalImages = [
      {src: '/My Code/Logos/Mojtaba/الازرق/ابني مستقبلك.jpg', caption: 'ازرق 1'},
      {src: '/My Code/Logos/Mojtaba/الازرق/جامعة فكر اليقين1.jpg', caption: 'ازرق 2'},
      {src: '/My Code/Logos/Mojtaba/الازرق/تعلم لاجل الغد.jpg', caption: 'ازرق 3'},
      {src: '/My Code/Logos/Mojtaba/الازرق/خارطة طريق مستقبل.jpg', caption: 'ازرق 4'},
      {src: '/My Code/Logos/Mojtaba/الازرق/فرصتك في التخصصات الرائدة.jpg', caption: 'ازرق 5'},
     {src: '/My Code/Logos/Mojtaba/الازرق/مشوارك العلمي.jpg', caption: 'ازرق 6'}
    ];
    function openBlueModal(idx = 0) {
      blueModalIndex = idx;
      updateBlueModalImage();
      document.getElementById('modal-overlay-blue').style.display = 'flex';
    }
    let blueModalIndex = 0;
    function closeBlueModal() {
      document.getElementById('modal-overlay-blue').style.display = 'none';
    }
    function updateBlueModalImage() {
      const img = document.getElementById('modal-img-blue');
      img.src = blueModalImages[blueModalIndex].src;
    }
    function nextBlueModalImage() {
      blueModalIndex = (blueModalIndex + 1) % blueModalImages.length;
      updateBlueModalImage();
    }
    function prevBlueModalImage() {
      blueModalIndex = (blueModalIndex - 1 + blueModalImages.length) % blueModalImages.length;
      updateBlueModalImage();
    }

    const weatherModalImages = [
      {src: '/My Code/Logos/Mojtaba/الجو/photo_2025-06-02_02-26-33.jpg', caption: 'جو 1'},
      {src: '/My Code/Logos/Mojtaba/الجو/photo_2025-06-02_02-26-27.jpg', caption: 'جو 2'},
      {src: '/My Code/Logos/Mojtaba/الجو/photo_2025-06-02_02-26-37.jpg', caption: 'جو 3'}
    ];
    function openWeatherModal(idx = 0) {
      weatherModalIndex = idx;
      updateWeatherModalImage();
      document.getElementById('modal-overlay-weather').style.display = 'flex';
    }
    let weatherModalIndex = 0;
    function closeWeatherModal() {
      document.getElementById('modal-overlay-weather').style.display = 'none';
    }
    function updateWeatherModalImage() {
      const img = document.getElementById('modal-img-weather');
      img.src = weatherModalImages[weatherModalIndex].src;
    }
    function nextWeatherModalImage() {
      weatherModalIndex = (weatherModalIndex + 1) % weatherModalImages.length;
      updateWeatherModalImage();
    }
    function prevWeatherModalImage() {
      weatherModalIndex = (weatherModalIndex - 1 + weatherModalImages.length) % weatherModalImages.length;
      updateWeatherModalImage();
    }

    // Improved click-to-close for all modal overlays
    ['modal-overlay', 'modal-overlay-red', 'modal-overlay-matrex', 'modal-overlay-orange', 'modal-overlay-green', 'modal-overlay-blue', 'modal-overlay-weather'].forEach(function(id) {
        var overlay = document.getElementById(id);
        if (overlay) {
            overlay.addEventListener('click', function(e) {
                if (!e.target.closest('.modal-content')) {
                    overlay.style.display = 'none';
                }
            });
        }
    });

    // Reservation modal functionality (only open on button, close on cancel)
    const reserveModal = document.getElementById('reserveModal');
    const reserveBtn = document.querySelector('.reserve-btn');
    const reserveCancel = document.querySelector('.reserve-cancel');
    const reserveForm = document.getElementById('reserveForm');
    reserveBtn.addEventListener('click', function(e) {
        e.preventDefault();
        reserveModal.classList.remove('hidden');
    });
    reserveCancel.addEventListener('click', function() {
        reserveModal.classList.add('hidden');
    });
    reserveForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Show success message
        let msg = document.createElement('div');
        msg.textContent = 'تم ارسال طلبك بنجاح';
        msg.style.cssText = 'color:#39b54a;font-size:1.2rem;text-align:center;margin-top:18px;font-weight:bold;';
        reserveForm.innerHTML = '';
        reserveForm.appendChild(msg);
        setTimeout(() => {
            reserveModal.classList.add('hidden');
            setTimeout(() => { reserveForm.reset && reserveForm.reset(); window.location.reload(); }, 400);
        }, 1500);
    });
