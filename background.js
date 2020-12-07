const body = document.querySelector("body")
const IMG_NUM = 8;

function init(){
    const randomNumber = getRandom();
    paintBackground(randomNumber);
}

function getRandom(){
    const number = Math.ceil(Math.random() * IMG_NUM);
    return number;
}

function paintBackground(imgNumber){
    const image = new Image;
    //src는 source의 약자
    image.src = `image/${imgNumber}.jpg`
    image.classList.add("bgImg")
    body.prepend(image);

}


init();