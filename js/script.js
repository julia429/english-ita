let noOfCharac = 1000;
// let contents = document.querySelectorAll("#content2");
let contents = document.getElementsByClassName("content");
let arr = [1, 2, 3, 4, 5];

    for (var i = 0; i < arr.length; i ++) {
        // console.log(arr[i]);
        for(var i = 0; i < contents.length; i ++) {
            contents[i].setAttribute("id", arr[i]);
            if(contents[i].textContent.length < noOfCharac) {
                console.log("hi");
                contents[i].nextElementSibling.style.display = "none";
                // console.log(typeof(contents[i]));
                // console.log(toString(contents[i]));
            } else {
                console.log("hello");
                let displayText = contents[i].textContent.slice(0,noOfCharac);
                let moreText = contents[i].textContent.slice(noOfCharac);
                contents[i].innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
            }
        }
    }




// contents.forEach(content => {
//     if(content.textContent.length < noOfCharac){
//         content.nextElementSibling.style.display = "none";
//     }
//     else{
//         let displayText = content.textContent.slice(0,noOfCharac);
//         let moreText = content.textContent.slice(noOfCharac);
//         content.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
//     }
// });

function readMore(btn){
    let post = btn.parentElement;
    post.querySelector(".dots").classList.toggle("hide");
    post.querySelector(".more").classList.toggle("hide");
    btn.textContent == "more" ? btn.textContent = "less" : btn.textContent = "more";
    // btn.textContent == "більше" ? btn.textContent = "менше" : btn.textContent = "більше";
}