const enhancer = require('./enhancer.js');
const { Item } = require('./enhancer.js');

// it('Sanity test', () => {
//   expect(2).toEqual(2);
// });

describe('item class', () => {
  let newItem;
  beforeEach(() => {
    newItem = new Item('iron dagger', 5, 3);
  });

  test('enhancer exists', () => {
    expect(enhancer).toBeDefined();
  });
  test('Item class exists', () => {
    expect(Item).toBeDefined();
  });

  test('Item class creates instances', () => {
    expect(newItem).toBeInstanceOf(Item);
  });

  describe('Item class props', () => {
    it('item has a name prop', () => {
      expect(newItem).toHaveProperty('name');
    });
    it('item has a durability prop', () => {
      expect(newItem).toHaveProperty('durability');
    });
    it('item has a enhancement prop', () => {
      expect(newItem).toHaveProperty('enhancement');
    });
  });

  describe('Item class methods', () => {
    //Repair Method
    it('Item class has a repair method', () => {
      expect(newItem.repair).toBeInstanceOf(Function);
    });
    it('repair method returns a value of 100', () => {
      newItem.repair(newItem);
      expect(newItem.durability).toEqual(100);
    });

    //Success Method
    it('Item class has an enchance method', () => {
      expect(newItem.success).toBeInstanceOf(Function);
    });
    it('success method returns newItem enhance level + 1', () => {
      newItem.success(newItem);
      expect(newItem.enhancement).toEqual(4);
    });
  });
});
