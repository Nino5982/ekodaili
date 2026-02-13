document.addEventListener("DOMContentLoaded", function () {
  // 1. catalog and category
  document.querySelectorAll(".catalog-link").forEach((link) => {
    link.addEventListener("click", function () {
      const label = this.innerText || this.id || "Catalog Link";

      if (typeof gtag !== "undefined") {
        gtag("event", "view_item", { item_name: label });
      }

      if (typeof fbq !== "undefined") {
        fbq("track", "ViewContent", {
          content_name: label,
          content_category: "Catalog",
        });
      }
    });
  });

  // 2. WhatsApp track
  document.querySelectorAll(".whatsapp-link").forEach((link) => {
    link.addEventListener("click", function () {
      if (typeof gtag !== "undefined") {
        gtag("event", "generate_lead", { method: "whatsapp" });
      }

      if (typeof fbq !== "undefined") {
        fbq("track", "Contact");
      }
    });
  });
});
