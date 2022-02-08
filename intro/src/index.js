import './scss/style.scss';
//import _ from 'lodash';
//import renderGoodsList from "./public/showcase.js";
import ApiHandler from './ApiHandler.js';
import CartModel from './CartModel.js';
import ShowcaseModel from './ShowcaseModel.js';
import EventEmitter from './EventEmitter.js'
import ProductCardView from './ProductCardView.js'

const API_URL = 'http://localhost:3000/api/v1'

const api = new ApiHandler(API_URL)
const eventEmmiter = new EventEmitter()
const prodCardView = new ProductCardView()

const cart = new CartModel(api, eventEmmiter)
const showcase = new ShowcaseModel(api, eventEmmiter, cart)


// Выводим список продуктов на сайт
eventEmmiter.subscribe('showcaseFeched', (data) => {
   prodCardView.showcard(data)
});

// showcase.fetch()
//    .then((data) => {
//       console.log('Товары получены')
//    })
//    .catch((err) => {
//       console.log('Палямалься')
//    })

// cart.fetch()
//    .then((data) => {
//       console.log('Корзина получена')
//    })
//    .catch((err) => {
//       console.log('Палямалься')
// })


//Добавить в корзину
let product = {id: 8, title: "new", price: 999}
cart.add(product)

//Удалить из корзины
//  let id = {id: 5};
//  cart.remove(id)
