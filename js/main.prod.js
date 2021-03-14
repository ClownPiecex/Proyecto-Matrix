'use strict';

var lienzo = document.querySelector('#canvas');
var ctx = lienzo.getContext('2d');
var w = (canvas.width = document.body.clientWidth);
var h = (canvas.height = document.body.clientHeight);
ctx.fillStyle = '#000';
ctx.fillRect(0, 0, w, h);
var cols = Math.floor(w / 20) + 1;
var ypos = Array(cols).fill(0);

function matrix() {
  ctx.fillStyle = 'rgba(0,15,2,0.15)';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#4caf50';
  ctx.font = '15pt monospace';
  ypos.map(function (y, index) {
    var text = String.fromCharCode(Math.random() * 129);
    var x = index * 20;
    ctx.fillText(text, x, y);
    y > 100 + Math.random() * 15000
      ? (ypos[index] = 0)
      : (ypos[index] = y + 20);
  });
}

setInterval(matrix, 100);
