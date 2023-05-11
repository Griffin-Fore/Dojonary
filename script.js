function logOut(element) {
    element.innerText = "Log Out";
    console.log("working");
}


function likeAlert(element) {
    console.log("element clicked", element);
    console.log('working to like');
    alert("Ninja was liked");
}

function hide(element) {
    console.log('working to hide');
    element.remove();
}