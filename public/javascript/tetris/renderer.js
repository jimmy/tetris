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

  var render_piece = function(piece) {
    var boxes = piece.get_boxes();
    var x;
    var y;

    context.fillStyle   = '#ff0';
    
    for (var i = 0; i < boxes.length; i += 1) {
      x = boxes[i][0];
      y = boxes[i][1];
      context.fillRect(
        x_offset + t(piece.x + x),
        y_offset + t(piece.y + y),
        t(1),
        t(1)
      );
    }
  };

  return {
    render_stage: render_stage,
    render_piece: render_piece
  };
};
