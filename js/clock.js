const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    //반환값이 숫자이기 때문에 String()을 사용해서 string으로 type을 변환해준 후 사용한다.
    const hours = String(date.getHours()).padStart(2,"0"); //padStart: string의 길이가 2글자가 아니라면 앞에 "0"으로 채워줌
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = (`${hours} : ${minutes} : ${seconds}`);
}

getClock(); //맨 처음에 시간 지연없이 바로 실행시키기 위해서
setInterval(getClock, 1000);