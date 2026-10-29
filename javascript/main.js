const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const yearNodes = document.querySelectorAll("[data-year]");
const timeNodes = document.querySelectorAll("[data-chicago-time]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const isPortfolio = document.body.classList.contains("portfolio-page");

yearNodes.forEach((node) => {
  node.textContent = new Date().getFullYear();
});

function updateChicagoTime() {
  if (!timeNodes.length) return;
  const value = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());

  timeNodes.forEach((node) => {
    node.textContent = `Chicago · ${value}`;
  });
}

updateChicagoTime();
if (timeNodes.length) window.setInterval(updateChicagoTime, 60_000);

function updateHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
}

function closeNavigation() {
  nav?.classList.remove("is-open");
  navToggle?.setAttribute("aria-expanded", "false");
  document.body.classList.remove("nav-open");
}

navToggle?.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  nav?.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("nav-open", !isOpen);
});

nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNavigation));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeNavigation();
});
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

function initLegacyReveals() {
  const revealNodes = document.querySelectorAll(".reveal");
  if (!revealNodes.length) return;

  if (reduceMotion.matches || !("IntersectionObserver" in window)) {
    revealNodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8%", threshold: 0.08 },
  );

  revealNodes.forEach((node) => observer.observe(node));
}

initLegacyReveals();

if (isPortfolio && window.gsap && window.ScrollTrigger && !reduceMotion.matches) {
  const { gsap, ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);
  document.documentElement.classList.add("motion-ready");

  let lenis;
  if (window.Lenis) {
    lenis = new window.Lenis({
      anchors: { offset: -76 },
      smoothWheel: true,
      lerp: 0.085,
      stopInertiaOnNavigate: true,
    });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  const heroTargets = document.querySelectorAll(
    "[data-hero-line], [data-hero-label], [data-hero-intro], [data-hero-portrait]",
  );
  gsap.set(heroTargets, { visibility: "visible" });

  const heroTimeline = gsap.timeline({ defaults: { ease: "power4.out" } });
  heroTimeline
    .from("[data-hero-label]", { opacity: 0, y: 18, duration: 0.7 })
    .from("[data-hero-line]", { opacity: 0, yPercent: 115, rotate: 2, stagger: 0.1, duration: 1.05 }, "-=0.35")
    .from("[data-hero-portrait]", { opacity: 0, xPercent: 12, rotate: 9, scale: 0.88, duration: 1.15 }, "-=0.85")
    .from("[data-hero-intro]", { opacity: 0, y: 24, stagger: 0.08, duration: 0.7 }, "-=0.65");

  gsap.utils.toArray("[data-reveal]").forEach((element) => {
    gsap.from(element, {
      scrollTrigger: { trigger: element, start: "top 88%", once: true },
      opacity: 0,
      y: 55,
      duration: 0.9,
      ease: "power3.out",
    });
  });

  gsap.utils.toArray("[data-log-entry]").forEach((entry) => {
    gsap.from(entry.children, {
      scrollTrigger: { trigger: entry, start: "top 82%", once: true },
      opacity: 0,
      y: 36,
      stagger: 0.06,
      duration: 0.72,
      ease: "power3.out",
    });
  });

  gsap.utils.toArray("[data-project]").forEach((project, index) => {
    const direction = index % 2 === 0 ? -1 : 1;
    gsap.from(project, {
      scrollTrigger: { trigger: project, start: "top 88%", once: true },
      opacity: 0,
      xPercent: 7 * direction,
      rotate: 3.5 * direction,
      duration: 1.05,
      ease: "power3.out",
    });

    const machine = project.querySelector(".project-machine");
    if (machine) {
      gsap.to(machine, {
        scrollTrigger: { trigger: project, start: "top bottom", end: "bottom top", scrub: 1.1 },
        y: -34,
        ease: "none",
      });
    }
  });

  gsap.from("[data-award]", {
    scrollTrigger: { trigger: ".award-wall", start: "top 82%", once: true },
    opacity: 0,
    y: 80,
    rotate: (index) => (index === 0 ? -8 : 8),
    stagger: 0.16,
    duration: 1.1,
    ease: "power3.out",
  });

  gsap.utils.toArray("[data-parallax]").forEach((element) => {
    const movement = Number(element.dataset.parallax || -20);
    gsap.to(element, {
      scrollTrigger: { trigger: element, start: "top bottom", end: "bottom top", scrub: 1 },
      y: movement,
      ease: "none",
    });
  });

  const progress = document.querySelector("[data-progress]");
  if (progress) {
    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => gsap.set(progress, { scaleY: self.progress }),
    });
  }

  if (window.matchMedia("(pointer: fine)").matches) {
    document.querySelectorAll("[data-magnetic]").forEach((element) => {
      element.addEventListener("pointermove", (event) => {
        const bounds = element.getBoundingClientRect();
        gsap.to(element, {
          x: (event.clientX - bounds.left - bounds.width / 2) * 0.09,
          y: (event.clientY - bounds.top - bounds.height / 2) * 0.14,
          duration: 0.35,
          ease: "power2.out",
        });
      });
      element.addEventListener("pointerleave", () => {
        gsap.to(element, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.35)" });
      });
    });
  }

  window.addEventListener("load", () => ScrollTrigger.refresh());
}
