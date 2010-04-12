tetris.block = function(x, y) {

  var get_x = function() {
    return x;
  };

  var get_y = function() {
    return y;
  };

  var get_xy = function() {
    return [x, y];
  }

  var rotate_right = function(origin) {
    var v = tetris.geometry.right_rel([x, y], origin);
    x = v[0];
    y = v[1];
  }

  var rotate_left = function(origin) {
    var v = tetris.geometry.left_rel([x, y], origin);
    x = v[0];
    y = v[1];
  }

  var down = function() {
    var v = tetris.geometry.translate([x, y], [0, 1]);
    x = v[0];
    y = v[1];
  }

  var right = function() {
    var v = tetris.geometry.translate([x, y], [1, 0]);
    x = v[0];
    y = v[1];
  }

  var left = function() {
    var v = tetris.geometry.translate([x, y], [-1, 0]);
    x = v[0];
    y = v[1];
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
