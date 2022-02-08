import { send, sendPromise } from './utils.js';

export default class ApiHandler {

   constructor(apiUrl) {
      this.apiUrl = apiUrl
   }

   getCatalog() {
      return sendPromise(`${this.apiUrl}/catalog`)
      .then((data) =>{
         return JSON.parse(data)
      })
   }

   getCart() {
      return sendPromise(`${this.apiUrl}/cart`)
      .then((data) => {
         return JSON.parse(data)
      })
   }

   addToCart(data) {
      fetch(`${this.apiUrl}/cart`, {
         method: 'POST',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(data)
      })
   }

   removeFromCart(data) {
      fetch(`${this.apiUrl}/cart`, {
         method: 'DELETE',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(data)
      })
   }
}