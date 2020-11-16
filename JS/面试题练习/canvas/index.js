const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

ctx.fillStyle = "black";
ctx.fillRect(10, 10, 200, 200);
ctx.clearRect(15, 15, 190, 130);

ctx.beginPath();
ctx.moveTo(75, 50);
ctx.lineTo(100, 75);
ctx.lineTo(100, 25);
ctx.fill();
document.getElementById("btn").onclick = () => {
  const mime = "image/jpg";
  const url = canvas.toDataURL(mime);
  const a = document.createElement("a");
  a.href = url;
  a.download = "顶顶顶";
  document.body.appendChild(a);
  a.click();
};
