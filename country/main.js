$.ajax({
    url:"https://restcountries.eu/rest/v2/lang/en",
    method:"GET",
    success:function(response){
        $("#countEn").text(response.length);
        response.forEach(country => {
            $("#tableEn").append("<tr><td>" + country.name + "</td><td>" + country.capital + "</td><td>" + country.population + "</td><td>" + country.currencies[0].name + "</td></tr>")
        });
    }
})

$.ajax({
    url:"https://restcountries.eu/rest/v2/lang/fr",
    method:"GET",
    success:function(response){
        $("#countFr").text(response.length);
        response.forEach(country => {
            $("#tableFr").append("<tr><td>" + country.name + "</td><td>" + country.capital + "</td><td>" + country.population + "</td><td>" + country.currencies[0].name + "</td></tr>")
        });
    }
})