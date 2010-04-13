tetris.stage = function() {
  var width = 12;
  //var height = 36;
  var height = 12;

  var dead_blocks = [];
  var get_dead_blocks = function() {
    return dead_blocks;
  };

  var add_dead_blocks = function(blocks) {
    dead_blocks = dead_blocks.concat(blocks);
    clear_full_lines();
  };

  var full_row = function(row) {
    for (var col = 0; col < width; col += 1) {
      if (!row[col]) {
        return false;
      }
    }
    return true;
  };

  var fresh_slots = function() {
    var slots = [];
    for (var i = 0; i < height; i += 1) {
      slots[i] = [];
      for (var j = 0; j < height; j += 1) {
        slots[i].push(null);
      }
    }
    return slots;
  };

  var make_index = function(blocks) {
    var slots = fresh_slots();
    for (var i = 0; i < blocks.length; i += 1) {
      slots[blocks[i].y()][blocks[i].x()] = [i, blocks[i]];
    }
    return slots;
  }

  var clear_full_lines = function() {
    var index = make_index(dead_blocks);
    for (var i = 0; i < height; i += 1) {
      if (full_row(index[i])) {
        clear_row(i);
        down(i);
      }
    }
  };

  var clear_row = function(row) {
    var new_blocks = [];
    for (var i = 0; i < dead_blocks.length; i += 1) {
      if (dead_blocks[i].y() != row) {
        new_blocks.push(dead_blocks[i]);
      }
    }
    dead_blocks = new_blocks;
  };

  var down = function(row) {
    for (var i = 0; i < dead_blocks.length; i += 1) {
      if (dead_blocks[i].y() < row) {
        dead_blocks[i].down();
      }
    }
  };

  return {
    width: width,
    height: height,
    add_dead_blocks: add_dead_blocks,
    dead_blocks: get_dead_blocks
  };
}();
