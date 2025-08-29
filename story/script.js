var array = [
    { dp: "https://plus.unsplash.com/premium_photo-1756147641535-6232626a4cb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D", story: "https://plus.unsplash.com/premium_photo-1756147641535-6232626a4cb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D" },
    { dp: "https://images.unsplash.com/photo-1534083220759-4c3c00112ea0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1755803966085-250f9e31b05c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D" },
    { dp: "https://plus.unsplash.com/premium_photo-1755617893484-e34cf4aaba3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D", story: "https://images.unsplash.com/photo-1740387252899-89cabe9bc1fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDk3fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D" },
    { dp: "https://images.unsplash.com/photo-1755511268112-e2044cbab49e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D", story: "https://plus.unsplash.com/premium_photo-1753982281850-66b9ae79123c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDk0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D" },
    { dp: "https://plus.unsplash.com/premium_photo-1747873867884-4546774a33a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDk4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D", story: "https://images.unsplash.com/photo-1753996437496-2c4c5339e525?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwNHx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8" },
    { dp: "https://images.unsplash.com/photo-1754051359311-8488e91ac3cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExNHx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8", story: "https://plus.unsplash.com/premium_photo-1754211654507-e0a561f6b9c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExOHx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8" },
];

var storylist = document.querySelector(".storyli")
var images = "";
array.forEach(function (elem, ind) {
    images += `<div class="story">
                <img id="${ind}" src="${elem.dp}" alt="">
            </div>`
})
storylist.innerHTML = images;

storylist.addEventListener("click", function (dets) {
    // console.log(array[dets.target.id])
    document.querySelector("#screen").style.display = "block"
    document.querySelector("#screen").style.backgroundImage = `url(${array[dets.target.id].story})`

    setTimeout(() => {
        document.querySelector("#screen").style.display = "none"

    }, 3000);
})


