function countdn() {
    var now = new Date();
    var bigDay= new Date("August 1, 2020 17:00:00");
    var timeDiff = bigDay.getTime() - now.getTime();

    var sec = Math.floor(timeDiff / 1000);
    var min = Math.floor(sec / 60);
    var hr = Math.floor(min / 60);
    var days = Math.floor(hr / 24);
 
    hr %= 24;
    min %= 60;
    sec %= 60;

    var doubleSec = sec;
    var doubleMin = min;
    var doubleHr = hr;
    var doubleDay = days;

    if(sec < 10)
        doubleSec = "0" + sec;
    if(min < 10)
        doubleMin = "0" + min;
    if(hr < 10)
        doubleHr = "0" + hr;
    if(days < 10)
        doubleDay = "0" + hr;

    var time = document.getElementById("timer");
    time.innerHTML = doubleDay + " " + doubleHr + " " + doubleMin + " " + doubleSec;
     
    var timer = setTimeout(countdn, 1000);

}
