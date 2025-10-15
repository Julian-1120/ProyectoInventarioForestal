// ============================
//   IMPORTAR FIREBASE
// ============================
import { auth, signInWithEmailAndPassword } from "./fireBase-config.js";

// ============================
//   TODO CÓDIGO DE INTERFAZ
// ============================
document.addEventListener("DOMContentLoaded", () => {
  // ============================
  //   MENÚS DESPLEGABLES
  // ============================
  function setupDropdown(buttonId) {
    const btn = document.getElementById(buttonId);
    if (!btn) return;

    const menu = btn.nextElementSibling;

    btn.addEventListener("click", function (e) {
      e.preventDefault();
      menu.classList.toggle("show");
    });

    // Cierra si hago clic fuera
    document.addEventListener("click", function (e) {
      if (!btn.parentElement.contains(e.target)) {
        menu.classList.remove("show");
      }
    });

    // Cierra al hacer clic en una opción
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => menu.classList.remove("show"));
    });
  }

  setupDropdown("registrarBtn");
  setupDropdown("gestionarBtn");

  // ============================
  //   MODAL DE LOGIN
  // ============================
  const loginBtn = document.querySelector(".btn-login"); 
  const modal = document.getElementById("loginModal");
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("closeBtn");

  if (loginBtn && modal && overlay && closeBtn) {
    loginBtn.addEventListener("click", () => {
      modal.style.display = "block";
      overlay.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
      overlay.style.display = "none";
    });

    overlay.addEventListener("click", () => {
      modal.style.display = "none";
      overlay.style.display = "none";
    });
  }

  // ============================
  //   CAMBIO DE SECCIONES
  // ============================
  const catalogoSection = document.getElementById("catalogoSection");
  const registrarArbolSection = document.getElementById("registrarArbolSection");
  const volverCatalogoBtn = document.getElementById("volverCatalogo");

  // Click en "Registrar Árboles"
  document.querySelectorAll("[data-section='registrar']").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      catalogoSection.style.display = "none";
      registrarArbolSection.style.display = "block";
    });
  });

  // Botón volver al catálogo
  if (volverCatalogoBtn) {
    volverCatalogoBtn.addEventListener("click", () => {
      registrarArbolSection.style.display = "none";
      catalogoSection.style.display = "block";
    });
  }

  // ============================
  //   AUTENTICACIÓN CON FIREBASE
  // ============================
  const form = document.querySelector("#loginModal form");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = form.querySelector("input[type='text']").value;
      const password = form.querySelector("input[type='password']").value;

      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        alert(` Bienvenido, ${user.email}`);
        modal.style.display = "none";
        overlay.style.display = "none";
      } catch (error) {
        alert("Usuario o contraseña incorrectos");
        console.error(error);
      }
    });
  }
});
