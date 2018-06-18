var tree = [];
var middle = window.innerWidth / 2;
var a, b;

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
    tree[i].jitter(); 
  }
  
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

// 18 minutes into video