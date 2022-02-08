import ProductList from "./ProductList.js";

export default class ShowcaseModel extends ProductList {
   constructor(apiHandler, eventEmiter, cart) {
      super([])
      this.api = apiHandler
      this.cart = cart
      this.eventEmiter = eventEmiter
   }

   fetch() {
      return this.api.getCatalog ()
         .then((list) =>{
            this.list = list
            return list
         })
         .then((list) => {
            this.eventEmiter.emit('showcaseFeched', list)
            return list
         })
   }

   buy(id, onError) {
      const product = this.find(id)
      if(product) cart.add(product, onError)
   }
}
