tetris.geometry = function() {
  var map_over_pairs = function(a, b, fn) {
    var results = [];
    for (var i = 0; i < a.length; i += 1) {
      results.push(fn(a[i], b[i]));
    }
    return results;
  };

  var get_column = function(matrix, col) {
    return matrix.map(function(row){return row[col];});
  };

  var transpose_matrix = function(matrix) {
    var results = [];
    for (var i = 0; i < matrix.length; i += 1) {
      results.push(get_column(matrix, i));
    }
    return results;
  };

  var dot_product = function(a, b) {
    var result = 0;
    for (var i = 0; i < a.length; i += 1) {
      result += a[i] * b[i]
    }
    return result;
  };

  var matrix_apply = function(matrix, vector) {
    var columns = transpose_matrix(matrix);
    return columns.map(function(column) {
      return dot_product(column, vector);
    });
  };

  var neg = function(vector) {
    return vector.map(function(i){return -i;});
  };

  var translate = function(a, b) {
    return map_over_pairs(a, b, function(x,y){return x + y;});
  };

  var rotate_left = function(vector) {
    return matrix_apply(
      [[0, -1],
       [1,  0]],
      vector);
  };

  var rotate_right = function(vector) {
    return matrix_apply(
      [[ 0, 1],
       [-1, 0]],
      vector);
  };

  var rotate_left_relative = function(vector, origin) {
    var v = vector;
    v = translate(v, neg(origin));
    v = rotate_left(v)
    v = translate(v, origin);
    return v;
  };

  var rotate_right_relative = function(vector, origin) {
    var v = vector;
    v = translate(v, neg(origin));
    v = rotate_right(v)
    v = translate(v, origin);
    return v;
  };

  return {
    right_rel: rotate_right_relative,
    left_rel: rotate_left_relative,
    translate: translate
  };
}();
