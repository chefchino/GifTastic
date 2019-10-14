document.cookie = 'cross-site-cookie=bar; SameSite=None; Secure';
console.log("working");
var topics= ["waterfalls", "mountains", "beaches", "islands","trees", "bears", "eagles"];


function displayTopicGiphy(){
    var topic = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?api_key=N70F0bUVCX3gByJTgX7dA0k2SUFY4LEK&limit=10&q="+ topic;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response){
        var results = response.data;

        for (var i = 0; i < results.length; i++){


        
        var topicDiv = $("<div class='topic1'>");
        var rating= results[i].rating;
        var pOne= $("<p>").text("Rating: " + rating);
        topicDiv.append(pOne);
        var imgURL = results[i].url;
        var image = $("<img>").attr("src", imgURL);
        topicDiv.append(image);
        $("#topic-view").prepend(topicDiv);
        console.log("response",response);
    
    }})
}


function renderButtons(){

    $("#buttons").empty();
    for (var i = 0; i <topics.length; i++){
        var btn= $("<button>");
        btn.addClass("topicBtn")
        btn.attr("data-name", topics[i]);
        btn.text(topics[i]);
        $("#buttons").append(btn);
    }
}
$("#add-topic").on("click", function(event){
    event.preventDefault();
var topic= $("#topic-input").val().trim();
topics.push(topic);
renderButtons();
});

$(document).on("click", ".topicBtn", displayTopicGiphy);
renderButtons();
           // for (var i = 0; i < results.length; i++) {

        //     if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
          
        //       var gifDiv = $("<div>");


        //       var rating = results[i].rating;


        //       var p = $("<p>").text("Rating: " + rating);


        //       var personImage = $("<img>");

     
        //       personImage.attr("src", results[i].images.fixed_height.url);

        //       gifDiv.append(p);
        //       gifDiv.append(personImage);


        //       $("#topic-view").prepend(gifDiv);
        //     }}});
        // }