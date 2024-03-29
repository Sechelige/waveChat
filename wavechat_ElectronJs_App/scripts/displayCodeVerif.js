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
textConnexion.innerText = "Code de vérification";

signEmail = document.createElement("label");
signEmail.setAttribute("class", "signText");
signEmail.setAttribute("id", "signEmail");
signEmail.setAttribute("for", "email");
signEmail.innerText = `Entrez le code de vérification envoyé à ${email.value}`;

email = document.createElement("input");
email.setAttribute("class", "inputSign");
email.setAttribute("type", "email");
email.setAttribute("id", "email");
email.setAttribute("name", "email");
email.setAttribute("required", "");

noAccount = document.createElement("p");
noAccount.setAttribute("id", "noAccount");
noAccount.innerText = "S'inscrire";
noAccount.addEventListener("click", function () {
     let script = document.createElement("script");
     script.src = "scripts/displaySignUp.js";
     document.head.appendChild(script);
});

signButton = document.createElement("input");
signButton.setAttribute("id", "signButton");
signButton.setAttribute("type", "submit");
signButton.setAttribute("value", "Se connecter");
signButton.addEventListener("click", function () {
     fetch(`${apiRootAddress}/app/connexion/okcon/${emailValue}`, {
          method: "PUT",
          headers: {
               "Content-Type": "application/json",
          },
          body: JSON.stringify({
               "numCheck": email.value,
          }),
     })
          .then((response) => response.json())
          .then((data) => {
               if (data) {
                    
                    let script = document.createElement("script");
                    script.src = "scripts/displayWave.js";
                    document.head.appendChild(script);
               }
               else {
                    signEmail.style.color = "red";
                    signEmail.innerText = "Code de vérification incorrect";
               }
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
signInBox.appendChild(signButton);
signInBox.appendChild(noAccount);
backgroundSignIn.appendChild(signInBox);

document.body.appendChild(backgroundSignIn);