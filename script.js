const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {

        e.preventDefault();

        document.getElementById("message").innerHTML =
            "✅ Thank you! Your message has been received.";

        form.reset();

    });
}