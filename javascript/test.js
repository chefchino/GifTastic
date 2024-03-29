var topics= ["waterfalls", "mountains", "beaches", "islands","trees", "bears", "eagles"];
function displayTopicGiphy(){
    $("#topic-view").prepend();
    var topic = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=N70F0bUVCX3gByJTgX7dA0k2SUFY4LEK&limit=10&q="+ topic;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response){
        var results = response.data;
        for (var i = 0; i < results.length; i++){
        var topicDiv = $("<div class='flex'>");
        var title= results[i].title;
        var rating= results[i].rating;
        var pOne= $("<p>").text("Rating: " + rating.toUpperCase());
        var pTwo=$("<p>").text("Title: " + title.toUpperCase());
        topicDiv.append(pOne, pTwo);
        var stillImgURL = results[i].images.fixed_height_still.url;
        var animateImgURL = results[i].images.fixed_height.url
        var image = $("<img  class='topic1'>").attr("src", stillImgURL);
        image.attr("data-state","still")
        image.attr("data-still", stillImgURL);
        image.attr("data-animate",animateImgURL);
        image.attr("crossorgin", "anonymous");
        topicDiv.append(image);
        $("#topic-view").prepend(topicDiv);
    }
    $(".topic1").on('click', function(){

        var state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }})
})
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