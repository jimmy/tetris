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
    active_piece = tetris.pieces.random();
  };

  var get_active_piece = function() {
    return active_piece;
  }

  var can_move_down = function(piece) {
    var i;
    var j;
    var k;
    var bs;
    var boxes = piece.get_next_boxes();

    for (i = 0; i < boxes.length; i += 1) {
      if (stage.height <= boxes[i][1] + piece.y) {
        return false;
      }
    }

    var p;
    for (i = 0; i < pieces.length; i += 1) {
      p = pieces[i];
      bs = p.get_boxes();
      for (j = 0; j < bs.length; j += 1) {
        var b = bs[j];
        for (k = 0; k < bs.length; k += 1) {
          if (
            (b[0] + p.x) === (boxes[k][0] + piece.x)
            &&
            (b[1] + p.y) === (boxes[k][1] + piece.y)
          ) {
            return false;
          }
        }
      }
    }
    return true;
  }

  var down_and_stuff = function() {
    if (can_move_down(active_piece)) {
      down();
    } else {
      pieces.push(active_piece);
      spawn();
    }
  };

  var pieces = [];
  var get_pieces = function() {
    return pieces;
  }
  
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
    get_pieces : get_pieces
  };
}();
