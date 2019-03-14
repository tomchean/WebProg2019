let cvsWrapper = null;
let bg;
let bird;
let status;
let sound;
let ob_img;
let obstacle;
let time;
// assets from: https://github.com/sourabhv/FlapPyBird/tree/master/assets

function preload() {
    ob_img = ["red", "green"].map(color => ["lower", "upper"].map(flap => loadImage(`assets/sprites/pipe-${color}-${flap}.png`)));
}

function setup() {
    // Game basic setup.
    // Mounting canvas onto div for convenient styling.
    cvsWrapper = document.getElementById("canvasWrapper");
    const myCanvas = createCanvas(
        cvsWrapper.offsetWidth,
        cvsWrapper.offsetHeight
    );
    myCanvas.parent("canvasWrapper");
    bg = new Background();
    sound = new assets();
    status =0;
    time =0;
    obstacle = [];
    // setup code below
}

function draw() {
    if(status==0){
        bg.menu();
    }
    else if (status == 1){
        update();
    }
    else{
        bg.display_over();
    }
}

function keyPressed() {
    if(keyCode === 32){
        if(status==0){
            status =1;
            bird = new Bird();
            bird.y = height/2;
        }
        else if (status==1){
            bird.vy = -5;
            bird.angle = -PI/4;
            sound.wing.play();
        }
        else{
            status =1;
            bird = new Bird();
            bird.y = height/2;
        }
       
    }
}
 

function update(){
    bg.display();
    time++;
    if(time % 90 == 0){
        obstacle.push(new Obstacle());
        if(time %200 ==0){
            bg.mode = (bg.mode+1)%2;
        }
    }
    obstacle.forEach(element => {
        if( element.x > (width/4-element.up.width) &&  element.x < (width/4+element.up.width)){
            if(bird.y > height-element.up.height*element.scale*element.ran/2){
                status =2;
                sound.hit.play();
            }
            if(bird.y < element.up.height*element.scale*(0.8 - element.ran/2)){
                status =2;
                sound.hit.play();
            }
        }
        element.display();
    });
    if(obstacle.length){
        if(obstacle[0].x<-100) obstacle.shift();
    }
    bg.display_score();
    bird.display();
    
 
    if(bird.y >= height || bird.y <=0) {
        sound.die.play();
        bg.display_over();
        status =2;      
    }
    if(status ==2) obstacle =[];
}




class Bird{
    constructor(){
        this.y =0;
        this.vy =0;
        this.angle =0;
        this.mode =0;
        this.color =0;
        this.img = ["blue", "red", "yellow"].map(color => ["upflap", "midflap", "downflap"].map(flap => loadImage(`assets/sprites/${color}bird-${flap}.png`)));
    }
    display(){
        this.vy +=0.2;
        this.y += this.vy;
        this.angle += 0.01;
        translate(width/4,this.y);
        rotate(this.angle);
        image(this.img[int(this.color)][int(this.mode)],0,0);
        this.mode+=1;
        this.color+=0.01;
        if (this.mode > 2 ) this.mode =0;
        if (this.color >= 3 ) this.color =0;
    }
}


class Background{
    constructor(){
        this.img = ["day","night"].map( time => loadImage(`assets/sprites/background-${time}.png`));
        this.score = ["0","1","2","3","4","5","6","7","8","9"].map( score => loadImage(`assets/sprites/${score}.png`));
        this.message = loadImage('assets/sprites/message.png');
        this.gameover = loadImage('assets/sprites/gameover.png');
        this.scale =1;
        this.x =0;
        this.count =0;
        this.mode = 0;
        
    }
    menu(){
        this.count =0;
        background(0);
        this.scale = width/this.img[0].width;
        scale = width/this.message.width;
        image(this.img[0],0,0,this.img[0].width*this.scale,this.img[0].height*this.scale);
        image(this.message,0,0,this.message.width*scale,this.message.height*scale);
    }
    display(){
        this.x -=3.5;
        if (this.x < -this.img[0].width*this.scale){
            this.x = 0;
        }
        image(this.img[this.mode],this.x,0,this.img[this.mode].width*this.scale,this.img[this.mode].height*this.scale);
        image(this.img[this.mode],this.x+this.img[this.mode].width*this.scale,0,this.img[this.mode].width*this.scale,this.img[this.mode].height*this.scale);
    }
    display_score(){
        translate(0,0);
        for(let i=0, j = this.count.toString(); i<j.length;i++){
            image(this.score[j[i]],(width/2)-(this.score[0].width*(j.length/2))+(this.score[0].width*i),height/4);
        }
        this.count +=1;
    }
    display_over(){
        this.count =0;
        background(0);        
        scale = width/this.gameover.width;
        image(this.img[0],0,0,this.img[0].width*this.scale,this.img[0].height*this.scale);
        image(this.gameover,width*0.2,height*0.4,this.gameover.width*scale*0.6,this.gameover.height*scale*0.6);
    }

}

class assets{
    constructor(){
        this.wing = loadSound('assets/audio/wing.wav');
        this.die = loadSound('assets/audio/die.wav');
        this.hit = loadSound('assets/audio/hit.wav');
    }
}


class Obstacle{
    constructor(){
        this.ran= Math.random();
        this.up = ob_img[Math.round(this.ran)][1];
        this.down = ob_img[Math.round(this.ran)][0];
        this.x = width;
        this.scale = height/this.down.height;
    }
    display(){
        this.x -=3.5;
        //scale = height/this.down.height;
        image(this.up,this.x,0,this.up.width,this.up.height*this.scale*(0.8-this.ran/2));
        image(this.down,this.x,height-this.up.height*this.scale*this.ran/2,this.up.width,this.up.height*this.scale*this.ran/2);
    }
}