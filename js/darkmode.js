//default to light mode
var mode = 'light';
if (localStorage.getItem("mode")){
   
//check if there's a saved state already
   mode = localStorage.getItem("mode");
} else if (window.matchMedia('(preferes-color-scheme:dark)')){
   
//check if dark mode is preferred
   mode = "dark";
}
//update the class based on the mode
document.documentElement.className = mode;

//when the button is clicked, toggle the mode and save the change in local storage
document.getElementById('toggleMode').onclick = function(){
   mode = (mode === 'dark') ? 'light' : 'dark';
   document.documentElement.className = mode;
   localStorage.setItem("mode", mode);
}