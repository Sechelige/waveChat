let divs = '';
                for (let i of Array(20).keys()) {
                    divs += `<a href="#"> 
                                <div class="containerChat">  
                                <img class="groupChatImage" src="images/groupChat.png" alt="A description of the image">
                                <div class="groupChatText"> 
                                <p class="groupName">Nom</p>  
                                <p class="lastMessage">Dernier message</p>  
                                </div> 
                                </div>
                                </a>`;
                }
                document.write(divs);

                const myDivs = document.getElementsByClassName("containerChat");
                for (let i = 0; i < myDivs.length; i++) {
                    myDivs[i].addEventListener("click", function () {
                        this.style.backgroundColor = "#";
                    })
                }