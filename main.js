canvas = document.getElementById('my_canvas');
ctx = canvas.getContext("2d");

blue_width = 100;
blue_height = 90;
blue_x = 10;
blue_y = 100;
cart_width = 100;
cart_height = 100;
cart_x = 10;
cart_y = 10;
background_image = "racing.gif";
blue_image = "blue.png";
cart_image = "cart.png";

function add() {
    background_img_tag = new Image();
    background_img_tag.onload = uploadBackground;
    background_img_tag.src = background_image;

    blue_pic = new Image();
    blue_pic.onload = uploadblue;
    blue_pic.src = blue_image;

    cart_pic = new Image();
    cart_pic.onload = uploadcart;
    cart_pic.src = cart_image;
}

function uploadcart(){
    ctx.drawImage(cart_pic, cart_x, cart_y, cart_width, cart_height);
}

function uploadBackground(){
    ctx.drawImage(background_img_tag, 0, 0, canvas.width, canvas.height);
}

function uploadblue(){
    ctx.drawImage(blue_pic, blue_x, blue_y, blue_width, blue_height);
}

window.addEventListener("keydown", key_down);

function key_down(e) {
    key_press = e.keyCode;
    if(key_press == '38'){
        up ();
        console.log("up");
    }
    if(key_press == '40'){
        down ();
        console.log("down");
    }
    if(key_press == '37'){
        left ();
        console.log("left");
    }
    if(key_press == '39'){
        right ();
        console.log("right");
    }
    if(key_press == '87'){
        up_1 ();
        console.log("up");
    }
    if(key_press == '83'){
        down_1 ();
        console.log("down");
    }
    if(key_press == '65'){
        left_1 ();
        console.log("left");
    }
    if(key_press == '68'){
        right_1 ();
        console.log("right");
    }
}

function up(){
    if(blue_y >= 0){
        blue_y = blue_y - 10;
        console.log("When up arrow is pressed," + blue_y);
        uploadBackground();
        uploadblue();
        uploadcart();
    }
}

function down(){
    if(blue_y <= 500){
        blue_y = blue_y + 10;
        console.log("When up arrow is pressed," + blue_y);
        uploadBackground();
        uploadblue();
        uploadcart();
    }
}

function right(){
    if(blue_x <= 700){
        blue_x = blue_x + 10;
        console.log("When up arrow is pressed," + blue_x);
        uploadBackground();
        uploadblue();
        uploadcart();
    }
}

function left(){
    if(blue_x >= 0){
        blue_x = blue_x - 10;
        console.log("When up arrow is pressed," + blue_x);
        uploadBackground();
        uploadblue();
        uploadcart();
    }
}







function up_1(){
    if(cart_y >= 0){
        cart_y = cart_y - 10;
        console.log("When up arrow is pressed," + cart_y);
        uploadBackground();
        uploadblue();
        uploadcart();
    }
}

function down_1(){
    if(cart_y <= 500){
        cart_y = cart_y + 10;
        console.log("When up arrow is pressed," + cart_y);
        uploadBackground();
        uploadblue();
        uploadcart();
    }
}

function right_1(){
    if(cart_x <= 700){
        cart_x = cart_x + 10;
        console.log("When up arrow is pressed," + cart_x);
        uploadBackground();
        uploadblue();
        uploadcart();
    }
}

function left_1(){
    if(cart_x >= 0){
        cart_x = cart_x - 10;
        console.log("When up arrow is pressed," + cart_x);
        uploadBackground();
        uploadblue();
        uploadcart();
    }
}