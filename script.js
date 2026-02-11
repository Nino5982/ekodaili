// Redirect + Pixel
const referralLink = "https://greenwayglobal.ge/shop/all";

function handleRedirect() {
  if (typeof fbq !== "undefined") {
    fbq("track", "Lead");
  }

  setTimeout(() => {
    window.location.href = referralLink;
  }, 300);
}
// –––––––––––––––––––––
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null, // აკვირდება მთლიან viewport-ს
    rootMargin: "-50% 0px -50% 0px", // სექცია აქტიურდება, როცა ეკრანის შუა ნაწილს გადაკვეთს
    threshold: 0,
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // ვიღებთ აქტიური სექციის ID-ს
        const id = entry.target.getAttribute("id");

        // ვშლით 'active' კლასს ყველა ლინკიდან
        document.querySelectorAll("#sidebar nav a").forEach((link) => {
          link.classList.remove("active");
        });

        // ვამატებთ 'active' კლასს მხოლოდ იმ ლინკს, რომელიც ამ სექციას შეესაბამება
        const activeLink = document.querySelector(
          `#sidebar nav a[href="#${id}"]`,
        );
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // ვაკვირდებით ყველა სექციას, რომელსაც აქვს ID
  document.querySelectorAll("section[id]").forEach((section) => {
    observer.observe(section);
  });
});
