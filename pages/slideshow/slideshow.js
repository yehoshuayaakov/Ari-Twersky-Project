const image = document.getElementById("image");
const nextButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");

let count = 0;

const imageSrcArray = ['../../assets/images/kosel.jpg','../../assets/images/pic2.jpg','../../assets/images/pic3.JPG','../../assets/images/pic4.JPG','../../assets/images/pic5.PNG'];

const changeImage = () => {
    console.log(count)
    count++
    if (count < imageSrcArray.length){
          image.src = imageSrcArray[count];
    }
    else {
        count = 0;
        image.src =imageSrcArray[count];
    }
  
}
let intervalFunction;
const startSlideShow = () => {
    console.log('click', count)
    intervalFunction = setInterval(changeImage, 1500)
};

const stopSlideShow = () => {
    clearInterval(intervalFunction);
}

nextButton.addEventListener('click', startSlideShow);
stopButton.addEventListener('click',stopSlideShow);
