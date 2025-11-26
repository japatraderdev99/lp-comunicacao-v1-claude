// ========================================
// COMUNICAÇÃO: O Discurso do Líder
// Interactive Features & Animations
// ========================================

document.addEventListener('DOMContentLoaded', () => {

    // ========================================
    // Navigation Scroll Effect
    // ========================================
    const nav = document.querySelector('.nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add shadow on scroll
        if (currentScroll > 50) {
            nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });

    // ========================================
    // VSL Player Interaction
    // ========================================
    const vslPlaceholder = document.querySelector('.vsl__placeholder');
    const vslIframe = document.querySelector('.vsl__wrapper iframe');

    if (vslPlaceholder && vslIframe) {
        vslPlaceholder.addEventListener('click', () => {
            // Hide placeholder
            vslPlaceholder.style.display = 'none';

            // Show and autoplay video
            vslIframe.style.display = 'block';

            // Add autoplay parameter to iframe src
            const currentSrc = vslIframe.src;
            if (currentSrc.includes('?')) {
                vslIframe.src = currentSrc + '&autoplay=1';
            } else {
                vslIframe.src = currentSrc + '?autoplay=1';
            }
        });
    }

    // ========================================
    // Scroll Animations (Intersection Observer)
    // ========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optionally unobserve after animation
                // animateOnScroll.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements to animate
    const animatedElements = [
        '.hero__content',
        '.problem__item',
        '.transformation__quote-block',
        '.transformation__content',
        '.module',
        '.authority__grid',
        '.forwho__item',
        '.cta-final__content'
    ];

    animatedElements.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add('animate-on-scroll');
            animateOnScroll.observe(el);
        });
    });

    // ========================================
    // Smooth Scroll for Anchor Links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Only prevent default for internal anchors (not just "#")
            if (href !== '#') {
                e.preventDefault();

                const target = document.querySelector(href);
                if (target) {
                    const navHeight = nav.offsetHeight;
                    const targetPosition = target.offsetTop - navHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ========================================
    // Module Hover Effect - Sequential Delay
    // ========================================
    const modules = document.querySelectorAll('.module');
    modules.forEach((module, index) => {
        module.style.transitionDelay = `${index * 0.1}s`;
    });

    // ========================================
    // CTA Button Ripple Effect
    // ========================================
    const ctaButtons = document.querySelectorAll('.cta-final__button, .nav__cta');

    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple element
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add ripple CSS dynamically
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        .nav__cta, .cta-final__button {
            position: relative;
            overflow: hidden;
        }

        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        }

        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);

    // ========================================
    // Parallax Effect on Hero
    // ========================================
    const hero = document.querySelector('.hero');

    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;

            if (scrolled < hero.offsetHeight) {
                hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
                hero.style.opacity = 1 - (scrolled / hero.offsetHeight) * 0.3;
            }
        });
    }

    // ========================================
    // Number Counter Animation for Stats
    // ========================================
    const animateCounter = (element, target, duration = 2000) => {
        const start = 0;
        const increment = target / (duration / 16); // 60fps
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + '+';
            }
        }, 16);
    };

    // Animate stats when visible
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                entry.target.dataset.animated = 'true';

                const number = entry.target.querySelector('.social-proof__number');
                const targetValue = parseInt(number.textContent);

                if (!isNaN(targetValue)) {
                    animateCounter(number, targetValue);
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.social-proof__stat').forEach(stat => {
        statsObserver.observe(stat);
    });

    // ========================================
    // Magnetic Effect on CTA Buttons (Desktop)
    // ========================================
    if (window.innerWidth > 768) {
        ctaButtons.forEach(button => {
            button.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                const moveX = x * 0.1;
                const moveY = y * 0.1;

                this.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });

            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translate(0, 0)';
            });
        });
    }

    // ========================================
    // Cursor Custom Effect (Optional - Subtle)
    // ========================================
    const createCustomCursor = () => {
        const cursor = document.createElement('div');
        cursor.classList.add('custom-cursor');
        document.body.appendChild(cursor);

        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        const animate = () => {
            const dx = mouseX - cursorX;
            const dy = mouseY - cursorY;

            cursorX += dx * 0.1;
            cursorY += dy * 0.1;

            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';

            requestAnimationFrame(animate);
        };

        animate();

        // Add cursor style
        const cursorStyle = document.createElement('style');
        cursorStyle.textContent = `
            .custom-cursor {
                width: 40px;
                height: 40px;
                border: 2px solid #8E7352;
                border-radius: 50%;
                position: fixed;
                pointer-events: none;
                z-index: 9999;
                transform: translate(-50%, -50%);
                transition: width 0.3s, height 0.3s, border-width 0.3s;
                opacity: 0.5;
                mix-blend-mode: difference;
            }

            @media (max-width: 768px) {
                .custom-cursor {
                    display: none;
                }
            }
        `;
        document.head.appendChild(cursorStyle);
    };

    // Uncomment to enable custom cursor
    // if (window.innerWidth > 768) {
    //     createCustomCursor();
    // }

    // ========================================
    // Progress Bar on Scroll
    // ========================================
    const createProgressBar = () => {
        const progressBar = document.createElement('div');
        progressBar.classList.add('scroll-progress');
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.pageYOffset / windowHeight) * 100;
            progressBar.style.width = scrolled + '%';
        });

        // Add progress bar style
        const progressStyle = document.createElement('style');
        progressStyle.textContent = `
            .scroll-progress {
                position: fixed;
                top: 0;
                left: 0;
                height: 3px;
                background: linear-gradient(90deg, #8E7352 0%, #B89968 100%);
                z-index: 9999;
                transition: width 0.1s ease-out;
            }
        `;
        document.head.appendChild(progressStyle);
    };

    createProgressBar();

    // ========================================
    // Performance: Debounce Scroll Events
    // ========================================
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // ========================================
    // Console Message (Easter Egg)
    // ========================================
    console.log(
        '%c🎯 COMUNICAÇÃO: O Discurso do Líder',
        'font-size: 20px; font-weight: bold; color: #8E7352;'
    );
    console.log(
        '%cDesenvolvido com Claude Code - A masterpiece de conversão',
        'font-size: 12px; color: #6B6B6B;'
    );
    console.log(
        '%c"Pessoas se conectam com pessoas. Histórias convencem."',
        'font-size: 14px; font-style: italic; color: #2E2E2E;'
    );
});
