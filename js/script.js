class Background {
  constructor(el) {
    this.el = el;
  }

  scrollSideway = function (distance) {
    document.getElementById("background").style.backgroundPosition = `${
      distance / 10
    }px 0`;
  };

  init = function () {
    const bg = document.createElement("div");
    bg.id = "background";
    bg.setAttribute("style", "z-index: -1");
    bg.style.top = "0";
    bg.style.left = "0";
    bg.style.backgroundImage = "url(img/bg.png)";
    bg.style.backgroundRepeatY = "no-repeat";
    bg.style.position = "fixed";
    bg.style.width = "100%";
    bg.style.height = "100%";

    this.el.appendChild(bg);
  };
}

class Bird {
  // blueprint to create objects of the same class
  /**
   *
   * @param {number} width decides the size of our bird
   * @param {DOMNode} el the place where we place the bird
   */
  constructor(width, el) {
    this.width = width;
    this.el = el;
    this.movingSpeed = 600 + Math.random() * 600;
  }

  fly = function () {
    console.log("flap flap");
    return "I can fly";
  };

  showYourself = function () {
    const newBird = document.createElement("img");

    this.birdId = "bird" + Math.random() * 10;

    newBird.id = this.birdId;
    newBird.src = "img/bird.png";
    newBird.width = this.width;
    newBird.style.position = "fixed";
    newBird.style.top = Math.random() * 100 + "px";

    this.initialLeftPosition = Math.random() * 500;

    newBird.style.left = this.initialLeftPosition + "px";

    this.el.appendChild(newBird);
  };

  scrollSideway = function (distance) {
    this.initialLeftPosition += distance / this.movingSpeed;
    document.getElementById(
      this.birdId
    ).style.left = `${this.initialLeftPosition}px`;
  };
}

class Pipe {
  // blueprint to create objects of the same class
  /**
   *
   * @param {number} width decides the size of our bird
   * @param {DOMNode} el the place where we place the bird
   */
  constructor(width, el) {
    this.width = width;
    this.el = el;
    this.movingSpeed = 500 + Math.random() * 500;
  }

  move = function () {
    console.log("move move");
    return "I can move";
  };

  showYourselfPipe = function () {
    const newPipe = document.createElement("img");

    this.pipeId = "pipe" + Math.random() * 10;

    newPipe.id = this.pipeId;
    newPipe.src = "img/pipe.png";
    newPipe.width = this.width;
    newPipe.style.position = "fixed";
    newPipe.style.right = Math.random() * 400 + "200px";
    newPipe.style.top = "300px";

    this.initialLeftPosition = Math.random() * 400;

    newPipe.style.left = this.initialLeftPosition + "px";

    this.el.appendChild(newPipe);
  };

  scrollSidewayPipe = function (distance) {
    this.initialLeftPosition += distance / this.movingSpeed;
    document.getElementById(
      this.pipeId
    ).style.left = `${this.initialLeftPosition}200px`;
  };
}

const background = new Background(document.body);
background.init();

birds = [];
for (let i = 0; i < 10; i++) {
  birds[i] = new Bird(Math.random() * 200, document.body);
  birds[i].showYourself();
}

pipes = [];
for (let i = 0; i < 10; i++) {
  pipes[i] = new Pipe(Math.random() * 50, document.body);
  pipes[i].showYourselfPipe();
}

document.addEventListener("scroll", (e) => {
  background.scrollSideway(window.pageYOffset);
  for (let i = 0; i < 10; i++) {
    birds[i].scrollSideway(window.pageYOffset);
  }

  for (let i = 0; i < 10; i++) {
    pipes[i].scrollSidewayPipe(window.pageYOffset);
  }
});
