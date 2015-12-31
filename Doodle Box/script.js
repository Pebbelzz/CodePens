//global variables  
var canvas, ctx, painting = false,
    previousMousePos;

  function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    }
  };

  function drawLineImmed(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = 'black';
    ctx.stroke();
    console.log(ctx.strokeStyle);
  };

  function mouseMove(evt) {
    var mousePos = getMousePos(canvas, evt);
    if (painting) {
      drawLineImmed(previousMousePos.x, previousMousePos.y, mousePos.x, mousePos.y);
      previousMousePos = mousePos;
    };
  };

  function clicked(evt) {
    previousMousePos = getMousePos(canvas, evt);
    painting = true;
  };

  function release(evt) {
    painting = false;
  };

  function leave(evt) {
    painting = false;
  };

  $(document).ready(function() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    painting = false;
    canvas.addEventListener('mousemove', mouseMove, false);
    canvas.addEventListener('mousedown', clicked);
    canvas.addEventListener('mouseup', release);
    canvas.addEventListener('mouseleave', leave);
  });

  //Clears canvas when Erase button is clicked
  $(document).ready(function() {
    $('#clear').click(function clear() {
      console.log("erase was pressed");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
  });