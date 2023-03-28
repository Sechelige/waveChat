containerDiscussion.innerHTML = "";
// Page used to display someone's profile
// 
fetch(`${apiRootAddress}/api/user/${profileId}`, {
     method: "GET",
     headers: {
          "Content-Type": "application/json",
     },
})
     .then((response) => response.json())
     .then((data) => {
          // Display the profile information (username, email, creation date)
          containerDiscussion.innerHTML += `
            <div class="profile">
                <div class="profile__header">
                    <h1 class="profile__title">${data.nomUtilisateur}</h1>
                    <p class="profile__email">${data.email}</p>
                    <p class="profile__date">Created on ${data.dateCreation}</p>
                </div>
            </div>
            `;
     })
     .catch((error) => {
          console.error("Error:", error);
     });
