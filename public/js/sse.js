
let source = new EventSource('/api/sse');
source.addEventListener("open", function(event){
    console.log(event);
    console.log(new Date());
}, false);

source.addEventListener("message", function(event){
    console.log(event.data);
}, false);

source.addEventListener("error", function(event){
    console.log(event);
    console.log(new Date());
}, false);

setTimeout(function(){
    //source.close();
}, 30000);

/*

$("table").on("click", "button", function(){
    let $parent = $(this).parent();
    let id = $(this).attr("data-id");
    $parent.find(".execute").hide();
    $parent.find(".loading").show();
    if (!$parent.find("iframe").length) {
        $parent.append("<iframe></iframe>");
    }
    $parent.find("iframe").hide().attr("src", "/api/iframe?id="+id);
})

function finished(id) {
    let $item = $("table").find("button[data-id="+id+"]");
    let $parent = $item.parent();
    $parent.find(".execute").show();
    $parent.find(".loading").hide();
    $parent.find(".result").show();
}
*/
