//ativar links, manter selecionado (barra com width:100%) quando estiver nas páginas: Bicicletas, Seguros e Contato.
const links = document.querySelectorAll(".header-menu a");

function activateLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("active");
  }
}

links.forEach(activateLink);

//ativar itens no orçamento ex: comprar o seguro prata te redireciona para a página de orçamento com o seguro prata já selecionado.
const parameters = new URLSearchParams(location.search);

function activeProduct(parameter) {
  const element = document.getElementById(parameter);
  if (element) {
    element.checked = true;
  }
}

parameters.forEach(activeProduct);

//perguntas frequentes ativo ao clicar
const perguntas = document.querySelectorAll(".perguntas button");

function activePergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const reply = document.getElementById(controls);

  reply.classList.toggle("active");
  const active = reply.classList.contains("active");
  console.log(active);
  pergunta.setAttribute("aria-expanded", active);
}

function eventPerguntas(pergunta) {
  pergunta.addEventListener("click", activePergunta);
}

perguntas.forEach(eventPerguntas);

//galeria de imagens dos produtos
const gallery = document.querySelectorAll(".bike-img img");
const galleryContainer = document.querySelector(".bike-img");

function changeImg(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  console.log(media);
  if (media) {
    galleryContainer.prepend(img);
  }
}

function eventGallery(img) {
  img.addEventListener("click", changeImg);
}

gallery.forEach(eventGallery);
