

var zero = document.querySelector("#zero");
var num = 0;

function updateFps() {
    if (num <= 24) {
        zero.innerHTML = num.toString(); 
        num++;
        setTimeout(updateFps, 70);
    }
}

updateFps();

var white = document.querySelector("#white");
var sv = document.querySelector("#white svg");

var widt = 0;
var hgt = 10;

var interval = setInterval(() => {
  if (widt < 100) {
    white.style.width = widt + '%';
    widt++;
  } else if (widt == 100 && hgt < 41) {
    white.style.height = hgt + 'vh';
    hgt++;
  } else if (hgt == 41) {  
    white.style.backgroundColor = 'transparent'; 
    sv.style.display = 'block';   
    clearInterval(interval); 
    }
}, 20); 


