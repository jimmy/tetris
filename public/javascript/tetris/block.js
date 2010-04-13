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

  var rotate_right = function(origin, modify) {
    var xy = tetris.geometry.right_rel([x, y], origin);
    return modify === false ? xy : set_xy(xy);
  }

  var rotate_left = function(origin, modify) {
    var xy = tetris.geometry.left_rel([x, y], origin);
    return modify === false ? xy : set_xy(xy);
  }

  var down = function(modify) {
    var xy = tetris.geometry.translate([x, y], [0, 1]);
    return modify === false ? xy : set_xy(xy);
  }

  var right = function(modify) {
    var xy = tetris.geometry.translate([x, y], [1, 0]);
    return modify === false ? xy : set_xy(xy);
  }

  var left = function(modify) {
    var xy = tetris.geometry.translate([x, y], [-1, 0]);
    return modify === false ? xy : set_xy(xy);
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
