const backgroundSignIn = document.createElement('div');
backgroundSignIn.setAttribute('id', 'backgroundSignIn');

const signInBox = document.createElement('div');
signInBox.setAttribute('id', 'signInBox');

const containerWave = document.createElement('div');
containerWave.setAttribute('id', 'containerWave');

const logoWave = document.createElement('img');
logoWave.setAttribute('id', 'logoWave');
logoWave.setAttribute('src', 'icon.png');
logoWave.style.display = 'inline-block';

const waveLogoText = document.createElement('h1');
waveLogoText.setAttribute('id', 'waveLogoText');
waveLogoText.style.display = 'inline-block';
waveLogoText.innerText = 'Wave';

const slogan = document.createElement('p');
slogan.setAttribute('id', 'slogan');
slogan.innerText = "La messagerie qui prend une vague d'avance";

const textConnexion = document.createElement('p');
textConnexion.setAttribute('id', 'textConnexion');
textConnexion.innerText = 'Connexion';

const signEmail = document.createElement('label');
signEmail.setAttribute('class', 'signText');
signEmail.setAttribute('id', 'signEmail');
signEmail.setAttribute('for', 'email');
signEmail.innerText = 'Adresse Email';

const email = document.createElement('input');
email.setAttribute('class', 'inputSign');
email.setAttribute('type', 'email');
email.setAttribute('id', 'email');
email.setAttribute('name', 'email');
email.setAttribute('required', '');

const signPassword = document.createElement('label');
signPassword.setAttribute('class', 'signText');
signPassword.setAttribute('id', 'signPassword');
signPassword.setAttribute('for', 'password');
signPassword.innerText = 'Mot de passe';

const password = document.createElement('input');
password.setAttribute('class', 'inputSign');
password.setAttribute('type', 'password');
password.setAttribute('id', 'password');
password.setAttribute('name', 'password');
password.setAttribute('required', '');

const signButton = document.createElement('input');
signButton.setAttribute('id', 'signButton');
signButton.setAttribute('type', 'submit');
signButton.setAttribute('value', 'Se connecter');

containerWave.appendChild(logoWave);
containerWave.appendChild(waveLogoText);
signInBox.appendChild(containerWave);
signInBox.appendChild(slogan);
signInBox.appendChild(textConnexion);
signInBox.appendChild(signEmail);
signInBox.appendChild(document.createElement('br'));
signInBox.appendChild(email);
signInBox.appendChild(document.createElement('br'));
signInBox.appendChild(document.createElement('br'));
signInBox.appendChild(signPassword);
signInBox.appendChild(document.createElement('br'));
signInBox.appendChild(password);
signInBox.appendChild(document.createElement('br'));
signInBox.appendChild(signButton);
backgroundSignIn.appendChild(signInBox);

document.body.appendChild(backgroundSignIn);