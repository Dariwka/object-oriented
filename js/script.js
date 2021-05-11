class Background {
    constructor(el) {
        this.el = el;
    }

    init = function () {
        const bg = document.createElement('div');
        bg.setAttribute('style', 'z-index: -1');
        bg.style.top = '0';
        bg.style.left = '0';
        bg.style.backgroundImage = 'url(img/bg.png)';
        bg.style.backgroundRepeatY = 'no-repeat';
        bg.style.position = 'fixed';
        bg.style.width = '100%';
        bg.style.height = '100%';


        this.el.appendChild(bg);
    }
}


class Bird { // blueprint to create objects of the same class
    /**
     * 
     * @param {number} width decides the size of our bird
     * @param {DOMNode} el the place where we place the bird
     */
    constructor(width, el) {
        this.width = width;
        this.el = el;
    }

    fly = function () {
        console.log('flap flap');
        return 'I can fly';
    }

    showYourself = function () {
        const newBird = document.createElement('img');
        newBird.id = 'bird' + Math.random() * 10;
        newBird.src = 'img/bird.png';
        newBird.width = this.width;

        this.el.appendChild(newBird);
    }
}

const background = new Background(document.body);
background.init();

birds = [];
for (let i = 0; i < 50; i++) {
    birds[i] = new Bird(
        Math.random() * 500,
        document.body
    );
    birds[i].showYourself();
}



