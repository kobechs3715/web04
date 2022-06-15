window.onload = function(){
    var time = 603;
    var counter;
    var min = document.getElementById("min");
    var sec = document.getElementById("sec");
    var start = document.getElementById("start");
    var stop = document.getElementById("stop");
    var reset = document.getElementById("reset");
    var now = null
    var max = 710;
    var input_area = document.getElementById("text_")

    start,onclick = function(){
        toggle();
        counter = setInterval(count,1000);
    }

    stop.onclick = function(){
        toggle();
        clearInterval(counter);
    }

    reset.onclick = function(){
        time = 603;
        sec.innerHTML = time % 60;
        min.innerHTML = Math.floor(time / 60);
    }

    function toggle(){
        if(start.disabled){
            start.disabled = false;
            stop.disabled = true;
        }else{
            start.disabled = true;
            stop.disabled = false;
        }
    }
    function count(){
        if(time ===0){
            sec.innerHTML = 0;
            min.innerHTML = 0;
            toggle();
            alert("3分経過しました。");
            clearInterval(counter);
        }else{
            time -= 1;
            sec.innerHTML = time % 60;
            min.innerHTML = Math.floor(time / 60);
        }
    }


    
    var now = null,max = 100;
    var input_area = document.getElementById("text_area");
    var output_area = document.getElementById("text_length");

    input_area.onkeyup = function(){
        now = (max - input_area.value.langth);
        output_area.innerText = now;
        output_area.className = (now < 0) ? "out" : "";
    }

 }