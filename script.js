let playerState = 'idle'
const dropDown = document.getElementById('animations')
dropDown.addEventListener('change',function(e){
    playerState = e.target.value
})
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = 600
canvas.height = 600

const playerImage = new Image()
playerImage.src = './shadow_dog.png'
const spriteWidth = 575
const spriteheight = 523

let gameFrame = 0
const staggerFrames = 6
const spriteAnimations = []
const animationStates = [
    {
        name: 'idle',
        frames: 7,
    },  
    {
        name: 'jump',
        frames: 7,
    }, 
    {
        name: 'fall',
        frames: 7,
    }, 
    {
        name: 'run',
        frames: 9,
    }, 
    {
        name: 'dizzy',
        frames: 11,
    }, 
    {
        name: 'sit',
        frames: 5,
    }, 
    {
        name: 'roll',
        frames: 7,
    }, 
    {
        name: 'bite',
        frames: 7,
    }, 
    {
        name: 'ko',
        frames: 12,
    }, 
    {
        name: 'getHit',
        frames: 4,
    }, 
]
animationStates.forEach((state,index)=>{
    let frames = {
        loc: []
    }
    for(let j = 0;j< state.frames;j++){
        let positionX = j * spriteWidth
        let positionY = index * spriteheight
        frames.loc.push({x:positionX,y:positionY})
    }
    spriteAnimations[state.name] = frames
})
console.log(spriteAnimations)
function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length
    let frameX = position * spriteWidth
    let frameY = spriteAnimations[playerState].loc[position].y
    ctx.drawImage(playerImage,frameX,frameY ,spriteWidth,spriteheight,0,0,spriteWidth,spriteheight)
    
    gameFrame++
    requestAnimationFrame(animate)
}

animate()