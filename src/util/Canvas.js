const canvasElement = document.querySelector("canvas");
const ctx = canvasElement.getContext("2d");

const drawRect = (x, y, w, h, fillColor = "black", borderColor = "blue") => {
    ctx.beginPath();
    ctx.fillStyle = fillColor;
    ctx.fillRect(x, y, w, h);
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = borderColor;
    ctx.strokeRect(x, y, w, h);
};

export { drawRect };
