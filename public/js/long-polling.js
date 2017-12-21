
$("#btn").on("click", function(){
    $(".execute").hide();
    $(".loading").show();
    polling();
})

function polling() {
    $.ajax({
        url: "/api/long-polling",
        success (result) {
            console.log(result);
            if (result.finished) {
                $(".execute").show();
                $(".loading").hide();
                $(".result").show();
            }
        },
        error (result,status,xhr) {
            console.log(result);
            console.log(status);
            console.log(xhr);
        }
    })
}
