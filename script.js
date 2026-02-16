console.log("ok");
// Formulario de contacto (demo)
const form = document.getElementById("contactForm");
const msg = document.getElementById("contactMsg");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();

    msg.className = "alert alert-success";
    msg.textContent = Gracias, ${nombre}. Recibimos tu mensaje y te contactaremos pronto.;

    form.reset();
  });
}const form = document.getElementById("contactForm");
const msg = document.getElementById("contactMsg");

if (form && msg) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value.trim() || "Gracias";

    msg.className = "alert alert-success";
    msg.textContent = ✅ ${nombre}, recibimos tu mensaje. Te contactaremos pronto.;

    form.reset();
  });
}