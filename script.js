const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight; 

const canvasPlatform = {
    width: window.innerWidth,
    height: window.innerHeight,
    innerPlatformWidth: 500,
    innerPlatformHeight: 600,
}

const canvasProps = {
    x: (canvasPlatform.width / 2) - canvasPlatform.innerPlatformWidth * 0.5,
    y: (canvasPlatform.height / 2 )- canvasPlatform.innerPlatformHeight * 0.5,
}


ctx.fillStyle = '#fff'
ctx.fillRect(canvasProps.x, canvasProps.y, canvasPlatform.innerPlatformWidth, canvasPlatform.innerPlatformHeight)

let shapes = []
let points = []
canvas.addEventListener('pointerdown', (event) => {
    ctx.clearRect(canvasProps.x, canvasProps.y,canvasPlatform.innerPlatformWidth, canvasPlatform.innerPlatformHeight)
    const coordinates = {
        x: event.x,
        y: event.y
    }
    points.push(coordinates)
    canvas.addEventListener('pointermove', (event) => {
        const coordinates = {
            x: event.x,
            y: event.y
        }
        points.push(coordinates)
    })
})


canvas.addEventListener('pointerup', (event) => {
    ctx.beginPath();
    points.map(el => ctx.lineTo(el.x,el.y))
    ctx.stroke()
})