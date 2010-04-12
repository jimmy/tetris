tetris.block = function(x, y) {

  var get_x = function() {
    return x;
  };

  var get_y = function() {
    return y;
  };

  var get_xy = function() {
    return [x, y];
  };

  var set_xy = function(xy) {
    x = xy[0];
    y = xy[1];
    return [x, y];
  };

  var rotate_right = function(origin) {
    return set_xy(tetris.geometry.right_rel([x, y], origin));
  }

  var rotate_left = function(origin) {
    return set_xy(tetris.geometry.left_rel([x, y], origin));
  }

  var down = function() {
    return set_xy(tetris.geometry.translate([x, y], [0, 1]));
  }

  var right = function() {
    return set_xy(tetris.geometry.translate([x, y], [1, 0]));
  }

  var left = function() {
    return set_xy(tetris.geometry.translate([x, y], [-1, 0]));
  }

  return {
    x: get_x,
    y: get_y,
    xy: get_xy,
    rotate_right: rotate_right,
    rotate_left: rotate_left,
    down: down,
    right: right,
    left: left
  };
};
