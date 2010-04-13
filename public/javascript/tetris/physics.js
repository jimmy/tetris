tetris.physics = function() {
  var stage = tetris.stage;

  var move_if_legit = function(move, foo) {
    return function() {
      if (legit_world(move(false))) {
        move(true);
      } else {
        if (foo) {
          stage.add_dead_blocks(active_piece.blocks());
          spawn();
        }
      }
    };
  };


  var down         = move_if_legit(function(modify) { return active_piece.down(modify);         }, true);
  var left         = move_if_legit(function(modify) { return active_piece.left(modify);         });
  var right        = move_if_legit(function(modify) { return active_piece.right(modify);        });
  var drop         = move_if_legit(function(modify) { return active_piece.drop(modify);         });
  var rotate_right = move_if_legit(function(modify) { return active_piece.rotate_right(modify); });
  var rotate_left  = move_if_legit(function(modify) { return active_piece.rotate_left(modify);  });

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
  };

  var legit_world = function(blocks) {
    for (var i = 0; i < blocks.length; i += 1) {
      if (
        stage.height <= blocks[i].y() ||
        blocks[i].x() < 0  ||
        stage.width <= blocks[i].x()
      ) {
        return false;
      }
    }

    var dead_blocks = stage.dead_blocks();
    for (var i = 0; i < dead_blocks.length; i += 1) {
      var block = dead_blocks[i];
      for (var j = 0; j < blocks.length; j += 1) {
        if (block.x() === blocks[j].x() && block.y() === blocks[j].y()){
          return false;
        }
      }
    }

    return true;
  };

  var down_and_freeze = function() {
    if (!down()) {
      stage.add_dead_blocks(active_piece.blocks());
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
    stage        : stage
  };
}();
