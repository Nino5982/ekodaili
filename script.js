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
