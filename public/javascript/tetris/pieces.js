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

    var right = function() {
      object.x += 1;
    };

    var left = function() {
      object.x -= 1;
    };

    var get_boxes = function() {
      return boxes;
    }

    var get_next_boxes = function() {
      var results = []
      for (var i = 0; i < boxes.length; i += 1) {
        results.push( [ boxes[i][0], boxes[i][1]+1 ]);
      }
      return results;
    };

    object = {
      x: x,
      y: y,
      get_boxes: get_boxes,
      get_next_boxes: get_next_boxes,
      down: down,
      left: left,
      right: right,
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

  var i = function() {
    return piece([ [-1, 0], [0, 0], [1, 0], [2, 0] ]);
  };

  var t = function() {
    return piece([ [-1, 0], [0, 0], [1, 0], [0, 1] ]);
  };

  var j = function() {
    return piece([ [0, -1], [0, 0], [0, 1], [-1, 1] ]);
  };

  var l = function() {
    return piece([ [0, -1], [0, 0], [0, 1], [1, 1] ]);
  };

  var s = function() {
    return piece([ [0, 0], [1, 0], [-1, 1], [0, 1] ]);
  };

  var z = function() {
    return piece([ [-1, 0], [0, 0], [0, 1], [1, 1] ]);
  };

  var random = function() {
    var pieces = [o, i, t, j, l, s, z];
    var i = Math.floor(Math.random() * (pieces.length-1));
    return t();
    //return pieces[i]();
  };

  return {
    o: o,
    i: i,
    t: t,
    j: j,
    l: l,
    s: s,
    z: z,
    random: random
  };
}();
