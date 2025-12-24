document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let currentSlide = 0;
    let autoPlayInterval = null;
    let isAutoPlaying = false;
    const autoPlayDelay = 5000; // 5 seconds

    // UI Elements
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const btnAuto = document.getElementById('btn-autoplay');
    const progressBar = document.getElementById('progress-bar');
    const iconPlay = document.getElementById('icon-play');
    const iconPause = document.getElementById('icon-pause');
    const lightbox = document.getElementById('lightbox');
    const lightboxInner = lightbox ? lightbox.querySelector('.lightbox-inner') : null;
    let isLightboxOpen = false;

    // Initialize
    updateUI();

    // --- Navigation Functions ---

    function goToSlide(index) {
        // Wrap around
        if (index < 0) index = 0; // Stop at start
        if (index >= totalSlides) index = totalSlides - 1; // Stop at end? Or loop? Let's loop.
        // Let's implement Loop for auto-play feel
        if (index >= totalSlides) index = 0;
        if (index < 0) index = totalSlides - 1;

        // Remove active class from all
        slides.forEach(s => s.classList.remove('active'));
        
        // Update state
        currentSlide = index;
        
        // Add active class to new
        slides[currentSlide].classList.add('active');

        // Update Progress Bar
        const progress = ((currentSlide + 1) / totalSlides) * 100;
        progressBar.style.width = `${progress}%`;
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
        resetAutoPlayTimer();
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
        resetAutoPlayTimer();
    }

    function toggleAutoPlay() {
        if (isAutoPlaying) {
            stopAutoPlay();
        } else {
            startAutoPlay();
        }
    }

    function startAutoPlay() {
        if (isAutoPlaying) return;
        isAutoPlaying = true;
        updateUI();
        autoPlayInterval = setInterval(() => {
            goToSlide(currentSlide + 1);
        }, autoPlayDelay);
    }

    function stopAutoPlay() {
        isAutoPlaying = false;
        updateUI();
        clearInterval(autoPlayInterval);
    }

    function resetAutoPlayTimer() {
        if (isAutoPlaying) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = setInterval(() => {
                goToSlide(currentSlide + 1);
            }, autoPlayDelay);
        }
    }

    function updateUI() {
        if (isAutoPlaying) {
            iconPlay.style.display = 'none';
            iconPause.style.display = 'block';
        } else {
            iconPlay.style.display = 'block';
            iconPause.style.display = 'none';
        }
        // Ensure progress is set on init
        const progress = ((currentSlide + 1) / totalSlides) * 100;
        progressBar.style.width = `${progress}%`;
    }

    function openLightbox(node) {
        if (!lightbox || !lightboxInner) return;
        lightboxInner.innerHTML = '';
        let contentNode = null;
        if (node.tagName === 'IMG') {
            const img = document.createElement('img');
            img.src = node.currentSrc || node.src;
            img.alt = node.alt || 'Zoomed image';
            contentNode = img;
        } else {
            contentNode = node.cloneNode(true);
        }
        lightboxInner.appendChild(contentNode);
        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden', 'false');
        isLightboxOpen = true;
    }

    function closeLightbox() {
        if (!lightbox) return;
        lightbox.classList.remove('open');
        lightbox.setAttribute('aria-hidden', 'true');
        if (lightboxInner) lightboxInner.innerHTML = '';
        isLightboxOpen = false;
    }

    if (lightbox) {
        lightbox.querySelectorAll('[data-lightbox-close]').forEach((el) => {
            el.addEventListener('click', (event) => {
                event.stopPropagation();
                closeLightbox();
            });
        });
    }

    document.querySelectorAll('[data-zoomable]').forEach((node) => {
        node.setAttribute('tabindex', '0');
        node.addEventListener('click', (event) => {
            event.stopPropagation();
            openLightbox(node);
        });
        node.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openLightbox(node);
            }
        });
    });

    // --- Event Listeners ---

    btnNext.addEventListener('click', nextSlide);
    btnPrev.addEventListener('click', prevSlide);
    btnAuto.addEventListener('click', toggleAutoPlay);

    document.addEventListener('keydown', (e) => {
        if (isLightboxOpen) {
            if (e.key === 'Escape') {
                closeLightbox();
            }
            return;
        }
        if (e.key === 'ArrowRight' || e.key === ' ') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });

    // Start Autoplay by default? The prompt said "Support auto-play", implies feature. 
    // Usually presentations don't auto-play immediately unless it's a kiosk mode.
    // Let's start it to show off the "Silky" animations, but maybe allow user to stop.
    startAutoPlay();

});
