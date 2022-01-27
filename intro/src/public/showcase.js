const $showcase = document.querySelector('.showcase');

const renderGoodsItem = ({ title, price, picture }) => {
    return `
    <div class="goods-item">
    <div class="picture"><img src='https://picsum.photos/id/${picture}/250/200'></div>
    <h3>${title}</h3>
    <p>${price} &#8381;</p>
    </div>
    `;
};

const renderGoodsList = (list) => {
let goodsList = list.map(
        (item) =>  {
            return renderGoodsItem(item)
        }
    ).join('');

$showcase.insertAdjacentHTML('beforeend', goodsList);
}

export default renderGoodsList