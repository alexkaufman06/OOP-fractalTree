var tree = [];
var middle = window.innerWidth / 2;
var apples = [];
var a, b;
var count = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  a = createVector(middle, window.innerHeight);
  b = createVector(middle, window.innerHeight / 1.5);
  var root = new Branch(a,b);
  tree[0] = root;
}

function mousePressed() {
  for (var i = tree.length - 1; i >= 0; i--) {
    if (!tree[i].finished) {
      tree.push(tree[i].branchA());
      tree.push(tree[i].branchB());
    }
    tree[i].finished = true;
  }
  count++;
  if (count % 5 === 0) {
    for (var i = 0; i < tree.length; i++) {
      if (!tree[i].finished) {
        var apple = tree[i].end.copy();
        apples.push(apple);
      }
    }
  }
}

function draw() {
  middle = window.innerWidth / 2;
  // CODE BELOW WILL MAKE ROOT RESPONSIVE
  // tree[0].begin.x = middle;
  // tree[0].begin.y = height;
  // tree[0].end.x = middle;
  // tree[0].end.y = window.innerHeight / 1.5;
  background(51);

  for (var i = 0; i < tree.length; i++) {
    tree[i].show();
    // tree[i].jitter();
  }

  for (var i = 0; i < apples.length; i++) {
    fill(255,0,100);
    noStroke();
    ellipse(apples[i].x, apples[i].y, 8, 8);
  }

  if (count >= 7) {
    for (var i = 0; i < apples.length; i++) {
      apples[i].y += random(0, 4);
      apples[i].x += random(-1,1);
    }
  }
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}