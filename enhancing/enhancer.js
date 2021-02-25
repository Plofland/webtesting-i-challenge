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
  fail(item) {
    if(item.enhancement < 15){
      item.enhancement -= 5;
    } 
    else if (item.enhancement === 15 ){
      item.enhancement -= 10;
    }else {
      item.enhancement -= 1;
    }
  }
}

function get(item) {
  return { ...item };
}

module.exports = {
  Item,
  get
};
