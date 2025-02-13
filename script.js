document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("response").textContent = "Yay! 💖 Can't wait for Valentine's Day!";
    document.getElementById("response").classList.remove("hidden");
});

document.getElementById("noBtn").addEventListener("click", function() {
    document.getElementById("response").textContent = "Wait... think again? 🥺";
    document.getElementById("response").classList.remove("hidden");
});

// Make images fade in when the page loads
document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".fade-in");
    images.forEach((img) => {
        img.style.opacity = "1";
    });
});