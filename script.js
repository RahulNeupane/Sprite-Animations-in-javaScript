const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')

canvas.width = 600
canvas.height = 600

const playerImage = new Image()
playerImage.src = './shadow_dog.png'
const spriteWidth = 575
const spriteheight = 523
let frameX = 0
let frameY = 0


function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    // ctx.fillRect(100,50,100,100)
    ctx.drawImage(playerImage,frameX * spriteWidth,frameY * spriteheight,spriteWidth,spriteheight,0,0,spriteWidth,spriteheight)
    // ctx.drawImage(image,sx,sy,sw,sh,dx,dy,dw,dh)
    // these 9 elements represent
    // first 4 for source Image 
    // and last 4 for our canvas i.e. destination 
    requestAnimationFrame(animate)
}

animate()