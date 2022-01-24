/**@param _ - сокращенное название Lodash  */
import _ from 'lodash';
import "./scss/style.scss";
import getProductList from "./public/mock/data.js";
import renderGoodsList from "./public/showcase.js";

const productList = getProductList(20);
renderGoodsList(productList);
