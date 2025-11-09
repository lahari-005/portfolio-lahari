// Simple animations and interactive behavior for Lahari's Portfolio

document.addEventListener("DOMContentLoaded", () => {
  // Animate skill bars (if present)
  const fills = document.querySelectorAll(".skill-fill");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.dataset.fill || "70%";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );
  fills.forEach((fill) => observer.observe(fill));

  // Create Back to Top button
  const topBtn = document.createElement("button");
  topBtn.textContent = "↑";
  topBtn.className = "top-btn";
  document.body.appendChild(topBtn);

  window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 500 ? "block" : "none";
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (targetId.length > 1 && document.querySelector(targetId)) {
        e.preventDefault();
        document
          .querySelector(targetId)
          .scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Fade-in animation trigger
  const animatedSections = document.querySelectorAll(
    ".section, .hero-grid > div, .about-card, .project-card, .contact-card"
  );

  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          fadeObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  animatedSections.forEach((el) => fadeObserver.observe(el));
});
