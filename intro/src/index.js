/**@param _ - сокращенное название Lodash  */
import _ from 'lodash';
import "./scss/style.scss";
import renderGoodsList from "./public/showcase.js";
import { send } from './utils.js'

//Получаем продукты из  mock для рандомно.
// const productList = getProductList(20);
// renderGoodsList(productList);

const API_URL = 'http://localhost:3000/api/v1'


let productList = [];
let cart = [];
let id = 5;

//Получаем массив с товарами из catalog.json
send((error) => { console.log(err) }, (res) => {
   let list = JSON.parse(res);
   productList = list;
   //Перебераем и добавляем на страницу
   renderGoodsList(productList);
}, `${API_URL}/catalog`)

// Пользователь добавляет товар в корзину
let buyed = {id: 8, title: "new", price: 999}
send((error) => { console.log(err) }, (res) => {
   cart.push(buyed)
}, `${API_URL}/cart`, 'POST', JSON.stringify(buyed), {"Content-Type": "application/json"})


//Удаление товара из корзины Fetch
function delFromCart(url){
   return fetch(`${API_URL}${url}`, {
      method: 'DELETE',
      headers: {
         'Content-Type': 'application/json;charset=utf-8'
      },
   })
}
delFromCart(`/cart/${id}`);


// //Удаление товара из корзины *****
// delFromCartSec(`/cart`)

// function delFromCartSec(url){
//    fetch(`${API_URL}${url}`, {
//       method: 'delete',
//       headers: {
//          'Content-Type': 'application/json;charset=utf-8'
//       },
//       body: id
//    })
//    .then(res => res.json())
//    //.then(res => console.log(res));
// }