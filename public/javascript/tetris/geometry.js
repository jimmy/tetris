tetris.geometry = function() {
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

  var neg = function(vector) {
    var results = [];
    for (var i = 0; i < vector.length; i += 1) {
      results.push(-1 * vector[i]);
    }
    return results; 
  };

  var translate = function(a, b) {
     var results = [];
     for(var i = 0; i < a.length; i += 1) {
       results.push(a[i] + b[i]);
     }
     return results;
  };

  var translate_multi = function(vectors, vector) {
    var results = [];
     for (var i = 0; i < vectors.length; i += 1) {
       results.push(translate(vectors[i], vector));
     }
    return results;
  };


  var rotate_right_relative = function(vector, origin) {
    var v = vector;
    v = translate(v, neg(origin));
    v = rotate_right(v)
    v = translate(v, origin);
    return v;
  };

  var rotate_left_relative = function(vector, origin) {
    var v = vector;
    v = translate(v, neg(origin));
    v = rotate_left(v)
    v = translate(v, origin);
    return v;
  };

  var rotate_left_multi_relative = function(vectors, origin) {
     var results = [];
     var v;
     for(var i = 0; i < vectors.length; i += 1) {
       v = vectors[i]

       v = translate(v, neg(origin));
       v = rotate_left(v)
       v = translate(v, origin);

       results.push(v);
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

    right_rel: rotate_right_relative,
    left_rel: rotate_left_relative,

    translate: translate,
    translate_multi: translate_multi
  };
}();
