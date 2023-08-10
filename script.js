/**
 * Pseudo-code:
 * Au clic (événement) sur le bouton accepter(evenement)
 * la Div Cookies(élément) devient invivsible (action)
 */

const bannerFeature = () => {
// Étape 1:
// Je Sélectionne et stock l'élément
//document.querySelector('.accept-cookies');
  const btnSucces =  document.querySelector('.accept-cookies');

  // Je Sélectionne et stock la Section cookie
  const cookies = document.querySelector('.cookie');

  // Je SOUMETS la section cookie à une action au clic
  btnSucces.addEventListener('click', function(){
    cookies.style.opacity = '0';
  });
};

bannerFeature();

/**
 * La func youtubeFeature alterne les états de l'emoji
 * et du bouton subscribe au clic
 */
const youtubeFeature = () => {
  const emoji = document.querySelector('i');

  emoji.addEventListener('click', () => {
    emoji.classList.toggle('fa-smile-wink');
    emoji.classList.toggle('btn-happy');
  });

  const btnbutton = document.querySelector('.btn');

  btnbutton.addEventListener('click', () => {
    btnbutton.classList.toggle('subscriber');
 
    if(btnbutton.innerText === 'Subscribe'){
      btnbutton.innerText = `You're subscribed`;
    } else {
      btnbutton.innerText = 'Subscribe';
    }
  });
};

youtubeFeature();

// Step 1: Je selectionne et stock les éléments nécessaire
const modal= document.querySelector('.modal-container');

const btn = document.querySelector('.btn-success');

const code = document.querySelector('.code');

const icone = document.querySelector('.fa-times');

//Step 3: Je les soumets aux évements

window.addEventListener('scroll', displayModal);
function displayModal(){
  const hauteur = document.documentElement.scrollTop;
  if(hauteur > 640){
    modal.style.display = 'flex'; /**display passe de none à flex(cf:modal-container) */
  }
}

btn.addEventListener('click', () => {
  code.style.display = 'block'; //visible
  btn.style.display = 'none'; //invisible
});

icone.addEventListener('click', () => {
  modal.style.display = 'none';
  window.removeEventListener('scroll', displayModal);
});

