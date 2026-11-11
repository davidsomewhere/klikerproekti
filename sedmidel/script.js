// Reserve buttons
const reserveBtn = document.getElementById("reserveBtn");
const navReserveBtn = document.getElementById("navReserveBtn");

function handleReserve() {
  // Friendly confirmation instead of a rude alert
  const confirmed = confirm(
    "Ready to reserve the Tesla Roadster?\n\n" +
    "You'll be taken to a special page. (This is a fan demo — the real reservation is on Tesla.com)"
  );

  if (confirmed) {
    // Small delay for better UX feel
    reserveBtn.disabled = true;
    reserveBtn.textContent = "Redirecting...";
    
    setTimeout(() => {
      window.location.href = "urtoopoor.html";
    }, 600);
  }
}

if (reserveBtn) {
  reserveBtn.addEventListener("click", handleReserve);
}

if (navReserveBtn) {
  navReserveBtn.addEventListener("click", handleReserve);
}

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
