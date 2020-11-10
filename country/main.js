$.ajax({
    url:"https://restcountries.eu/rest/v2/lang/en",
    method:"GET",
    data:{
        fields:"name;capital;population;currencies"
    },
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
    data:{
        fields:"name;capital;population;currencies"
    },
    success:function(response){
        $("#countFr").text(response.length);
        response.forEach(country => {
            $("#tableFr").append("<tr><td>" + country.name + "</td><td>" + country.capital + "</td><td>" + country.population + "</td><td>" + country.currencies[0].name + "</td></tr>")
        });
    }
})

$.ajax({
    url:"https://restcountries.eu/rest/v2/all",
    method:"GET",
    data:{
        fields:"name;capital;population;currencies"
    },
    success:function(response){
        response.forEach(country => {
            $("#chooseCountry").append("<option>"+ country.name +"</option>");
        });
        $("#submitCountry").click(function(e){
            e.preventDefault();
            let country = response.find(country => country.name == $("#chooseCountry").val());
            $("#countryName").text(country.name);
            $("#countryCapital").text(country.capital);
            $("#countryPop").text(country.population);
            $("#countryCur").text(country.currencies[0].name);
        })
    }
})

