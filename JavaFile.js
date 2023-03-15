
window.onload = setForm;

function setForm() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("Your order was recieved! Thank You!");
      return false;
   }
}