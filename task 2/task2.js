const colorSelect = document.getElementById("colorSelect");
const Sample = document.getElementById("Sample");
const changecolor = document.getElementById("changecolor");

changecolor.onclick = () => {
   Sample.style.color = colorSelect.value;
 }