import ProductList from './ProductList.js'

export default class CartModel extends ProductList {
   constructor(apiHandler, eventEmmiter) {
      super([])
      this.api = apiHandler
      this.eventEmmiter = eventEmmiter
   }

   fetch() {
      return this.api.getCart()
         .then((list) => {
            this.list = list
            return list
         })
         .then((list) =>{
            this.eventEmmiter.emit('cartFeched', list)
            return list
         })
   }

   add(data) {
      this.api.addToCart(data)
   }

   remove(id) {
      this.api.removeFromCart(id)
   }
}