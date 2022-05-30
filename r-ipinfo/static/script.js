let ip = document.getElementById("ip")
let country = document.getElementById("country")
let capital = document.getElementById("capital")
let city = document.getElementById("city")
let timezone = document.getElementById("timezone")
let region = document.getElementById("region")
let org = document.getElementById("org")

function search() {
    let ip = document.getElementById("ip").value;

    fetch(`https://ipapi.co/${ip}/json/`)
    .then(response => response.json())
    .then(function(data) {
        ip.innerHTML = `IP: ${data.ip}`
        country.innerHTML = `Country: ${data.country_name}`
        capital.innerHTML = `Capital: ${data.country_capital}`
        city.innerHTML = `City: ${data.city}`
        timezone.innerHTML = `Timezone: ${data.timezone}`
        region.innerHTML = `Region: ${data.region}`
        org.innerHTML = `ISP: ${data.org}`
    })
}


$(function(){
    $("#__hidecont").hide();
        $("#__btnshow").click(function(){
            $(".card").show();
    })
})






