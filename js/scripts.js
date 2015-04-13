$(document).ready(function() {
    $("form#new-place").submit(function(event) {
        event.preventDefault();

        var new_name = $("input#name").val();
        var new_length = $("input#length").val();
        var new_memory = $("input#memory").val();

        var newPlace = { inputName: new_name, inputLength: new_length, memory: new_memory};

        $("ul#all-places").append("<li><span class='place'>" + newPlace.inputName + "</span></li>");

        $("input#name").val("");
        $("input#length").val("");
        $("input#memory").val("");

        $(".place").last().click(function() {
            $("#show-place").show();
            $("#show-place h2").text(newPlace.inputName);
            $(".name").text(newPlace.inputName);
            $(".length").text(newPlace.inputLength);
            $(".memory").text(newPlace.memory);
        });
    });
});
