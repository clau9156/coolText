"use strict"

// window.addEventListener("load", init);
window.addEventListener("DOMContentLoaded", init);


// text in HTML
// const cooltext = document.querySelector("#cooltext").textContent;
// const container = document.querySelector("#cooltext");
// let n = 0;


function init() {
    console.log("init");
    // get the text
    // document.querySelector("#cooltext").textContent;
    const cooltext = document.querySelector("#cooltext").textContent;
    const container = document.querySelector("#cooltext");
    // clear the HTML area
    document.querySelector("#cooltext").textContent = "";
    // start loop
    loop(cooltext, container);
}

function loop(cooltext, container) {
    console.log("loop");
    // show the N'th letter:
    // - set textContent to subsring of 0 to N
    // document.querySelector("#cooltext").textContent = cooltext.substring(0,n);
    const text = cooltext.split("");
    // increment N
    // n++;
    // wait before calling loop() again
    // if (n <= cooltext.length) {
    //     console.log("wait before calling loop() again");
    //     setTimeout(loop, 500); 
    // }

    for(let n=0; n < text.length; n++){
        console.log("hi");
        const element = text[n];
        const span = document.createElement("span");
        // span.classList.add("cooltext", "letter");
        // span.style.setProperty
        if (element == " ") {
            span.classList.add("cooltext", "letter");
            span.style.setProperty("--delay", n);
            container.append(span);
        } else{
            span.textContent = element;
            span.classList.add("cooltext", "letter");
            span.style.setProperty("--delay", n);
            container.append(span);
        }
        // const delay = 0.1 * n;
        // document.querySelector("span").style.setProperty("--delay", n)
    }
}