// Tiny enhancements: year + reveal-on-scroll
document.addEventListener('DOMContentLoaded', () => {
	const y = document.getElementById('year');
	if (y) y.textContent = new Date().getFullYear();

	const els = Array.from(document.querySelectorAll('[data-animate]'));
	const io = new IntersectionObserver((entries) => {
		entries.forEach(e => {
			if (e.isIntersecting) e.target.classList.add('in');
		});
	}, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

	els.forEach(el => io.observe(el));

		// Demo video fallback: if sources 404, replace with poster image
		const demo = document.getElementById('demo-video');
		if (demo) {
			let canPlay = false;
			demo.addEventListener('loadeddata', () => { canPlay = true; }, { once: true });
			setTimeout(() => {
				if (!canPlay) {
					const fig = demo.closest('.hero-video');
					if (fig) {
						const img = document.createElement('img');
						img.src = demo.getAttribute('poster') || 'images/main-app-screenshot.png';
						img.alt = 'App screenshot';
						fig.replaceChild(img, demo);
					}
				}
			}, 1200);
		}
});
