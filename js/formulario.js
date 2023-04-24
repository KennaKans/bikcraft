const form = document.querySelector("form");

function formSent(answer) {
  if (answer.ok) {
    form.innerHTML =
      "<p class= 'font-2-l' style='grid-column: 1/-1;padding: 1rem; border-radius: 4px, background: #f7f7f7;'><span style = 'color: #317A00;'>Mensagem enviada com sucesso.</span> Em breve retornaremos!</p>";
  } else {
    form.innerHTML =
      "<p class= 'font-2-l' style='grid-column: 1/-1;padding: 1rem; border-radius: 4px, background: #f7f7f7;'><span style = 'color: #E00000;'>Erro ao enviar.</span> Tente novamente ou envie sua mensagem para o e-mail: contato@bikcraft.com</p>";
  }
}

function sendForm(event) {
  event.preventDefault();
  const btn = document.querySelector("form button");
  btn.disabled = true;
  btn.innerText = "Enviando...";

  const data = new FormData(form);

  fetch("./send.php", {
    method: "POST",
    body: data,
  }).then(formSent);
}

formulario.addEventListener("submit", sendForm);
