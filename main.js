var addFriend = document.querySelector("#add")
// var removeFriend = document.querySelector("#remove")
var relation = document.querySelector("h5")

var check = 0;
addFriend.addEventListener("click", function () {
    if (check == 0) {
        relation.innerHTML = "Friends"
        addFriend.innerHTML = "Remove Friend"
        relation.style.color = "green"
        check=1
    }
    else{
        relation.innerHTML = "Stranger"
        addFriend.innerHTML="Add Friend"
        relation.style.color = "red"
        check = 0;
    }

})

// removeFriend.addEventListener("click" , function () {
//     relation.innerHTML = "Stranger"
//     relation.style.color = "red"
// })
