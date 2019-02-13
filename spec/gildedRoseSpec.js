
describe("Gilded Rose", function() {

  describe("#updateQuality", function() {

    it("No product can have negative quality", function() {
      const gildedRose = new Shop([
         new Item("foo", 1, 0),
         new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0)
        ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
      expect(items[1].quality).toEqual(0);
    });


    describe("Regular product", function() {

      it("should reduce sellIn by 1", function() {
        const gildedRose = new Shop([ new Item("foo", 5, 4) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toEqual("foo");
        expect(items[0].sellIn).toEqual(4);
      });

      it("should reduce quality by 1", function() {
        const gildedRose = new Shop([ new Item("foo", 5, 4) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toEqual("foo");
        expect(items[0].quality).toEqual(3);
      });

      it("should reduce quality by 1", function() {
        const gildedRose = new Shop([ new Item("foo", 5, 4) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toEqual("foo");
        expect(items[0].quality).toEqual(3);
      });
    });

    describe("Aged Brie", function() {

      xit("should foo", function() {
        const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toEqual("fixme");
      });

      xit("should foo", function() {
        const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toEqual("fixme");
      });
    });

    describe("Legendary", function() {
      xit("should foo", function() {
        const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toEqual("fixme");
      });

      xit("should foo", function() {
        const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toEqual("fixme");
      });
    });

    describe("Tickets", function() {
      xit("should foo", function() {
        const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toEqual("fixme");
      });

      xit("should foo", function() {
        const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toEqual("fixme");
      });
    });
  });
});
