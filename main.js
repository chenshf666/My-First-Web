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
//rock
var rock = document.createElement("div");
rock.style.height="250px";
rock.style.width ="2px";
rock.style.backgroundColor="black";
rock.style.position = "absolute";
rock.style.top = "150px";
rock.style.left = "249px";
Body.appendChild(rock);

for(var i = 0; i < 10; i++){
    var diski = document.createElement("div");
    Body.appendChild(diski);
    cloneObj(diski.style,disk.style);
    diski.style.width = (48 + 50*i)+"px";
    diski.style.left = (249 - (50*(i+1))/2)+"px";
    diski.style.top = (200 + i*20) + "px";
    Body.appendChild(diski);
}
//function Execute
function Execute(){
    var num = input_text.value;
    var length = document.getElementsByTagName("p").length;
    for(var i = 1; i <= num; i++){
        var para = document.createElement("p");
        para.innerHTML = "Hello"+(i+length);
        Body.appendChild(para);
    }
}

//function Delete
function Delete(){
    var obj = document.getElementsByTagName("p")[0];
  
    while(obj != null && obj != undefined){
        obj.parentNode.removeChild(obj); 
        var obj = document.getElementsByTagName("p")[0];
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