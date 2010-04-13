tetris.stage = function() {
  var width = 12;
  //var height = 36;
  var height = 12;

  var slots = [];
  for (var row = 0; row < height; row += 1) {
    var cur_row = [];
    for (var col = 0; col < width; col += 1) {
      cur_row.push(null);
    }
    slots.push(cur_row);
  }

  var get_dead_blocks = function() {
    var blocks = [];
    for (var row = 0; row < height; row += 1) {
      for (var col = 0; col < width; col += 1) {
        if (slots[row][col]) {
          blocks.push(slots[row][col]);
        }
      }
    }
    return blocks;
  };

  var add_dead_blocks = function(blocks) {
    for (var i = 0; i < blocks.length; i += 1) {
      var col = blocks[i].x();
      var row = blocks[i].y();
      slots[row][col] = blocks[i];
    }
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
  var clear_full_lines = function() {
    for (var row = 0; row < height; row += 1) {
      if (full_row(slots[row])) {
        for (var col = 0; col < width; col += 1) {
          slots[row][col] = null;
        }
      }
    }
  };

  var collapse = function() {
  };

  return {
    width: width,
    height: height,
    slots: slots,
    add_dead_blocks: add_dead_blocks,
    dead_blocks: get_dead_blocks
  };
}();
