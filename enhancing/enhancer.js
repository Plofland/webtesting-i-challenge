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
  success(item) {
    if (item.enhancement < 20) {
      item.enhancement += 1;
    } else {
      return { ...item };
    }
  }
}

function fail(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}

module.exports = {
  Item,
  fail,
  get
};
