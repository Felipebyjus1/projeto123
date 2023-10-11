function setup(){
    canvas = createCanvas(600, 600)
    canvas.center()
    background("black")
    video = createCapture(VIDEO)
    video.size(600, 600)
}