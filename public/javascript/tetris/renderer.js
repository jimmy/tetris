tetris.renderer = function(drawingCanvas) {
  var t = function(x) {
    return x * 14;
  };

  var context = null;
  if (drawingCanvas.getContext) {
    context = drawingCanvas.getContext('2d');
  }

  var x_offset = 10;
  var y_offset = 10;

  var render_stage = function(stage) {
    context.fillStyle   = '#ccc';
    context.strokeStyle = '#000';
    context.lineWidth   = 4;

    context.fillRect(x_offset, y_offset, t(stage.width), t(stage.height));
    context.strokeRect(x_offset, y_offset, t(stage.width), t(stage.height));
  }

  var render_square = function(square) {
    context.fillStyle   = '#ff0';

    context.fillRect(
      x_offset + t(square.x),
      y_offset + t(square.y),
      t(square.width),
      t(square.height)
    );
  };

  var render_tee = function(tee) {
    var boxes = tee.get_boxes();
    var x;
    var y;

    context.fillStyle   = '#0ff';
    
    for (var i = 0; i < boxes.length; i += 1) {
      x = boxes[i][0];
      y = boxes[i][1];
      context.fillRect(
        x_offset + t(tee.x + x),
        y_offset + t(tee.y + y),
        t(1),
        t(1)
      );
    }
  };

  return {
    render_stage: render_stage,
    render_square: render_square,
    render_tee: render_tee
  };
};
