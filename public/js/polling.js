let timer = null;

$("#btn").on("click", function(){
    $(".execute").hide();
    $(".loading").show();
    polling();
})

function polling() {
    $.ajax({
        url: "/api/polling",
        success (result) {
            console.log(result);
            if (result.finished) {
                clearInterval(timer);
                timer = null;
                $(".execute").show();
                $(".loading").hide();
                $(".result").show();
            }
        }
    })
    let self = arguments.callee;
    if (!timer) {
        timer = setInterval(() => {
            self();
        }, 1000)
        console.log(timer);
    }
}
