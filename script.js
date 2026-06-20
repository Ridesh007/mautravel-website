const loader = document.getElementById("loader");
const navbar = document.getElementById("mainNav");
const backToTop = document.getElementById("backToTop");
const scrollProgress = document.getElementById("scrollProgress");
const bookingModalElement = document.getElementById("bookingModal");
const bookingModal = bookingModalElement ? new bootstrap.Modal(bookingModalElement) : null;
const WEB3FORMS_ACCESS_KEY = "fa64ef7c-e72b-41e5-bad1-7f3574577f82";

document.addEventListener("DOMContentLoaded", () => {
  loader?.classList.add("hidden");
});

const syncChrome = () => {
  const scrolled = window.scrollY > 30;
  navbar?.classList.toggle("scrolled", scrolled);
  backToTop?.classList.toggle("visible", window.scrollY > 600);

  if (scrollProgress) {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    scrollProgress.style.width = `${Math.min(Math.max(progress, 0), 100)}%`;
  }
};

window.addEventListener("scroll", syncChrome, { passive: true });
syncChrome();

backToTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const counter = entry.target;
      const target = Number(counter.dataset.counter);
      const duration = 1200;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        counter.textContent = Math.floor(progress * target).toLocaleString();
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
      counterObserver.unobserve(counter);
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll("[data-counter]").forEach((counter) => counterObserver.observe(counter));

// Booking count: counts 1→17 only when the CTA section scrolls into view
const bookingCountEl = document.getElementById("booking-count");
const ctaSection = document.getElementById("cta-section");

if (bookingCountEl && ctaSection) {
  let started = false;

  const runBookingCounter = () => {
    if (started) return;
    started = true;

    let current = 1;
    bookingCountEl.textContent = current;

    // Irregular delays to feel like live bookings trickling in
    const delays = [180, 140, 200, 120, 160, 250, 130, 110, 300, 140, 180, 220, 160, 130, 400, 170];

    const step = (i) => {
      if (i >= delays.length) return;
      setTimeout(() => {
        current++;
        bookingCountEl.textContent = current;
        step(i + 1);
      }, delays[i]);
    };

    setTimeout(() => step(0), 500);
  };

  const bookingObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        runBookingCounter();
        bookingObserver.disconnect();
      }
    },
    { threshold: 0.3, rootMargin: "0px 0px -80px 0px" }
  );

  bookingObserver.observe(ctaSection);
}

document.querySelectorAll(".book-package").forEach((button) => {
  button.addEventListener("click", () => {
    const packageName = button.closest(".package-card")?.querySelector("h3")?.textContent || "Tour package";
    const text = encodeURIComponent(`Hello MauTravel, I would like to book the ${packageName}.`);
    window.open(`https://wa.me/23058269725?text=${text}`, "_blank", "noopener");
  });
});

const formatFormMessage = (form) => {
  const rows = [];
  new FormData(form).forEach((value, key) => {
    if (!key.startsWith("_") && String(value).trim()) {
      rows.push(`${key}: ${value}`);
    }
  });
  return rows.join("\n");
};

document.querySelectorAll("[data-email-form]").forEach((form) => {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (WEB3FORMS_ACCESS_KEY === "PASTE_WEB3FORMS_ACCESS_KEY_HERE") {
      alert("Email sending is not configured yet. Add your Web3Forms access key in script.js.");
      return;
    }

    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton?.innerHTML;
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
    }

    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", form.dataset.emailSubject || "New MAUTRAVEL message");
    formData.append("from_name", "MAUTRAVEL Website");
    formData.append("message", formatFormMessage(form));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || "Unable to send message");
      }

      bookingModal?.show();
      form.reset();
    } catch (error) {
      alert("Sorry, the message could not be sent. Please try WhatsApp or check the email form setup.");
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
      }
    }
  });
});

const mapText = document.getElementById("mapText");
const mapCopy = {
  "Grand Baie": "Grand Baie is ideal for beaches, restaurants, catamaran departures, and nightlife.",
  "Ile aux Cerfs": "Ile aux Cerfs brings turquoise lagoons, speedboat rides, snorkeling, and parasailing.",
  Chamarel: "Chamarel combines waterfalls, Seven Colored Earth, rum tasting, and forest roads.",
  "Le Morne": "Le Morne is perfect for dramatic mountain views, beaches, and sunset photography.",
  "Port Louis": "Port Louis offers markets, Caudan Waterfront, museums, and city culture.",
  Casela: "Casela offers safari-style experiences, ziplines, quad biking options, and family activities.",
  "Flic en Flac": "Flic en Flac is perfect for long beach walks, swimming, restaurants, and west coast sunsets."
};

document.querySelectorAll(".mauritius-map button").forEach((button) => {
  button.addEventListener("click", () => {
    if (mapText) mapText.textContent = mapCopy[button.dataset.place] || "Beautiful stop selected.";
    if (button.dataset.url) {
      window.location.href = button.dataset.url;
    }
  });
});

const lightbox = document.getElementById("lightbox");
const lightboxImage = lightbox?.querySelector("img");

document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", () => {
    if (!lightbox || !lightboxImage) return;
    lightboxImage.src = item.dataset.full;
    lightbox.classList.add("open");
  });
});

document.getElementById("closeLightbox")?.addEventListener("click", () => lightbox?.classList.remove("open"));
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.classList.remove("open");
});

const countdown = document.getElementById("countdown");
const offerDeadline = new Date();
offerDeadline.setDate(offerDeadline.getDate() + 9);
offerDeadline.setHours(23, 59, 59, 999);

const updateCountdown = () => {
  if (!countdown) return;
  const diff = offerDeadline - new Date();
  if (diff <= 0) {
    countdown.textContent = "Offer ending soon";
    return;
  }
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

setInterval(updateCountdown, 1000);
updateCountdown();

/* ── Hero slideshow — per-slide content ── */
const heroSlideData = [
  {
    eyebrow: '<i class="fa-solid fa-plane-arrival" aria-hidden="true"></i>&nbsp;SSR Airport → Your Hotel',
    headline: 'Mauritius Airport Transfer<br>— Direct to Your Hotel',
    desc: 'MauTravel provides fixed-price taxi transfers from Sir Seewoosagur Ramgoolam (SSR) International Airport to any hotel, villa, or resort in Mauritius. Licensed drivers, meet-and-greet included, 24/7 service.',
    ctaText: 'Book Your Airport Transfer',
    ctaUrl: 'https://wa.me/23058269725'
  },
  {
    eyebrow: '<i class="fa-solid fa-location-dot" aria-hidden="true"></i>&nbsp;North Coast Escape',
    headline: 'Golden Beaches,<br>Vibrant Nights',
    desc: "Grand Baie's shores, boutique markets, Cap Malheureux, and the best nightlife on the island — the north is where Mauritius truly comes alive.",
    ctaText: 'Book North Mauritius Tour',
    ctaUrl: 'https://wa.me/23058269725'
  },
  {
    eyebrow: '<i class="fa-solid fa-location-dot" aria-hidden="true"></i>&nbsp;South Island Discovery',
    headline: 'Waterfalls, Wild Nature<br>&amp; Scenic Landscapes',
    desc: "Chamarel's seven-colored earth, dramatic waterfalls, the rum route, and untouched nature reserves — the south is Mauritius at its most raw.",
    ctaText: 'Plan South Mauritius Tour',
    ctaUrl: 'https://wa.me/23058269725'
  },
  {
    eyebrow: '<i class="fa-solid fa-location-dot" aria-hidden="true"></i>&nbsp;East Coast Adventures',
    headline: 'Crystal Lagoons,<br>Island Hops &amp; Calm Shores',
    desc: "Ile aux Cerfs, snorkeling, speedboat trips, and the most tranquil white-sand beaches on the island — the east coast is pure paradise.",
    ctaText: 'Book East Mauritius Tour',
    ctaUrl: 'https://wa.me/23058269725'
  },
  {
    eyebrow: '<i class="fa-solid fa-location-dot" aria-hidden="true"></i>&nbsp;West Coast Wonders',
    headline: 'Dolphins at Dawn,<br>Sunsets &amp; Mountain Majesty',
    desc: "Swim with wild dolphins, watch the sun dissolve into the Indian Ocean at Flic en Flac, and drive past the iconic Le Morne mountain.",
    ctaText: 'Book West Mauritius Tour',
    ctaUrl: 'https://wa.me/23058269725'
  },
  {
    eyebrow: '<i class="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i>&nbsp;Your Private Island Tour',
    headline: 'A Trip Built Around You,<br>Not a Schedule',
    desc: "Every detail tailored — your route, your pace, your stops. Private tours with a local Mauritius expert, bookable directly on WhatsApp in minutes.",
    ctaText: 'Plan My Custom Trip',
    ctaUrl: 'https://wa.me/23058269725'
  }
];

const heroSlideTextEl = document.getElementById('heroSlideText');
const heroCarouselEl = document.getElementById('heroCarousel');
const heroSectionEl = document.querySelector('.hero-section');
const heroTrustItems = document.querySelectorAll('.hero-trust-row span');
const heroSlides = heroCarouselEl?.querySelectorAll('.carousel-item') || [];

const getHeroCopy = (index = 0) => (
  heroSlideData[index] || heroSlideData[0]
);

const setActiveHeroTrustItem = (index = 0) => {
  if (!heroTrustItems.length) return;

  const activeIndex = index % heroTrustItems.length;
  heroTrustItems.forEach((item, itemIndex) => {
    item.classList.toggle('is-active', itemIndex === activeIndex);
  });
};

const setHeroOverlay = (index = 0) => {
  const slide = heroSlides[index];
  const overlay = slide?.dataset.readableOverlay;
  heroSectionEl?.classList.toggle('needs-readable-overlay', overlay === 'true' || overlay === 'strong');
  heroSectionEl?.classList.toggle('needs-strong-readable-overlay', overlay === 'strong');
};

const setHeroCopy = (copy) => {
  if (!heroSlideTextEl || !copy) return;

  heroSlideTextEl.querySelector('.slide-eyebrow').innerHTML = copy.eyebrow;
  heroSlideTextEl.querySelector('.slide-headline').innerHTML = copy.headline;
  heroSlideTextEl.querySelector('.slide-desc').textContent = copy.desc;

  const cta = heroSlideTextEl.querySelector('.slide-cta');
  if (cta) {
    cta.innerHTML = `<i class="fa-brands fa-whatsapp" aria-hidden="true"></i> ${copy.ctaText}`;
    cta.href = copy.ctaUrl;
  }
};

const syncMobileHero = () => {
  const activeSlide = heroCarouselEl?.querySelector('.carousel-item.active');
  const activeIndex = activeSlide
    ? Array.from(activeSlide.parentElement.children).indexOf(activeSlide)
    : 0;
  setHeroCopy(getHeroCopy(activeIndex));
  setActiveHeroTrustItem(activeIndex);
  setHeroOverlay(activeIndex);
};

if (heroSlideTextEl && heroCarouselEl) {
  syncMobileHero();

  heroCarouselEl.addEventListener('slide.bs.carousel', (event) => {
    const next = getHeroCopy(event.to);
    if (!next) return;
    setActiveHeroTrustItem(event.to);
    setHeroOverlay(event.to);

    heroSlideTextEl.classList.remove('hero-text-enter');
    heroSlideTextEl.classList.add('hero-text-exit');

    setTimeout(() => {
      setHeroCopy(next);

      heroSlideTextEl.classList.remove('hero-text-exit');
      heroSlideTextEl.classList.add('hero-text-enter');

      setTimeout(() => heroSlideTextEl.classList.remove('hero-text-enter'), 420);
    }, 280);
  });
}

/* ── Tour filter pills (#packages) ──────────────────────────────── */
const filterPills = document.querySelectorAll('.tour-filter-pill');
const tourCards = document.querySelectorAll('#packages [data-region]');

filterPills.forEach((pill) => {
  pill.addEventListener('click', () => {
    const filter = pill.dataset.filter;

    filterPills.forEach((p) => {
      p.classList.toggle('is-active', p === pill);
      p.setAttribute('aria-pressed', p === pill ? 'true' : 'false');
    });

    tourCards.forEach((card) => {
      const show = filter === 'all' || card.dataset.region === filter;
      card.classList.toggle('is-hidden', !show);
    });
  });
});

/* ── Staggered card reveals ─────────────────────────────────────
   Pre-assign transitionDelay to each card column BEFORE the
   IntersectionObserver fires, so cards appear left-to-right.
   ─────────────────────────────────────────────────────────────── */
[
  '#services .row.g-4',
  '#packages .row.g-4',
  '.stats-bar .row',
  '.gallery-strip',
].forEach(selector => {
  const row = document.querySelector(selector);
  if (!row) return;
  row.querySelectorAll(':scope > *').forEach((col, i) => {
    const target = col.classList.contains('reveal') ? col : col.querySelector('.reveal');
    if (target && !target.classList.contains('delay-1')) {
      target.style.transitionDelay = `${Math.min(i * 0.1, 0.5)}s`;
    }
  });
});
