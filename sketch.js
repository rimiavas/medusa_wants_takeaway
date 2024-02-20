


/*  The concept for this collage, titled "Medusa Wants Takeaway," originated from the idea of combining elements of Greek mythology with modern-day food culture. I imagined Medusa, the legendary monster from Greek mythology, experiencing a craving for takeaway food, which led to the creation of this artwork.

While working on this piece, I ordered takeaway food myself and was inspired by the various items that came with it, including the takeaway bag and coke can. I incorporated these items into the collage, along with a pair of sunglasses which I captured in a photograph and added onto the image of Medusa, to create a playful and contemporary effect.

To create a chaotic and dynamic feel, I experimented with different blend modes and layering techniques, combining multiple images of takeaway food on top of each other. The result is a visual cacophony of colors and textures that reflect the disorderly and sometimes overwhelming nature of modern-day fast food culture.In order to add an interactive element, I added a feature that allows the user to save the image on the canvas by pressing the space bar.

In terms of artistic inspiration, I drew upon the works of Takashi Murakami for his bold use of colors and incorporation of pop culture references, and Jeff Koons for his use of everyday objects in his artwork. By blending elements of classical mythology with contemporary food culture and popular culture references, I aimed to create a piece that is both playful and thought-provoking, inviting viewers to reflect on the intersection of ancient and modern cultural references in today's society. */

/* ----------------------------------------------------------------------------------------------------------------------------------------*/

// Declare variables for images
let medusa;/* https://www.pinterest.co.uk/pin/303711568622357932/ */
let glasses; //my image
let coke;// my image
let clipper;// my image
let takeaway;// my image
let takeawayTint;// my image

function preload() {
    // Load all images before the program starts
    console.log("Loading images...");
    medusa = loadImage("images/medusa.png");
    glasses = loadImage("images/glasses.png");
    coke = loadImage("images/coke.png");
    clipper = loadImage("images/clipper.png");
    takeaway = loadImage("images/takeaway.png");
    takeawayTint = loadImage("images/takeaway.png");
}

function setup() {
    // Set up the canvas and other settings
    createCanvas(850, 850);
    noStroke();
    imageMode(CENTER);

    // Invert the color of the takeaway image
    takeaway.filter(INVERT);
}

function draw() {
    // Draw the background and images
    drawBackground();

    // Display message to user
    textSize(20);
    fill(0);
    text("Press 'space bar' to save the image", 10, height - 30);

    drawImages();

    drawRandomImageSection();
}

function drawImages() {
    // Draw multiple coke cans with random size and tint
    for (let i = 0; i < 10; i++) {
        let x = random(width);
        let y = random(height);
        let scale = random(0.1, 0.5);
        tint(255, random(50, 200));
        image(coke, x, y, coke.width * scale, coke.height * scale);
    }

    // Draw the takeaway image with multiple blend modes and tints. so that they can overlay over each other and create an interesting end product 
    tint(0, 255, 255, 200);
    image(
        takeaway,
        width / 2,
        height / 2,
        takeaway.width * 2,
        takeaway.height * 2
    );
    blend(
        takeawayTint,
        0,
        0,
        takeawayTint.width,
        takeawayTint.height,
        50,
        250,
        takeawayTint.width,
        takeaway.height,
        BURN
    );
    blend(
        takeawayTint,
        0,
        0,
        takeawayTint.width,
        takeawayTint.height,
        525,
        250,
        takeawayTint.width,
        takeaway.height,
        MULTIPLY
    );

    // Draw the medusa and glasses images with different tints
    tint(255, 0, 0, 250);
    image(medusa, width / 2 - 20, height / 2);
    tint(0, 75, 255, 200);
    image(medusa, width / 2 + 20, height / 2);
    tint(0, 255, 0, 150);
    image(medusa, width / 2, height / 2);
    noTint();
    // Draw the glasses image without any tint
    tint(0, 255, 0, 150);
    image(glasses, width / 2, 352, 119.6, 32.5);
}

function drawBackground() {
    // Draw the background with a pixelated effect
    loadPixels();
    let d = pixelDensity();
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            var i = (x + y * width) * 4;
            pixels[i] = 50;
            pixels[i + 1] = x;
            pixels[i + 2] = y;
            pixels[i + 3] = random(75);
        }
    }
    updatePixels();
}

// This function glitches the image by randomly offsetting the colors of its pixels
function imageGlitch() {
    loadPixels();

    // Loop through the pixels and randomly offset their colors
    for (let i = 0; i < pixels.length; i++) {
        if (random() < 0.3) {
            // Offset the current pixel's color by a random amount
            pixels[i] = pixels[i + int(random(-10, 10)) * 4];
        }
    }

    updatePixels();
}

// This function repeatedly applies random blend modes to the canvas
function drawRandomImageSection() {
    for (let i = 0; i < 10000; i++) {
        // Select a random blend mode from the list of available modes
        let x = random([
            NORMAL,
            ADD,
            HARD_LIGHT,
            SCREEN,
            EXCLUSION,
            DIFFERENCE,
            LIGHTEST,
            BLEND,
        ]);
        // Apply the selected blend mode to the canvas
        blendMode(x);
    }
}

function keyPressed() {
    // Save a screenshot of the canvas when spacebar is pressed
    if (key === ' ') {
        saveCanvas('myCanvas', 'png');
    }
}
