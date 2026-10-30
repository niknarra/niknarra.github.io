const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const updatedNodes = document.querySelectorAll("[data-last-updated]");
const timeNodes = document.querySelectorAll("[data-central-time]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const isPortfolio = document.body.classList.contains("portfolio-page");
const mobileNavigation = window.matchMedia("(max-width: 760px)");

const lastModified = new Date(document.lastModified);
if (!Number.isNaN(lastModified.getTime())) {
  const updatedLabel = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(lastModified);

  updatedNodes.forEach((node) => {
    node.dateTime = lastModified.toISOString().slice(0, 10);
    node.textContent = `Last updated ${updatedLabel}`;
  });
}

if (timeNodes.length) {
  const centralTime = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
    timeZoneName: "short",
  });
  const updateTime = () => {
    const label = centralTime.format(new Date());
    timeNodes.forEach((node) => { node.textContent = label; });
  };

  updateTime();
  window.setInterval(updateTime, 60_000);
}

function updateHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
}

function closeNavigation({ restoreFocus = false } = {}) {
  const wasOpen = navToggle?.getAttribute("aria-expanded") === "true";
  nav?.classList.remove("is-open");
  navToggle?.setAttribute("aria-expanded", "false");
  document.body.classList.remove("nav-open");
  if (nav) nav.inert = mobileNavigation.matches;
  if (restoreFocus && wasOpen) navToggle?.focus();
}

navToggle?.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  nav?.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("nav-open", !isOpen);
  if (nav) nav.inert = isOpen;
});

nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => closeNavigation()));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeNavigation({ restoreFocus: true });
});
mobileNavigation.addEventListener("change", () => closeNavigation());
closeNavigation();
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

function initPortfolioMotion() {
  if (!isPortfolio || !window.gsap || !window.ScrollTrigger || reduceMotion.matches) return;

  const { gsap, ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);
  document.documentElement.classList.add("motion-ready");

  let lenis;
  let tickLenis;
  if (window.Lenis) {
    lenis = new window.Lenis({
      anchors: { offset: -76 },
      smoothWheel: true,
      lerp: 0.085,
      stopInertiaOnNavigate: true,
    });
    lenis.on("scroll", ScrollTrigger.update);
    tickLenis = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tickLenis);
    gsap.ticker.lagSmoothing(0);
  }

  const heroTargets = document.querySelectorAll(
    "[data-hero-line], [data-hero-label], [data-hero-intro], [data-hero-portrait]",
  );
  gsap.set(heroTargets, { visibility: "visible" });

  const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
  heroTimeline
    .from("[data-hero-label]", { opacity: 0, y: 10, duration: 0.45 })
    .from("[data-hero-line]", { opacity: 0, y: 35, stagger: 0.07, duration: 0.7 }, "-=0.2")
    .from("[data-hero-portrait]", { opacity: 0, y: 24, duration: 0.7 }, "-=0.6")
    .from("[data-hero-intro]", { opacity: 0, y: 12, stagger: 0.06, duration: 0.5 }, "-=0.45");

  const revealTargets = gsap.utils.toArray("[data-reveal], [data-log-entry], [data-project], [data-award]");
  revealTargets.forEach((element) => {
    gsap.from(element, {
      scrollTrigger: { trigger: element, start: "top 94%", once: true },
      opacity: 0,
      y: 18,
      duration: 0.55,
      ease: "power2.out",
    });
  });

  // A preference change should stop smooth scrolling and reveal all content immediately.
  reduceMotion.addEventListener("change", (event) => {
    if (!event.matches) return;
    heroTimeline.kill();
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    gsap.killTweensOf([...heroTargets, ...revealTargets]);
    gsap.set([...heroTargets, ...revealTargets], { clearProps: "opacity,transform,visibility" });
    document.documentElement.classList.remove("motion-ready");
    if (tickLenis) gsap.ticker.remove(tickLenis);
    lenis?.destroy();
  });

  if (document.readyState === "complete") ScrollTrigger.refresh();
  else window.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
}

initPortfolioMotion();
