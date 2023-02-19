// function to scroll container to bottom
function scrollToBottom() {
    let objDiv = document.getElementById("containerDiscussion");
    objDiv.scrollTop = objDiv.scrollHeight;
  };
  
  // export the function
  module.exports = scrollToBottom;