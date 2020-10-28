console.log("is this mic on?")

const time = document.getElementById('counter')
let seconds = 0;


function countUp(){
    ++seconds;
    time.innerHTML = pad(seconds % 60);
}
  
  function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
      return "0" + valString;
    } else {
      return valString;
    }
  }

  
