let clipper;
let glasses;
let coke;
let takeaway;

let medusa;
/*https://stock.adobe.com/uk/search/images?k=medusa+statue&asset_id=238011989*/

function preload() {

    medusa = loadImage('images/medusa.png');
    clipper = loadImage('images/clipper.png');
    glasses = loadImage('images/glasses.png');
    coke = loadImage('images/coke.png');
    takeaway = loadImage('images/takeaway.png')
}

function setup() {
    createCanvas(850, 850);

    /*medusa.mask(cat);*/

    /*    medusa.filter(INVERT);
        medusa.filter(THRESHOLD, 0.9);
        medusa.filter(ERODE)
        medusa.filter(INVERT)*/

    imageMode(CENTER);

    image(coke, 250, 250)



    /*medusa.loadPixels();*/

}

function draw() {
    /*    background(51);*/
    /*let pink = color(255, 102, 204);*/

    loadPixels();

    // Loop through the pixels and randomly offset their colors
    for (let i = 0; i < pixels.length; i++) {
        if (random() < 0.1) {
            pixels[i] = pixels[i + int(random(-10, 10)) * 4];
        }
    }

    updatePixels();

    tint(255, 0, 0, 130);
    image(medusa, width / 2 - 20, height / 2);
    tint(0, 75, 255, 120);
    image(medusa, width / 2 + 20, height / 2);
    tint(0, 255, 0, 100);
    image(medusa, width / 2, height / 2);
    
/*
    loadPixels();
    let d = pixelDensity();
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            var i = (x + y * width) * 4;
            pixels[i] = y;
            pixels[i + 1] = x;
            pixels[i + 2] = 50;
            pixels[i + 3] = random(100);
        }
    }
    updatePixels();
*/

}
