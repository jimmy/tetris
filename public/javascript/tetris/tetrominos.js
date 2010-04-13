tetris.tetrominos = function() {
  var piece = function(boxes) {

    var object = null;

    var origin = [5, 0];
    var blocks = boxes.map(function(box){return tetris.block(box[0], box[1]);});

    var rotate_right = function(modify) {
      var results = [];
      for (var i = 0; i < blocks.length; i += 1) {
        results.push(blocks[i].rotate_right(origin, modify));
      }
      return results;
    };

    var rotate_left = function(modify) {
      var results = [];
      for (var i = 0; i < blocks.length; i += 1) {
        results.push(blocks[i].rotate_left(origin, modify));
      }
      return results;
    };

    var down = function(modify) {
      var results = [];
      for (var i = 0; i < blocks.length; i += 1) {
        results.push(blocks[i].down(modify));
      }
      return results;
    };

    var right = function(modify) {
      var results = [];
      for (var i = 0; i < blocks.length; i += 1) {
        results.push(blocks[i].right(modify));
      }
      return results;
    };

    var left = function(modify) {
      var results = [];
      for (var i = 0; i < blocks.length; i += 1) {
        results.push(blocks[i].left(modify));
      }
      return results;
    };

    var get_blocks = function() {
      return blocks;
    }

    object = {
      origin: origin,
      blocks: get_blocks,
      rotate_right: rotate_right,
      rotate_left: rotate_left,
      down: down,
      left: left,
      right: right
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
