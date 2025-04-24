let img;
let diameter;

function preload() {  //放在setup以前，用於載入檔案
  img = loadImage('自我介紹.png'); // 替換成您的圖片路徑
}

function setup() {
  //設定全視窗的畫布
  createCanvas(windowWidth, windowHeight);
  
  // 設定圖片模式為中心
  imageMode(CENTER);
  
  // 調整圖片大小並顯示在視窗正中心
  let imgWidth = 1200; // 設定圖片的寬度
  let imgHeight = 600; // 設定圖片的高度
  image(img, width / 2, height / 2, imgWidth, imgHeight);
}
