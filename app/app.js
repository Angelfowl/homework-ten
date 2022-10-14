
// function initListeners () {
//     $("a").click(function (e) {
//         // this listens for ids on the a tags
//         let aID = e.currentTarget.id;
//         // console.log("a id" + aID);

//         let contentID = aID + "Content";
//         // console.log (contentID);

//         MODEl.updateView(contentID);

        
//     });
// }

function initListeners(){
    $("a").click(function(e){
        let btnId = e.currentTarget.id;
        console.log("click " + btnId);
        MODEl.changePageContent(btnId);
    })
}



$(document).ready(function () {
    initListeners();
    MODEl.changePageContent("home")
});

