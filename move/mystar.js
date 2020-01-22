/*var body = document.getElementsByTagName('body')[0];
const width = document.documentElement.clientWidth;
const height = document.documentElement.clientHeight;
for (var i = 0; i <= 500; i++) {
	var star = document.createElement('div');
	star.style.width = '3px';
	star.style.height = '3px';
	star.style.backgroundColor = 'white';
	star.style.position = 'absolute';
	star.style.animation = 'starMove '+Math.round(Math.random()*10+20)+'s '+Math.round(Math.random()*100)+'s ease infinite';
	star.style.left = Math.round(Math.random()*width) + 'px';
	star.style.top = Math.round(Math.random()*10)+height-100 + 'px';
	star.style.zIndex = -1;
	body.appendChild(star);
}*/


function paint_star(){
	var canvas = document.getElementById('stars');
	var ctx = canvas.getContext('2d');
	var w = canvas.width = window.innerWidth;
	var h = canvas.height = window.innerHeight;
	var radius = h/8;
	var stars = [];
	var x = w/2, y = h/2;

	ctx.fillStyle = 'black';
	ctx.fillRect(0,0,w,h);

	document.addEventListener('mousemove', function(e){
	    //x = e.clientX;
	    //y = e.clientY;
	});

	function random(min,max){
		if (min <= max)
			return Math.round(Math.random()*(max-min+1)+min);
		else
			return Math.round(Math.random()*(min-max+1)+max);
	}

	var Star = function(){
		this.x = random(w/2 - radius, w/2 + radius);
		this.y = random(h/2 - radius, h/2 + radius);
		var r = random(0,255), g = random(0,255), b = random(0,255);
		this.style = 'rgb('+r+','+g+','+b+')';
		this.mother = Math.floor(Math.random()*stars.length);
		stars.push(this);
	};

	function atan(y,x){
		if(x > 0 && y > 0){
			return Math.atan(y/x);
		}else if( x < 0 && y > 0){
			return Math.PI - Math.atan(-y/x);
		}else if( x < 0 && y < 0){
			return Math.PI + Math.atan(y/x);
		}else if( x > 0 && y < 0){
			return 2*Math.PI - Math.atan(-y/x);
		}else if(x == 0 && y > 0){
			return 0.5*Math.PI;
		}else if(x == 0 && y < 0){
			return 1.5*Math.PI;
		}else if(y == 0 && x > 0){
			return 0;
		}else if(y == 0 && x < 0){
			return Math.PI;
		}else{
			return 0;
		}
	}

	Star.prototype.draw = function(){
		ctx.fillStyle = this.style;
		var x = stars[this.mother].x;
		var y = stars[this.mother].y;
		var delta_x = this.x - x, delta_y = this.y - y;
		var length = Math.sqrt(delta_x * delta_x + delta_y * delta_y);
		var tan_theta = delta_y/delta_x;
		var theta = atan(delta_y,delta_x);
		theta += Math.PI*Math.random()*0.1/180;
		this.x = x + length * Math.cos(theta)
		this.y = y + length * Math.sin(theta)
		ctx.beginPath()
		ctx.arc(this.x,this.y,1,0,Math.PI*2);
		ctx.fill();
		if(this.x < 0 || this.x > w || this.y < 0 || this.y > h){
			this.x = random(w/2 - radius, w/2 + radius);
			this.y = random(h/2 - radius, h/2 + radius);
		}
	}




	for(var i = 0; i < 1000; i++){
		new Star();
	}

	function paint(){
		ctx.fillStyle = 'rgba(0,0,0,0.2)';
		ctx.fillRect(0,0,w,h);
		for(var i = 0; i < stars.length; i++){
			stars[i].draw()
		}
		window.requestAnimationFrame(paint);
	}
	paint();
}

paint_star();
