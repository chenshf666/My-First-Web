var input_text = document.createElement("select");
var input_button = document.createElement("input");
var Body = document.getElementsByTagName("body")[0];

//the number of hano town
input_text.style ="margin-left:100px;margin-top:100px;";
for(var i = 1; i <= 10; i++){
    input_text.add(new Option(i.toString(),i.toString()));
}
Body.appendChild(input_text);

//commit button
input_button.type ="button";
input_button.value = "Execute";
input_button.addEventListener("click",Execute);
Body.appendChild(input_button);


//standard disk
var disk = document.createElement("div");
disk.style = "background-color:blue;\
                width:48px;\
                height: 20px;\
                background: linear-gradient(to right, black,white,black);\
                border:1px solid black;\
                margin:0px;\
                position:absolute";               
Body.appendChild(disk);

//3rock
for(var i = 0; i < 3; i++){
    var rock = document.createElement("div");
    rock.style.height="250px";
    rock.style.width ="2px";
    rock.style.backgroundColor="black";
    rock.style.position = "absolute";
    rock.style.top = "150px";
    rock.style.left = (i*500+249)+"px";
    Body.appendChild(rock);
}
var left = [];
var middle = [500];
var right = [1000];

var from = [];
var to = [];
var position = 0;
setInterval(draw,500);
//function Execute
function Execute(){
	if(position <= from.length - 1)
		return;
    Delete();
    var count = parseInt(input_text.value);
    for(var i = 0; i < count; i++){
        var diski = document.createElement("div");
        Body.appendChild(diski);
        cloneObj(diski.style,disk.style);
        diski.style.width = (48 + 50*i)+"px";
        diski.style.left = (249 - (50*(i+1))/2)+"px";
        diski.style.top = (200+(10-count)*20 + i*20) + "px";
        Body.appendChild(diski);
        left.push(diski);
    }
    left.push(0);
    left.reverse();
    hanoi(parseInt(input_text.value),left,middle,right);
}

//function Delete
function Delete(){
    var count = right.length - 1;
    for(var i = 0; i < count; i++)
        Body.removeChild(right.pop());
    if(left.length == 1)
        left.pop();
    position = 0;
    while(from.length >= 1){
    	from.pop();
    	to.pop();
    }
}

function cloneObj(obj1,obj2) {
    for (var key in obj2) {
        var val = obj2[key];
        obj1[key] = typeof val === 'object' ? cloneObj(obj1[key],val): val;
    }
}


function stringPXtoNum(str){
    var num = 0;
    var tmp ="0";
    var base = tmp.charCodeAt(0);
    for(var i = 0; i < str.length - 2; i++){
        num = num*10 + str.charCodeAt(i)-base;
    }
    return num;
}

function hanoi(n,left,middle,right){
    if( n > 1){
    hanoi(n-1,left,right,middle);
    hanoi(1,left,middle,right);
    hanoi(n-1,middle,left,right);
    }
    else{
        /*right.push(left.pop());
        var last = right.length - 1;
        var Style = right[last].style;
        Style.top = (380 - 20*(last-1))+"px";
        Style.left = (249+right[0] - stringPXtoNum(Style.width)/2) + "px";
        */
        from.push(left);
        to.push(right);
    }
}

//第一种，使用while循环
function sleep(delay) {
    console.log(50);
    var start = (new Date()).getTime();
    while((new Date()).getTime() - start < delay) {
        continue;
    }
}

function draw(){
	if(position < from.length){
		var left = from[position];
		var right = to[position];
		right.push(left.pop());
	    var last = right.length - 1;
	    var Style = right[last].style;
	    Style.top = (380 - 20*(last-1))+"px";
	    Style.left = (249+right[0] - stringPXtoNum(Style.width)/2) + "px";
	    position++;
	}
}

