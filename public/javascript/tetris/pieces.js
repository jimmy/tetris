tetris.pieces = function() {
  var piece = function(x, y) {
    var object = null;

    var width = 2;
    var height = 2;

    var boxes = [];

    var rotate_right = function() {
      boxes = tetris.rotator.right(boxes);
    };

    var rotate_left = function() {
      boxes = tetris.rotator.left(boxes);
    };

    var move = function() {
      object.y += 1;
    };

    var get_boxes = function(){
      return boxes;
    }
    
    object = {
      x: x,
      y: y,
      width: width,
      height: height,
      get_boxes: get_boxes,
      move: move,
      rotate_right: rotate_right,
      rotate_left: rotate_left
    }

    return object;
  };
  var square = function(x, y) {
    var object = null;

    var width = 2;
    var height = 2;

    var boxes = [ [0, 0], [0, 1], [1, 0], [1, 1] ];

    var move = function() {
      object.y += 1;
    };
    
    var rotate_right = function() {
    };

    var rotate_left = function() {
    };

    var get_boxes = function() {
      return boxes;
    };

    object = {
      x: x,
      y: y,
      width: width,
      height: height,
      get_boxes: get_boxes,
      move: move,
      rotate_right: rotate_right,
      rotate_left: rotate_left
    }

    return object;
  };

  var tee = function(x, y) {
    var object = null;

    var width = 2;
    var height = 2;

    var boxes = [
      [0, -1],
      [0,  0],
      [0,  1],
      [1,  0],
    ];

    var rotate_right = function() {
      boxes = tetris.rotator.right(boxes);
    };

    var rotate_left = function() {
      boxes = tetris.rotator.left(boxes);
    };

    var move = function() {
      object.y += 1;
    };

    var get_boxes = function(){
      return boxes;
    }
    
    object = {
      x: x,
      y: y,
      width: width,
      height: height,
      get_boxes: get_boxes,
      move: move,
      rotate_right: rotate_right,
      rotate_left: rotate_left
    }

    return object;
  };

  return {
    square: square,
    tee: tee
  };
}();
