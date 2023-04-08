containerDiscussion.innerHTML = "";
containerMessenger.style.display = "none";

// Page used to display someone's profile
//
fetch(`${apiRootAddress}/app/user/${userId}`, {
     method: "GET",
     headers: {
          "Content-Type": "application/json",
     },
})
     .then((response) => response.json())
     .then((data) => {
          // Display the profile information (username, email, creation date)
          const divProfile = document.createElement("div");
          divProfile.classList.add("profile");

          const imgProfile = document.createElement("img");
          imgProfile.classList.add("profile_image");
          imgProfile.src = "images/groupChat.png";
          imgProfile.alt = "Profile image";
          divProfile.appendChild(imgProfile);

          const h1ProfileTitle = document.createElement("h1");
          h1ProfileTitle.classList.add("profile_title");
          h1ProfileTitle.textContent = data.nomUtilisateur;
          divProfile.appendChild(h1ProfileTitle);

          const pProfileEmail = document.createElement("p");
          pProfileEmail.classList.add("profile_email");
          pProfileEmail.textContent = data.email;
          divProfile.appendChild(pProfileEmail);

          const pProfileDate = document.createElement("p");
          pProfileDate.classList.add("profile_date");
          const dateStr = data.dateCreation;
          const date = new Date(dateStr);

          const day = date.getDate().toString().padStart(2, "0");
          const month = (date.getMonth() + 1).toString().padStart(2, "0");
          const year = date.getFullYear().toString();
          const hour = date.getUTCHours().toString().padStart(2, "0");
          const minute = date.getUTCMinutes().toString().padStart(2, "0");
          const second = date.getUTCSeconds().toString().padStart(2, "0");

          const formattedDate = `${day}-${month}-${year} à ${hour}:${minute}:${second}`;

          pProfileDate.textContent = `Compte créé le : ${formattedDate}`;
          divProfile.appendChild(pProfileDate);

          containerDiscussion.appendChild(divProfile);
     });
