class Cart {
    constructor() {
        this.carts = []
      }

        
    addItem(data) {
        var datas = this.carts
        datas.push(...datas,data)
        for( var i in datas ){
            console.log(datas[i])
        }
      
        return this
    }

    // removeItem(data){

    //     const RemoveItem = (arr, data) => {
    //         return arr.filter(item => item !== itemToRemove)
    //     }
    //     const items =  this.carts
    //     RemoveItem(items, data)
    // }
  }



const cart = new Cart()

cart.addItem({ item_id: 1, price: 30000, quantity: 3 })
    .addItem({ item_id: 2, price: 10000 })
    .addItem({ item_id: 3, price: 5000, quantity: 2 })
  //     .removeItem({item_id: 2})
//     .addItem({ item_id: 4, price: 400, quantity: 6 })
//     .addDiscount('50%')

// cart.totalItems()

// cart.totalQuantity()

// cart.totalPrice()

// cart.showAll()

// cart.checkout()