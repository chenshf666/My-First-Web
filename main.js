var input_text = document.createElement("input");
var input_button = document.createElement("input");
var input_del = document.createElement("input");
var Body = document.getElementsByTagName("body")[0];

//the number of hano town
input_text.type = "number";
input_text.max = "20";
input_text.min = "1";
input_text.step = "1";
input_text.value = "10";
input_text.style ="margin-left:100px;margin-top:100px;";
Body.appendChild(input_text);
//commit button
input_button.type ="button";
input_button.value = "Execute";
input_button.addEventListener("click",Execute);
Body.appendChild(input_button);
//button delete
input_del.type ="button";
input_del.value = "Delete";
input_del.addEventListener("click",Delete);
Body.appendChild(input_del);

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
var left = new Array();
var middle = new Array();
var right = new Array();
for(var i = 0; i < 10; i++){
    var diski = document.createElement("div");
    Body.appendChild(diski);
    cloneObj(diski.style,disk.style);
    diski.style.width = (48 + 50*i)+"px";
    diski.style.left = (249 - (50*(i+1))/2)+"px";
    diski.style.top = (200 + i*20) + "px";
    Body.appendChild(diski);
    left.push(diski);
}
left.reverse();

//function Execute
function Execute(){
    if(left.length >= 1){
        middle.push(left.pop());
        middle[middle.length - 1].style.top = 
         (380 - 20 *(middle.length - 1)) + "px";
        middle[middle.length - 1].style.left =
          (749 - stringPXtoNum(middle[middle.length - 1].style.width)/2)+"px";
    }
}

//function Delete
function Delete(){
    if(middle.length >=1){
        left.push(middle.pop());
        var last = left.length - 1;
        var Style = left[last].style;
        Style.top = (380 - 20*last)+"px";
        Style.left = (249 - stringPXtoNum(Style.width)/2) + "px";
    }
}

function cloneObj(obj1,obj2) {
    for (var key in obj2) {
        var val = obj2[key];
        obj1[key] = typeof val === 'object' ? cloneObj(obj1[key],val): val;
    }
}
/*--------------------- 
作者：山外人家 
来源：CSDN 
原文：https://blog.csdn.net/liyujia6636/article/details/52198128 
版权声明：本文为博主原创文章，转载请附上博文链接！
由chenshf666修改为可以赋值的函数，而并非复制函数，用于同类型
*/

function stringPXtoNum(str){
    var num = 0;
    var tmp ="0";
    var base = tmp.charCodeAt(0);
    for(var i = 0; i < str.length - 2; i++){
        num = num*10 + str.charCodeAt(i)-base;
    }
    return num;
}