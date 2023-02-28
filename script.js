let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let sec = document.getElementById("sec")
let mili = document.getElementById("miliseconds")

let display = document.getElementById("display")

let starttime;
let miliSeconds = 0
let seconds = 0
let min = 59
let hour = 0
let castCount = 0

function start(){
    
    starttime = setInterval(()=>{
        miliSeconds++
        if(miliSeconds <10){
            mili.innerText = `00${miliSeconds}`
        }
        else if(miliSeconds > 9 && miliSeconds < 100){
            mili.innerText = `0${miliSeconds}`
        }
        else if(miliSeconds >99 && miliSeconds <1000){
            mili.innerText = `${miliSeconds}`
        }
        else{
            miliSeconds=0
            seconds++
            if(seconds < 10){
                sec.innerText = `0${seconds}`
            }
            else if(seconds > 10 && seconds < 60){
                sec.innerText = `${seconds}`
            }
            else{
                seconds = 0
                min++
                if(min < 10){
                    minutes.innerText = `0${min}`
                }
                else if(min > 10 && min < 60){
                    minutes.innerText = `${minutes}`
                }
                else{
                    min = 0
                    hour++
                    if(hour < 10){
                        minutes.innerText = `0${hour}`
                    }
                    else if(hour > 10){
                        hours.innerText = `${hour}`
                    }

                }  
            }
        }
    }, 0)
    
}
function reset(){
    clearInterval(starttime)
    hours.innerText = "00"
    minutes.innerText = "00"
    sec.innerText = "00"
    mili.innerText = "000"
    display.innerHTML = ""
}
function pause(){
    clearInterval(starttime)
    miliSeconds = parseInt(mili.innerText)
    seconds = parseInt(sec.innerText)
    min = parseInt(minutes.innerText)
    hour = parseInt(hours.innerText)

}
function cast(){
    castCount++
    let p = document.createElement("p")
    p.innerText = `CAST ${castCount} : ${hours.innerText}:${minutes.innerText}:${sec.innerText}:${mili.innerText}`
    p.classList = "ptag"
    display.appendChild(p)
}