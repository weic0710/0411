let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight); // 全視窗畫布
  background(230, 230, 250); // 背景設為淡紫色 (Lavender)
  
  // 生成 40 個圓的初始位置、大小和顏色
  for (let i = 0; i < 40; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      size: random(30, 100),
      color: color(random(255), random(255), random(255)) // 鮮豔顏色
    });
  }
}

function draw() {
  background(230, 230, 250); // 每次重繪背景
  
  // 根據滑鼠位置調整圓的大小
  let sizeOffset = map(mouseX, 0, width, 10, 120);
  
  // 繪製圓
  for (let circle of circles) {
    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, circle.size + sizeOffset);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 畫布隨視窗大小調整
}
