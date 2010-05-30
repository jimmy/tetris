tetris.renderer = function(drawingCanvas) {
  var t = function(x) {
    return x * 20;
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
    context.lineWidth   = 2;

    context.fillRect(x_offset, y_offset, t(stage.width), t(stage.height));
    context.strokeRect(x_offset, y_offset, t(stage.width), t(stage.height));

    context.fillStyle   = '#f00';
    context.strokeStyle = "#000";
    context.lineWidth   = 2;
    var blocks = stage.dead_blocks();
    for (var i = 0; i < blocks.length; i += 1) {
      context.fillRect(x_offset + t(blocks[i].x()), y_offset + t(blocks[i].y()), t(1), t(1));
      context.strokeRect(x_offset + t(blocks[i].x()), y_offset + t(blocks[i].y()), t(1), t(1));
    }
  }

  var render_tetromino = function(tetromino) {
    render_blocks(tetromino.blocks());
  };

  var render_blocks = function(blocks) {
    context.fillStyle   = '#ff0';
    context.strokeStyle = "#000";
    context.lineWidth   = 2;

    for (var i = 0; i < blocks.length; i += 1) {
      context.fillRect(
        x_offset + t(blocks[i].x()),
        y_offset + t(blocks[i].y()),
        t(1),
        t(1)
      );
      context.strokeRect(
        x_offset + t(blocks[i].x()),
        y_offset + t(blocks[i].y()),
        t(1),
        t(1)
      );

    }
  };

  return {
    render_stage: render_stage,
    render_blocks: render_blocks,
    render_tetromino: render_tetromino
  };
};
