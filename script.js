const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const canvasPlatform = {
  width: window.innerWidth,
  height: window.innerHeight,
  innerPlatformWidth: 500,
  innerPlatformHeight: 600,
};

const canvasProps = {
  x: canvasPlatform.width / 2 - canvasPlatform.innerPlatformWidth * 0.5,
  y: canvasPlatform.height / 2 - canvasPlatform.innerPlatformHeight * 0.5,
};
draw();
let shapes = [];
let points = [];
canvas.addEventListener("pointerdown", (event) => {
  const coordinates = {
    x: event.x,
    y: event.y,
  };
  points.push(coordinates);


  function moveCallback(event){
    const coordinates = {
        x: event.x,
        y: event.y,
      };
      points.push(coordinates);
      draw()
    for(const shape of [...shapes, points]){
        ctx.beginPath();
        ctx.moveTo(shape[0].x, shape[0].y)
        for(let i = 1; i< shape.length; i++){
            ctx.lineTo(shape[i].x, shape[i].y)
        }
        ctx.stroke()
    }
  }
  function upCallback(){
    canvas.removeEventListener('pointermove', moveCallback)
    canvas.removeEventListener('pointerup', upCallback)
    shapes.push(points)
    points = []
  }
  canvas.addEventListener("pointermove",moveCallback);
  canvas.addEventListener("pointerup", upCallback);
});

function draw() {
  ctx.clearRect(
    0,0,canvasPlatform.width, canvasPlatform.height
  );
  ctx.fillStyle = "#fff";
  ctx.fillRect(
    canvasProps.x,
    canvasProps.y,
    canvasPlatform.innerPlatformWidth,
    canvasPlatform.innerPlatformHeight
  );
}


