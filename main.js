// let button = document.querySelector("button");

// button.addEventListener("click", function(){
//     this.style.backgroundColor = "yellow";
//     this.classList.add("toto");
//     this.textContent = "C'est cliqué"
// })

// Correspond à un document.querySelector(All)("elmt")
$("div");

// On ajoute une class comme avec classList.add
$("div").addClass("big");
// On retire une class comme avec classList.remove
$("div").removeClass("big");
// On ajoute ou retire une class comme avec classList.toggle
$("div").toggleClass("big");

// Permet de récupérer la valeur du bgColor actuel
$("#div1").css("background-color");
// Permet de donner la valeur blue au bgColor
$("#div1").css("background-color", "blue")
// Pour modifier plusieurs propriétés en même temps, on place des crochets dans les parenthèses de .css
// dans ces crochets, on indique chaque propriété : valeur séparés par une virgule
$("#div1").css({"background-color":"yellow", "width":"50px", "height": "50px"})

// document.querySelector("nav")
// addEventListener("click", function(){elmt.style.display=none})
// .hide permet d'ajouter un display none à un élément. C'est utile pour les menus burger
$("#div2").hide(1000);
// .show permet d'enlever le display none d'un élément et ainsi de le faire apparaître.
$("#div1").show(1000);

$("button").click(function(){
    $(this).addClass("toto");
    $(this).css("background-color", "yellow");
    $(this).text("c'est cliqué");
})

// Je récupère la valeur des champs avec .val()
$("#sendData").click(function(e){
    e.preventDefault();
    let email = $("input").val();
    let password = $(":password").val();
    console.log(email + " / " + password);
})
// On peut récupérer l'ensemble des informations d'un formulaire en utilisant la méthode .serialize() sur le form
// On récupère ainsi les données sous forme de chaine de caractère.
// On peut également récupérer les informations sous forme de tableau d'objet avec .serializeArray()
$("#sendData").click(function(e){
    e.preventDefault();
    let infos = $(".column").serializeArray()
    console.log(infos);
})
