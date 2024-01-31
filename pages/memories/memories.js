 import  {memories}  from "./memoriesList.js";

console.log(memories)

let count = 0;

const author = document.getElementById('author');
const content = document.getElementById('content');
const nextButton = document.getElementById("nextButton");
const backButton = document.getElementById("backButton");

author.innerText = 'Author:'+ ' ' + memories[0].author;
content.innerText = memories[0].content;

function nextImage(){
    if (count < memories.length-1){
        ++count
        author.innerText = 'Author:'+ ' ' + memories[count].author;
content.innerText = memories[count].content;
        console.log(count);
    }
    else {
        count = 0
        author.innerText = 'Author:'+ ' ' + memories[count].author;
        content.innerText = memories[count].content;
    }
}

function previousImage(){
if (count > 0){
    --count
    author.innerText = 'Author:'+ ' ' + memories[count].author;
content.innerText = memories[count].content;
    console.log(count);
}
else {
    count = memories.length-1
    author.innerText = 'Author:'+ ' ' + memories[count].author;
        content.innerText = memories[count].content;
}
}

nextButton.addEventListener('click',nextImage);
backButton.addEventListener('click',previousImage)