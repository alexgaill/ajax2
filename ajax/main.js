
// Ici on récupère des infos d'un fichier .txt avec l'ajax
$.ajax({
    method:"GET",
    url:"infos.txt"
}).done(function(response){
    $("#getInfos").text(response);
    toto = response;
});

// De cette façon on envoie des informations vers un fichier
// Attention on ne peut pas écrire directement sur le fichier.
// Pour ça, il faut passer par un langage back qui le peut.
$.ajax({
    method:"POST",
    url:"infos.txt",
    data:{
        text: "C'est un nouveau texte"
    }
}).done(function(response){
    console.log(response);
}).fail(function(response){
    console.log(response);
});

$.ajax({
    method:"GET",
    url:"http://api.weatherstack.com/current",
    data:{
        access_key:"90d8b329ba3ef764a2f8dc8a32ec1152",
        query:"Paris"
    },
    success:function(response){
        console.log(response);
    }
})