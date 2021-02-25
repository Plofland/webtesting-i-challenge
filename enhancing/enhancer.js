class Item {
  constructor(name, durability, enhancement) {
    this.name = name;
    this.durability = durability;
    this.enhancement = enhancement;
  }
  repair(item) {
    item.durability = 100;
    return { ...item };
  }
}

function success(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}


function get(item) {
  return { ...item };
}

module.exports = {
  Item,
  success,
  fail,
  get
};
