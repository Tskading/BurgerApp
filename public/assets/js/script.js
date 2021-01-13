$(function() {
    $(".eat-it").on("click", function(event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("devoured");
            // function changeDevState(newDevoured) {
            //     if(newDevoured == 0)
            //     newDevoured = 1;
            // };
        var newDevouredState = {
            devoured: newDevoured
        };
        
        console.log(id);
        console.log(newDevoured);
        console.log(newDevouredState);

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(function() {
            console.log("changed devoured state to:", newDevoured);
            location.reload();
        });

        // changeDevState();
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("#burger").val().trim(),
           
            // devoured: $("[name=devoured]: checked").val().trim()
        };

        console.log(newBurger);

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("created new burger");
            location.reload();
        });
    });
});