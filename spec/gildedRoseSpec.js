describe("Gilded Rose", function() {

  describe("#reduceSellIn", function() {
    it("should reduce sellIn by 1", function() {
      const gildedRoseEdit = new Shop([ new Item("foo", 5, 4) ]);
      const items = gildedRoseEdit.updateQuality();
      expect(items[0].sellIn).toEqual(4);
    });
  })

  describe("#updateQuality", function() {

    it("return items name", function() {
      const gildedRoseEdit = new Shop([ new Item("foo", 5, 4) ]);
      const items = gildedRoseEdit.updateQuality();
      expect(items[0].name).toEqual("foo");
    });

    it("No product can have negative quality", function() {
      const gildedRoseEdit = new Shop([
         new Item("foo", 0, 0),
         new Item("Backstage passes to a TAFKAL80ETC concert", -1, 0)
        ]);
      const items = gildedRoseEdit.updateQuality();
      expect(items[0].quality).toEqual(0);
      expect(items[1].quality).toEqual(0);
    });

    it("No product can have quality above 50", function() {
      const gildedRoseEdit = new Shop([
         new Item("Aged Brie", 5, 50),
         new Item("Backstage passes to a TAFKAL80ETC concert", 3, 49)
        ]);
      const items = gildedRoseEdit.updateQuality();
      expect(items[0].quality).toEqual(50);
      expect(items[1].quality).toEqual(50);
    });

    describe("Regular product", function() {

      it("should reduce quality by 1", function() {
        const gildedRoseEdit = new Shop([ new Item("foo", 5, 4) ]);
        const items = gildedRoseEdit.updateQuality();
        expect(items[0].name).toEqual("foo");
        expect(items[0].quality).toEqual(3);
      });

      it("quality reduction is doubled after sellIn is 0", function() {
        const gildedRoseEdit = new Shop([ new Item("foo", 0, 5) ]);
        const items = gildedRoseEdit.updateQuality();
        expect(items[0].name).toEqual("foo");
        expect(items[0].quality).toEqual(3);
      });
    });

    describe("Aged Brie", function() {

      it("Increase quality as it ages", function() {
        const gildedRoseEdit = new Shop([ new Item("Aged Brie", 1, 1) ]);
        const items = gildedRoseEdit.updateQuality();
        expect(items[0].quality).toEqual(2);
      });

      it("Ages doubly fast after sellIn hits 0", function() {
        const gildedRoseEdit = new Shop([ new Item("Aged Brie", 0, 0) ]);
        const items = gildedRoseEdit.updateQuality();
        expect(items[0].quality).toEqual(2);
      });
    });

    describe("Legendary", function() {
      it("Remains unchanged", function() {
        const gildedRoseEdit = new Shop(
          [ new Item("Sulfuras, Hand of Ragnaros", 5, 5) ]
        );
        const items = gildedRoseEdit.updateQuality();
        expect(items[0].sellIn).toEqual(5);
        expect(items[0].sellIn).toEqual(5);
      });
    });

    describe("Tickets", function() {
      it("quality increases by 1 if sellIn > 10", function() {
        const gildedRoseEdit = new Shop([
           new Item("Backstage passes to a TAFKAL80ETC concert", 15, 10)
         ]);
        const items = gildedRoseEdit.updateQuality();
        expect(items[0].quality).toEqual(11);
      });

      it("quality increases by 2 if 5 < sellIn <= 10", function() {
        const gildedRoseEdit = new Shop([
          new Item("Backstage passes to a TAFKAL80ETC concert", 7, 9)
        ]);
        const items = gildedRoseEdit.updateQuality();
        expect(items[0].quality).toEqual(11);
      });

      it("quality increases by 3 if sellIn <= 5 ", function() {
        const gildedRoseEdit = new Shop([
          new Item("Backstage passes to a TAFKAL80ETC concert", 5, 8)
        ]);
        const items = gildedRoseEdit.updateQuality();
        expect(items[0].quality).toEqual(11);
      });

      it("quality hits 0 after the event", function() {
        const gildedRoseEdit = new Shop([
          new Item("Backstage passes to a TAFKAL80ETC concert", -1, 40)
        ]);
        const items = gildedRoseEdit.updateQuality();
        expect(items[0].quality).toEqual(0);
      });
    });

    describe("Conjured", function() {

      it("should reduce quality by 2", function() {
        const gildedRoseEdit = new Shop([ new Item("Conjured", 5, 5) ]);
        const items = gildedRoseEdit.updateQuality();
        expect(items[0].name).toEqual("Conjured");
        expect(items[0].quality).toEqual(3);
      });

      it("quality reduction is doubled after sellIn is 0", function() {
        const gildedRoseEdit = new Shop([ new Item("Conjured", 0, 5) ]);
        const items = gildedRoseEdit.updateQuality();
        expect(items[0].name).toEqual("Conjured");
        expect(items[0].quality).toEqual(1);
      });
    });
  });
});
