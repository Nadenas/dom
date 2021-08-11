window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
	
  // your code here
  let select = document.querySelector("#mySelect");
  
  for (let i = 0; i < countries.length; i++) {
    let country = countries[i]
    select.innerHTML += `<option>${country}<option>`
  }
  select.addEventListener("change", function(){
    alert(event.target.value)
  })
  
};
