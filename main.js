// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let likeButtons = document.getElementsByClassName("like");

for (let i = 0; i < likeButtons.length; i++) {
  likeButtons[i].addEventListener("click", heartFunction)
}

function heartFunction (e){
  console.log(e)

  mimicServerCall()
  .then(() => {
   if (e.target.innerText = EMPTY_HEART){
    e.target.classList.add("activated-heart")
    e.target.innerText = FULL_HEART
   }
   else {
    e.target.classList.remove("activated-heart")
    e.target.innerText = EMPTY_HEART
   }

  })
  .catch((rejectMessage) => {
    let errorModal = document.getElementById("modal");
    errorModal.classList.remove("hidden");
    errorModal.children[1].innerText = rejectMessage;
    setTimeout(() => {errorModal.classList.add("hidden")}, 3000)
  })
}





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
