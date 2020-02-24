$(function(){

    $(".create-form").on("submit", function(event){
        event.preventDefualt();

        var newburger = {
            burger_name: $("newburger").val().trim(),
            devoured: 0,
        };


        $.ajax("/api/burgers", {
            type: "POST",
            data: newburger
        }).then(function(){
            console.log("Added new burger");
            location.reload();
        })
    });

    $(".eatburger").on("click", function(event){
         event.preventDefualt();

         var id = $(this).data("id");
         var devouredState = {
             devoured: 1
         };

         $.ajax("/api/burgers/" + id, {
             type: "PUT",
             data: devouredState
         }).then(function(){
             console.log("Burger devoured");
             location.reload();
         });
    });

    $(".trashburger").on("click", function(event){
        event.preventDefualt();

        var id = $(this).data("id");

        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id,
            
        }).then(function(){
            console.log("Burger deleted");
            location.reload();
        });
    })
})