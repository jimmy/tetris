tetris.pieces = function() {
  var piece = function(boxes) {
    var x = 5;
    var y = 0;

    var object = null;

    var rotate_right = function() {
      boxes = tetris.rotator.right(boxes);
    };

    var rotate_left = function() {
      boxes = tetris.rotator.left(boxes);
    };

    var down = function() {
      object.y += 1;
    };

    var get_boxes = function(){
      return boxes;
    }
    
    object = {
      x: x,
      y: y,
      get_boxes: get_boxes,
      down: down,
      rotate_right: rotate_right,
      rotate_left: rotate_left
    }

    return object;
  };

  var o = function() {
    var object = piece([ [0, 0], [0, 1], [1, 0], [1, 1] ]);
    object.rotate_right = function(){};
    object.rotate_left = function(){};
    return object;
  }

  var i = function(x, y) {
    return piece([ [-1, 0], [0, 0], [1, 0], [2, 0] ]);
  };

  var t = function(x, y) {
    return piece([ [-1, 0], [0, 0], [1, 0], [0, 1] ]);
  };

  var j = function(x, y) {
    return piece([ [0, -1], [0, 0], [0, 1], [-1, 1] ]);
  };

  var l = function(x, y) {
    return piece([ [0, -1], [0, 0], [0, 1], [1, 1] ]);
  };

  var s = function(x, y) {
    return piece([ [0, 0], [1, 0], [-1, 1], [0, 1] ]);
  };

  var z = function(x, y) {
    return piece([ [-1, 0], [0, 0], [0, 1], [1, 1] ]);
  };

  return {
    o: o,
    i: i,
    t: t,
    j: j,
    l: l,
    s: s,
    z: z
  };
}();
