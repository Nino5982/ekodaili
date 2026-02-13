
// –––––––––––––––––––––
document.addEventListener("DOMContentLoaded", () => {
  /* Observer Configuration */
  const observerOptions = {
    root: null,
    rootMargin: "-25% 0px -25% 0px",
    threshold: 0,
  };

  /* Active State Handler */
  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        const navLinks = document.querySelectorAll("#sidebar nav a");
        const activeLink = document.querySelector(
          `#sidebar nav a[href="#${id}"]`,
        );

        if (activeLink) {
          navLinks.forEach((link) => link.classList.remove("active"));
          activeLink.classList.add("active");
        }
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  /* Initialize Observer for Sections */
  document.querySelectorAll("#wrapper > section[id]").forEach((section) => {
    observer.observe(section);
  });
});
