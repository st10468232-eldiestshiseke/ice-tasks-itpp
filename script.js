/* =========================================================
   Eldies Tshiseke — Professional Digital Portfolio
   ITPP5112 Practical Assignment 1
   Shared JavaScript for all pages
   ========================================================= */

/* ---------- Mobile navigation toggle ---------- */
const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  navToggle.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );
});

/* Close the mobile menu after choosing a link */
siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation menu");
  });
});

/* ---------- Current year in the footer ---------- */
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Tidy placeholder for missing images ----------
   Until you add your own photos and screenshots (images/
   folder), any missing image is replaced by a neat
   placeholder box instead of a broken-image icon.       */
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("error", () => {
    const placeholder = document.createElement("div");
    placeholder.className = "img-placeholder";
    placeholder.textContent = img.alt || "Image coming soon";
    img.replaceWith(placeholder);
  });
});