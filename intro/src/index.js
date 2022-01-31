import './scss/style.scss';
//import _ from 'lodash';
//import renderGoodsList from "./public/showcase.js";
import ApiHandler from './ApiHandler.js';
import CartModel from './CartModel.js';
import ShowcaseModel from './ShowcaseModel.js';
import EventEmitter from './EventEmitter.js'

const API_URL = 'http://localhost:3000/api/v1'

const api = new ApiHandler(API_URL)
const eventEmmiter = new EventEmitter()

const cart = new CartModel(api, eventEmmiter)
const showcase = new ShowcaseModel(api, eventEmmiter, cart)

// eventEmmiter.subscribe('showcaseFeched', (data) => {
//    console.log(data)
// })

// eventEmmiter.subscribe('cartFeched', (data) => {
//    console.log(data)
// })

// Выводим список продуктов на сайт
eventEmmiter.subscribe('showcaseFeched', (data) => {
   data.forEach((product) => {
      const showcase = document.querySelector('.showcase');
      showcase.insertAdjacentHTML('beforeend',
         `<div class="goods-item">
         <div class="picture"><img src='https://picsum.photos/id/${product.picture}/250/200'></div>
         <h3>${product.title}</h3>
         <p>${product.price} &#8381;</p>
         </div>
         `
      )
   })
});

showcase.fetch()
   // .then((data) => {
   //    console.log('Товары получены')
   // })
   .catch((err) => {
      console.log('Палямалься')
   })

cart.fetch()
   // .then((data) => {
   //    console.log('Корзина получена')
   // })
   .catch((err) => {
      console.log('Палямалься')
})

let product = {id: 8, title: "new", price: 999}
cart.add(product)





//Получаем продукты из  mock для рандомно.
// const productList = getProductList(20);
// renderGoodsList(productList);

// let productList = [];
// let cart = [];
// let idD = {id: 5};

//Получаем массив с товарами из catalog.json
// send((error) => { console.log(err) }, (res) => {
//    let list = JSON.parse(res);
//    productList = list;
//    //Перебераем и добавляем на страницу
//    renderGoodsList(productList);
// }, `${API_URL}/catalog`)

// Пользователь добавляет товар в корзину
// let product = {id: 8, title: "new", price: 999}
// send((error) => { console.log(err) }, (res) => {
//    cart.push(buyed)
// }, `${API_URL}/cart`, 'POST', JSON.stringify(product), {'Content-Type': 'application/json'})

// Удалить товар из корзины
// send((error) => { console.log(error) }, (res) => {
//    console.log(delfromcart)
// }, `${API_URL}/cart`, 'DELETE', JSON.stringify(idD), {'Content-Type': 'application/json'})

//Удаление товара из корзины Fetch по id
// function delFromCart(url){
//    return fetch(`${API_URL}${url}`, {
//       method: 'DELETE',
//       headers: {
//          'Content-Type': 'application/json;charset=utf-8'
//       },
//    })
// }
// delFromCart(`/cart/${id}`)