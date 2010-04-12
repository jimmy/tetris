tetris.rotator = function() {
  var dot_product = function(a, b) {
    return (a[0]*b[0]) + (a[1]*b[1]);
  };

  var matrix_apply = function(matrix, vector) {
    col_0 = [matrix[0][0], matrix[1][0]];
    col_1 = [matrix[0][1], matrix[1][1]];
    return [dot_product(col_0, vector),dot_product(col_1, vector)];
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

  var rotate_right_multi = function(vectors) {
     var results = [];
     for(var i = 0; i < vectors.length; i += 1) {
       results.push(rotate_right(vectors[i]));
     }
     return results;
  };

  var rotate_left_multi = function(vectors) {
     var results = [];
     for(var i = 0; i < vectors.length; i += 1) {
       results.push(rotate_left(vectors[i]));
     }
     return results;
  };

  return {
    right: rotate_right_multi,
    left: rotate_left_multi,
  };
}();
