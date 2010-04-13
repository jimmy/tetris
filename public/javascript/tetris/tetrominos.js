tetris.tetrominos = function() {
  var piece = function(boxes) {

    var object = null;

    var blocks = boxes.map(function(box){return tetris.block(box[0], box[1]);});

    var pivot = function() {
      return blocks[0].xy();
    }

    var rotate_right = function(modify) {
      var results = [];
      for (var i = 0; i < blocks.length; i += 1) {
        results.push(blocks[i].rotate_right(pivot(), modify));
      }
      return modify ?
        blocks :
        results.map(function(xy){return tetris.block(xy[0], xy[1]);});
    };

    var rotate_left = function(modify) {
      var results = [];
      for (var i = 0; i < blocks.length; i += 1) {
        results.push(blocks[i].rotate_left(pivot(), modify));
      }
      return modify ?
        blocks :
        results.map(function(xy){return tetris.block(xy[0], xy[1]);});
    };

    var down = function(modify) {
      var results = [];
      for (var i = 0; i < blocks.length; i += 1) {
        results.push(blocks[i].down(modify));
      }
      return modify ?
        blocks :
        results.map(function(xy){return tetris.block(xy[0], xy[1]);});
    };

    var right = function(modify) {
      var results = [];
      for (var i = 0; i < blocks.length; i += 1) {
        results.push(blocks[i].right(modify));
      }
      return modify ?
        blocks :
        results.map(function(xy){return tetris.block(xy[0], xy[1]);});
    };

    var left = function(modify) {
      var results = [];
      for (var i = 0; i < blocks.length; i += 1) {
        results.push(blocks[i].left(modify));
      }
      return modify ?
        blocks :
        results.map(function(xy){return tetris.block(xy[0], xy[1]);});
    };

    var get_blocks = function() {
      return blocks;
    }

    object = {
      pivot: pivot,
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
    var n = Math.floor(Math.random() * (pieces.length-1));
    return i();
    //return pieces[n]();
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
