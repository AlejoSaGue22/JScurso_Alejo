export function ContactForm(){
    const $form = document.createElement("form"),
          $style = document.getElementById("dynamic-styles");
    $form.classList.add("contact-form");

    $style.innerText = `
    .contact-form {
      --form-ok-color: #4caf50;
      --form-error-color: #f44336;
      margin-left: auto;
      margin-right: auto;
      width: 80%;
    }

    .contact-form>* {
      padding: 0.5rem;
      margin: 1rem auto;
      display: block;
      width: 100%;
    }

    .contact-form textarea {
      resize: none;
    }

    .contact-form legend,
    .contact-form-response {
      font-size: 1.5rem;
      font-weight: bold;
      text-align: center;
    }

    .contact-form input,
    .contact-form textarea {
      font-size: 1rem;
      font-family: sans-serif;
    }

    .contact-form input[type="submit"] {
      width: 50%;
      font-weight: bold;
      cursor: pointer;
    }

    .contact-form *::placeholder {
      color: #000;
    }

    .contact-form [required]:valid {
      border: thin solid var(--form-ok-color);
    }

    .contact-form [required]:invalid {
      border: thin solid var(--form-error-color);
    }

    .contact-form-error {
      margin-top: -1rem;
      font-size: 80%;
      background-color: var(--form-error-color);
      color: #fff;
      transition: all 800ms ease;
    }

    .contact-form-error.is-active {
      display: block;
      animation: show-message 1s 1 normal 0s ease-out both;
    }

    .contact-form-loader {
      text-align: center;
    }

    .none {
      display: none;
    }

    @keyframes show-message {
      0% {
        visibility: hidden;
        opacity: 0;
      }

      100% {
        visibility: visible;
        opacity: 1;
      }
    }
    `

    $form.innerHTML = `
                <legend>Envianos tus comentarios</legend>
                    <input type="text" name="name" placeholder="Escribe tu Nombre" title="El nombre solo acepta letras y espacios en blanco" 
                    pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" required>

                    <input type="email" name="email" placeholder="ejemplo@mail.com" title="Email Incorrecto"
                    pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" required>

                    <input type="text" name="subjet" placeholder="Asunto a tratar" title="El asunto es Requerido" required>

                    <textarea name="" cols="50" rows="5" placeholder="Escriba sus comentarios" data-pattern="^.{1,255}$"
                    title="Tu comentario no debe exceder los 255 caracteres" required></textarea>
                    <input class="enviaInput" type="submit" value="Enviar">

                    <div class="contact-form-loader none">
                        <img src="../assets/tail-spin.svg" alt="Cargando">
                    </div>
                    <div class="contact-form-response none">
                        <p style="color: green;">🍾 Los datos han sido enviados 🍾</p>
                    </div>
     `;

    return $form
}