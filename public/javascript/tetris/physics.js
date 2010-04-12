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

  var down_and_stuff = function() {
    down();
    if (active_piece.y > stage.height) {
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
    down_and_stuff : down_and_stuff
  };
}();
