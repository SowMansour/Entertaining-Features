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
  const emoji = document.querySelector('.blc-btn .fa.fa-meh-blank');

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

const scrollingFeature = () => {
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
};
scrollingFeature();

const menuBurger = () => {
  const iconeBurger = document.querySelector('.navbar-mobile i');

  const modalBurger = document.querySelector('.modal');
  console.log(modalBurger);
  iconeBurger.addEventListener('click', ()=>{
    modalBurger.classList.toggle('change-modal'); 
    iconeBurger.classList.toggle('fa-times');
  });
};
menuBurger();

const darkModeFeat = () => {
  const switchBox = document.querySelector('.switch');
  const switchBtn = document.querySelector('.switch-btn');
  const iconeBtn = document.querySelector('.switch i');
  const container = document.querySelector('.container');
  const section3 = document.querySelector('.accordeon');

  switchBox.addEventListener('click', ()=>{
    switchBtn.classList.toggle('switch-btn-change'); //On se met pas de . quand la creation de class se fait en js
    iconeBtn.classList.toggle('switch-icone-change');
    iconeBtn.classList.toggle('fa-sun');
    switchBox.classList.toggle('switch-change');
    container.classList.toggle('container-change');
    section3.classList.toggle('accordeon-change'); //Permet d'appliquer le dark-mode à l'interieur d'une div enfant
  });
};
darkModeFeat();

const accordeonFaq = ()=>{
  const questionFaq = document.querySelectorAll('.question');

  questionFaq.forEach(question => {
    question.addEventListener('click', ()=>{
      const reponse = question.nextElementSibling;
      reponse.classList.toggle('visible');

      const icone = question.lastElementChild;
      icone.classList.toggle('fa-chevron-up');
    });
  });
};

accordeonFaq();

const ficheProduit = () => { 
//IMG source
  const vignettes = document.querySelectorAll('.small');
  //IMG cible
  const fullImg = document.getElementById('full');
  const btnCart = document.querySelector('button.btn-add');
  let cart = 0;
  //slection de la balise vide pour la dynamiser en js avc un message
  const cartMessage = document.querySelector('.cart-container');

  vignettes.forEach(item => {
    item.addEventListener('click', ()=>{
    //retrieve img source
      let imgSource = item.getAttribute('src');

      //Je place la vignette dans l'elem cible
      fullImg.setAttribute('src', imgSource);
    });
  });

  btnCart.addEventListener('click', ()=>{
    cart++;
    if(cart < 2){
      cartMessage.innerText = `Vous avez ${cart} produit dans votre panier `;
    } else{
      cartMessage.innerText = `Vous avez ${cart} produits dans votre panier `;
    }
  });
};
ficheProduit();

const formFeat = ()=>{
  const form = document.getElementById('formulaire');
  const prenom = document.getElementById('prenom');
  const nom = document.getElementById('nom');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  //Gestion des erreurs
  const msgError = document.querySelectorAll('.error');
  //Creation du message de succès
  const succesMess = document.getElementById('titre-form');
  const regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  form.addEventListener('submit',(e)=>{
    e.preventDefault(); //astuce pour pas raffraichier la page, le navigateur a le controle
    console.log('sent'); //Rien ne s'affiche si on omet la methode preventDefault
  
    const prenomValue = prenom.value.trim();
    console.log(prenomValue);
    const nomValue = nom.value.trim();
    console.log(nomValue); //trim() supprime les espaces avant et après le mot
    const emailValue = email.value.trim();
    console.log(emailValue);
    const messageValue = message.value.trim();
    console.log(messageValue);
 
    //Améliration de l'UI: reset =>les messages d'erreurs sont invisibles
    msgError.forEach(error =>{
      error.classList.add('invisibleMess');
    });

    //verification des infos saisies par le user
    if(prenomValue.length < 2 || prenomValue.length > 10){
      console.log('erreur prenom');
      prenom.nextElementSibling.classList.remove('invisibleMess');
    } else if (nomValue.length < 3 || nomValue.length > 15){
      console.log('erreur nom');
      nom.nextElementSibling.classList.remove('invisibleMess');
    } else if(messageValue.length < 10 || messageValue.length > 100){
      console.log('erreur message');
      message.nextElementSibling.classList.remove('invisibleMess');
    } else if(!regexMail.test(emailValue)){
      console.log('erreur sur le mail');
      email.nextElementSibling.innerText = 'Adresse e-mail invalide';
      email.nextElementSibling.classList.remove('invisibleMess');
    } else{
      succesMess.innerText = 'Votre demande est en cours de traitement !';
      succesMess.classList.add('MessSucces');
      console.log(succesMess);
      form.remove(); //suppression du form une fois que succesMess s'affiche
    }

  });
};
formFeat();

