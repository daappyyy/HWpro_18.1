let timerTime = 10;

function formatTime(timeValue){
    if(timeValue < 10){
        return '0' + timeValue;
    }else return timeValue;
}

function convertTimeInMinutesAndSeconds(timerTime){
    let timeInMinutes = Math.floor(timerTime / 60);
    let timeInSecondsLeft = timerTime - timeInMinutes * 60;   // or timerTime % 60

    return formatTime(timeInMinutes) + ':' + formatTime(timeInSecondsLeft);
}

function changeTime()
{
    document.querySelector('.timer').textContent = convertTimeInMinutesAndSeconds(timerTime);
    if(timerTime > 0){
        timerTime--;
    }else{
        clearInterval(timer);
        document.querySelector('.timer').textContent = `Meet Zhorik :)`;
        addPhoto();
        return 0;
    }
}
let timer = setInterval(changeTime, 1000);

function addPhoto(){
   const photo = document.createElement('img');
   photo.src = "images/zhorik.jpg";
   photo.alt = "zhorik";
   photo.width = 300;
   photo.height = 300;
   document.querySelector('.image-wrapper').appendChild(photo);
}
