        const industriesSection = document.querySelector(".industries-slider-wrapper");

        if (industriesSection) {
            const slider = industriesSection.querySelector(".industries-slider");
            const next = industriesSection.querySelector(".next-btn");
            const prev = industriesSection.querySelector(".prev-btn");

            function getScrollAmount() {
                // Always scroll exactly 1 full visible card
                const card = slider.querySelector(".industry-card");
                if (!card) return slider.clientWidth;

                const cardStyle = window.getComputedStyle(card);
                const marginRight = parseFloat(cardStyle.marginRight) || 0;

                return card.offsetWidth + marginRight;
            }

            next.addEventListener("click", () => {
                slider.scrollBy({
                    left: getScrollAmount(),
                    behavior: "smooth"
                });
            });

            prev.addEventListener("click", () => {
                slider.scrollBy({
                    left: -getScrollAmount(),
                    behavior: "smooth"
                });
            });
        }

        const veeralSlider = document.querySelector(".why-slider");
        const veeralNext = document.querySelector(".veeral-right");
        const veeralPrev = document.querySelector(".veeral-left");

        if (veeralSlider && veeralNext && veeralPrev) {
            const veeralCard = veeralSlider.querySelector(".why-card");
            const veeralStep = veeralCard
                ? veeralCard.clientWidth + 30
                : veeralSlider.clientWidth / 2;

            veeralNext.addEventListener("click", () => {
                veeralSlider.scrollBy({
                    left: veeralStep,
                    behavior: "smooth"
                });
            });

            veeralPrev.addEventListener("click", () => {
                veeralSlider.scrollBy({
                    left: -veeralStep,
                    behavior: "smooth"
                });
            });
        }

        const marquee = document.getElementById('marquee');

        // Duplicate the children to create the seamless loop
        const clone = marquee.innerHTML;
        marquee.insertAdjacentHTML('beforeend', clone);

        // Optional: ensure images are loaded before starting to avoid layout jumps
        const imgs = marquee.querySelectorAll('img');
        let loaded = 0;
        imgs.forEach(img => {
        if (img.complete) { loaded++; }
        else {
            img.addEventListener('load', () => {
            loaded++;
            if (loaded === imgs.length) {
                // images loaded
            }
            });
        }
        });

        // Force GPU compositing (helps on some platforms)
        marquee.style.transform = 'translateZ(0)';


   