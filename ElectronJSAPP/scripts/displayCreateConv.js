containerDiscussion.innerHTML = "";
containerMessenger.style.display = "none";

var formConv = document.createElement("div");
formConv.setAttribute("id", "formConv");
containerDiscussion.appendChild(formConv);

// elements for the form, such as input fields for the group name and description, also a way add several users to the group
var formConvName = document.createElement("input");
formConvName.setAttribute("type", "text");
formConvName.setAttribute("id", "formConvName");
formConvName.setAttribute("placeholder", "Nom de la conversation");
formConv.appendChild(formConvName);

var formConvDescription = document.createElement("input");
formConvDescription.setAttribute("type", "text");
formConvDescription.setAttribute("id", "formConvDescription");
formConvDescription.setAttribute("placeholder", "Description de la conversation");
formConv.appendChild(formConvDescription);


var formConvUsers = document.createElement("input");
formConvUsers.setAttribute("type", "text");
formConvUsers.setAttribute("id", "formConvUsers");
formConvUsers.setAttribute("placeholder", "Ajouter un utilisateur");
formConv.appendChild(formConvUsers);

// when pressing enter, a div with the username and it's profile picture is created, and the input field is cleared. The user can then add another user. 
// When the user is done adding users, he can click on the "Créer la conversation" button to create the conversation
// when clicking on a user div (with the username and profile picture), the user is removed from the list of users to add to the conversation
formConvUsers.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        // if the user exists, store it's username in a variable
        fetch("http://grxnd3r.freeboxos.fr:26500/app/user/email/" + formConvUsers.value)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                if (data.nomUtilisateur != null) {
                    var username = data.nomUtilisateur;
                    event.preventDefault();
                    var divUser = document.createElement("div");
                    divUser.setAttribute("id", "divUser");
                    divUser.setAttribute("data-userId", "null");
                    formConvUsersList.appendChild(divUser);
                    var divUserPic = document.createElement("div");
                    divUserPic.setAttribute("id", "divUserPic");
                    divUser.appendChild(divUserPic);
                    var imgUserPic = document.createElement("img");
                    imgUserPic.setAttribute("id", "imgUserPic");
                    imgUserPic.setAttribute("src", `images/groupChat.png`);
                    divUserPic.appendChild(imgUserPic);
                    var divUserName = document.createElement("div");
                    divUserName.setAttribute("id", "divUserName");
                    divUserName.innerText = username;
                    divUser.appendChild(divUserName);
                    divUser.addEventListener("click", function () {
                        divUser.remove();
                    })
                    formConvUsers.value = "";
                }
                else {
                    formConvUsers.value = "";
                }
            })
            .catch(function (error) {
                console.log(error);
            });


    }
});

var formConvSubmit = document.createElement("button");
formConvSubmit.setAttribute("type", "submit");
formConvSubmit.setAttribute("id", "formConvSubmit");
formConvSubmit.innerText = "Créer la conversation";
formConv.appendChild(formConvSubmit);

// same div as formConv, for the users
var formConvUsersList = document.createElement("div");
formConvUsersList.setAttribute("id", "formConvUsersList");
containerDiscussion.appendChild(formConvUsersList);

// text with "Liste des utilisateurs" above the list of users

var formConvUsersListText = document.createElement("div");
formConvUsersListText.setAttribute("id", "formConvUsersListText");
formConvUsersListText.innerText = "Utilisateurs du groupe";
formConvUsersList.appendChild(formConvUsersListText);