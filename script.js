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
  const cookies = document.querySelector('.footer');

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
