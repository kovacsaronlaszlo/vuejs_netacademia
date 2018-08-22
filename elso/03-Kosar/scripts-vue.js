let app = new Vue({
    el: 'main#app',
    data: {
        itemCollection: [],
        newitem: {
            name: null,
            count: null,
            basePrice: null
        }
    },
    created() {
        this.itemCollection.push(new CartItem('tej', 2, 200));
        this.itemCollection.push(new CartItem('kenyér', 1, 250));
        this.itemCollection.push(new CartItem('tojás', 6, 45));
    },
    methods: {
        AddNewItem() {
            // validálás
            if (
                !CartItem.CanBeConstructed(
                    this.newitem.name,
                    this.newitem.count,
                    this.newitem.basePrice
                )
            ) {
                return;
            }

            // új elem hozzáadása
            this.itemCollection.push(
                new CartItem(
                    this.newitem.name,
                    this.newitem.count,
                    this.newitem.basePrice
                )
            );

            // ideiglenes objektum ürítése
            this.newitem.name = null;
            this.newitem.count = null;
            this.newitem.basePrice = null;
        },
        GetTotal() {
          return this.itemCollection
              .map(item => {
                  return item.GetTotalPrice();
              })
              .reduce((acc, price) => {
                 return acc + price;
              });
        }
    }
});