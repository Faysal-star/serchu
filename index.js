$("#form").submit(function(e){
    e.preventDefault()

    var query = $("#search").val()

    let result = ''

    var API_KEY = 'dbc4092907c6fb1723988e9a32fbcd93'
    var url = 'http://api.serpstack.com/search?access_key=' +API_KEY + "&query=" + query
    console.log(url)

    $.get(url, function(data) {

        $("#result").html('')

        console.log(data)

        data.organic_results.forEach(res => {

            result = `
             
            <h1>${res.title}</h1><br><a target="_blanck" href="${res.url}">${res.url}</a>
            <p>${res.snippet}</p>
            
            `
            $("#result").append(result)
        });

    })

})
