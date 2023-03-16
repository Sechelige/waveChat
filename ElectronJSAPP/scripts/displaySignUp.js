document.body.innerHTML = "";
backgroundSignIn = document.createElement("div");
backgroundSignIn.setAttribute("id", "backgroundSignIn");

signInBox = document.createElement("div");
signInBox.setAttribute("id", "signInBox");

containerWave = document.createElement("div");
containerWave.setAttribute("id", "containerWave");

logoWave = document.createElement("img");
logoWave.setAttribute("id", "logoWave");
logoWave.setAttribute("src", "icon.png");
logoWave.style.display = "inline-block";

waveLogoText = document.createElement("h1");
waveLogoText.setAttribute("id", "waveLogoText");
waveLogoText.style.display = "inline-block";
waveLogoText.innerText = "Wave";

slogan = document.createElement("p");
slogan.setAttribute("id", "slogan");
slogan.innerText = "La messagerie qui a une vague d'avance";

textConnexion = document.createElement("p");
textConnexion.setAttribute("id", "textConnexion");
textConnexion.innerText = "Inscription";

signEmail = document.createElement("label");
signEmail.setAttribute("class", "signText");
signEmail.setAttribute("id", "signEmail");
signEmail.setAttribute("for", "email");
signEmail.innerText = "Adresse Email";

email = document.createElement("input");
email.setAttribute("class", "inputSign");
email.setAttribute("type", "email");
email.setAttribute("id", "email");
email.setAttribute("name", "email");
email.setAttribute("required", "");

signPassword = document.createElement("label");
signPassword.setAttribute("class", "signText");
signPassword.setAttribute("id", "signPassword");
signPassword.setAttribute("for", "password");
signPassword.innerText = "Nom d'utilisateur";

password = document.createElement("input");
password.setAttribute("class", "inputSign");
password.setAttribute("id", "password");
password.setAttribute("name", "password");
password.setAttribute("required", "");

// file input for profile picture
fileInput.setAttribute("type", "file");
fileInput.setAttribute("name", "file");
fileInput.setAttribute("id", "file");
fileInput.setAttribute("class", "inputfile");
// when a file is selected, display the image
fileInput.addEventListener("change", function () {
     if (this.files && this.files[0]) {
          let img = document.getElementById("imgProfile");
          img.src = URL.createObjectURL(this.files[0]);
     }
});
fileLabel = document.createElement("label");
fileLabel.setAttribute("for", "file");
fileLabel.innerText = "Choisir une photo de profil";

// displaying the input image from the fileinput
img = document.createElement("img");
img.setAttribute("id", "imgProfile");
img.setAttribute("src", "https://via.placeholder.com/150");
img.setAttribute("alt", "your image");

/// AJOUTER LES APPENDCHILD
noAccount = document.createElement("p");
noAccount.setAttribute("id", "noAccount");
noAccount.innerText = "Se connecter";
noAccount.addEventListener("click", function () {
     let script = document.createElement("script");
     script.src = "scripts/displaySignIn.js";
     document.head.appendChild(script);
});
///

signButton = document.createElement("input");
signButton.setAttribute("id", "signButton");
signButton.setAttribute("type", "submit");
signButton.setAttribute("value", "S'inscrire");
signButton.addEventListener("click", function () {
     // post fetch with email and username
     let email = document.getElementById("email").value;
     let username = document.getElementById("password").value;
     fetch(`${apiRootAddress}/app/user`, {
          method: "PUT",
          headers: {
               "Content-Type": "application/json",
          },
          body: JSON.stringify({
               nomUtilisateur: username,
               photoProfil: "none",
               email: email,
          }),
     })
          .then((response) => response.json())
          .then((data) => {
               // if the user is created, display the sign in page
               let script = document.createElement("script");
               script.src = "scripts/displaySignIn.js";
               document.head.appendChild(script);
          });
});

containerWave.appendChild(logoWave);
containerWave.appendChild(waveLogoText);
signInBox.appendChild(containerWave);
signInBox.appendChild(slogan);
signInBox.appendChild(textConnexion);
signInBox.appendChild(signEmail);
signInBox.appendChild(document.createElement("br"));
signInBox.appendChild(email);
signInBox.appendChild(document.createElement("br"));
signInBox.appendChild(document.createElement("br"));
signInBox.appendChild(signPassword);
signInBox.appendChild(document.createElement("br"));
signInBox.appendChild(password);
signInBox.appendChild(document.createElement("br"));
signInBox.appendChild(document.createElement("br"));
signInBox.appendChild(fileInput);
signInBox.appendChild(fileLabel);
signInBox.appendChild(document.createElement("br"));
signInBox.appendChild(img);
signInBox.appendChild(signButton);
signInBox.appendChild(noAccount);
backgroundSignIn.appendChild(signInBox);

document.body.appendChild(backgroundSignIn);
