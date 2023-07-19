// Get the modal element
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var lembrete = document.getElementsByClassName("lembrete");

// Get the <span> element that closes the modal
var span = document.getElementById("close-modal");

// When the user clicks on a lembrete, open the modal
for (var i = 0; i < lembrete.length; i++) {
  lembrete[i].onclick = function() {
    modal.style.display = "block";
    document.getElementById("modal-title").innerHTML = this.getElementsByTagName("h2")[0].innerHTML;
    document.getElementById("modal-description").innerHTML = this.getElementsByTagName("p")[0].innerHTML;
  }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Obtenha todos os botões de "like"
var likeButtons = document.getElementsByClassName("like-button");

// Percorra os botões de "like" e adicione um evento de clique a cada um
for (var i = 0; i < likeButtons.length; i++) {
  var likeButton = likeButtons[i];

  // Defina uma chave única para armazenar o número de likes correspondente a este botão
  var storageKey = "likeCount_" + i;

  // Verifique se o número de likes já está armazenado no localStorage
  if (localStorage.getItem(storageKey)) {
    var likeCount = parseInt(localStorage.getItem(storageKey));
    likeButton.nextElementSibling.innerText = likeCount;
  } else {
    var likeCount = 0;
    localStorage.setItem(storageKey, likeCount.toString()); // Inicialize com zero se ainda não estiver armazenado
    likeButton.nextElementSibling.innerText = likeCount;
  }

  // Defina o número de likes ao carregar a página
  updateLikeButtonText(likeButton, storageKey);

  // Adicione um evento de clique para atualizar o número de likes e armazenar no localStorage
  likeButton.addEventListener("click", function(event) {
    event.stopPropagation(); // Impede a propagação do evento de clique

    var likeCountElement = this.nextElementSibling; // Próximo elemento irmão

    // Obtenha o contador de likes atual
    var likeCount = parseInt(likeCountElement.innerText);

    // Verifique se o botão já possui a classe "liked"
    if (this.classList.contains("liked")) {
      // Se já possui a classe "liked", remova-a e diminua o contador de likes
      this.classList.remove("liked");
      likeCount--;
    } else {
      // Se não possui a classe "liked", adicione-a e incremente o contador de likes
      this.classList.add("liked");
      likeCount++;
    }

    // Atualize o contador de likes
    likeCountElement.innerText = likeCount;

    // Armazene o número de likes atual no localStorage
    var storageKey = this.dataset.storageKey;
    localStorage.setItem(storageKey, likeCount.toString());
  });
}

// Função para atualizar o texto do botão de "like"
function updateLikeButtonText(button, storageKey) {
  var likeCount = parseInt(localStorage.getItem(storageKey));
  button.nextElementSibling.innerText = likeCount;
}
