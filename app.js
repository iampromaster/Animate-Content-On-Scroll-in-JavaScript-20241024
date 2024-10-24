let cards = document.querySelectorAll(".card");

window.onscroll = () => {
  cardAnim();
};

function cardAnim() {
  //getting screen height
  let scrollHeight = window.innerHeight;

  cards.forEach(card => {
    //getting card top
    let cardTop = card.getBoundingClientRect().top + card.offsetHeight / 2;

    if (cardTop < scrollHeight) {
      card.classList.add("anim");
    } else {
      card.classList.remove("anim");
    }
  });
}

cardAnim();
