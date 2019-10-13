console.log("working");

var topics= ["waterfalls", "mountains", "beaches", "islands","trees", "bears", "eagles"];

function displayTopicGiphy(){
    var topic = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=N70F0bUVCX3gByJTgX7dA0k2SUFY4LEK&q="+ topic + "&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){

        var results = response.data;
        for (var j = 0; j < results.length; j++){
            if (results[j].rating !== "r" && results[j].rating !== "pg-13"){
                var rating = results[j].rating;
                var pOne =$("<p>").text("Rating: "+rating);
                var Image = $("<img>");
                Image.attr("src", results[j].images.fixed_height_still.url);
                console.log({Image});
            }
        }
        var topicBtn = $("<button class='topicBtn'>");
        var rating = response.rating;
        var pOne = $("<p>").text("Rating: " + rating);
        topicBtn.append(pOne);

        $("#topic-view").prepend(topicBtn);
    })
}
function renderButtons(){

    $("#buttons").empty();
    for (var i = 0; i <topics.length; i++){

        var btn = $("<button>");
        btn.addClass("topic-btn");
        btn.attr("data-name", topics[i]);
        btn.text(topics[i]);
        $("#buttons").append(btn);
    }
}

$("#add-topic").on("click", function(event){
    event.preventDefault();

    var topic1 = $("#topic-input").val().trim();
    topics.push(topic1);

    renderButtons();
});
$(document).on("click", ".topic-btn", displayTopicGiphy );

renderButtons();