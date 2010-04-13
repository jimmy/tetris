tetris.physics = function() {
  var stage = tetris.stage;

  var down         = function() { active_piece.down();         };
  var left         = function() { active_piece.left();         };
  var right        = function() { active_piece.right();        };
  var drop         = function() { active_piece.drop();         };
  var rotate_right = function() { active_piece.rotate_right(); };
  var rotate_left  = function() { active_piece.rotate_left();  };

  var active_piece = null;
  var spawn = function() {
    active_piece = tetris.tetrominos.random();
    active_piece.right();
    active_piece.right();
    active_piece.right();
    active_piece.right();
    active_piece.right();
  };

  var get_active_piece = function() {
    return active_piece;
  }

  var can_move_down = function(piece) {
    var blocks = piece.down(false);

    for (var i = 0; i < blocks.length; i += 1) {
      if (stage.height <= blocks[i].y()) {
        return false;
      }
    }

    for (var i = 0; i < dead_blocks.length; i += 1) {
      var block = dead_blocks[i];
      for (var j = 0; j < blocks.length; j += 1) {
        if (block.x() === blocks[j].x() && block.y() === blocks[j].y()){
          return false;
        }
      }
    }

    return true;
  }

  var dead_blocks = [];
  var get_dead_blocks = function() {
    return dead_blocks;
  }

  var down_and_stuff = function() {
    if (can_move_down(active_piece)) {
      down();
    } else {
      dead_blocks = dead_blocks.concat(active_piece.blocks());
      spawn();
    }
  };


  return {
    down         : down         ,
    left         : left         ,
    right        : right        ,
    drop         : drop         ,
    rotate_right : rotate_right ,
    rotate_left  : rotate_left  ,
    spawn        : spawn        ,
    get_active_piece : get_active_piece ,
    stage        : stage        ,
    down_and_stuff : down_and_stuff,
    dead_blocks : get_dead_blocks
  };
}();
