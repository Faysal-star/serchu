$("#form").submit(function(e){
    e.preventDefault()

    var query = $("#search").val()

    let result = ''

    var API_KEY = '5d44ace3287b182e4b32c98b6f550060'
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