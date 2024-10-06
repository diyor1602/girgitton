// Get the dialog element
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelector(".addBtn");

// When the user clicks the button, open the dialog
btn.onclick = function() {
  modal.showModal();
}

// When the user clicks outside the modalContent, close the dialog
modal.addEventListener('click', function(event) {
  var modalContent = document.querySelector('.modalContent');

  // Close if clicked outside the modalContent
  if (!modalContent.contains(event.target)) {
    modal.close();
  }
});
