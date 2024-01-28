
const image = document.getElementById("image");
const nextButton = document.getElementById("nextButton");
const backButton = document.getElementById("backButton");

let count = 0;

const imageSrcArray = ['../../assets/images/kosel.jpg','../../assets/images/pic2.jpg','../../assets/images/pic3.JPG','../../assets/images/pic4.JPG','../../assets/images/pic5.PNG']

function nextImage(){
        if (count < imageSrcArray.length-1){
            ++count
            image.src = imageSrcArray[count];
            console.log(count)
        }
        else {
            count = 0
            image.src = imageSrcArray[count];
        }
}
function previousImage(){
    if (count > 0){
        --count
        image.src = imageSrcArray[count];
        console.log(count)
    }
    else {
        count = imageSrcArray.length-1
        image.src = imageSrcArray[count];
    }
}


nextButton.addEventListener('click',nextImage);
backButton.addEventListener('click',previousImage)
