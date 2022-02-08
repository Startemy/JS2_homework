export default class ProductCardView {
  constructor(data) {
    this.data = data

  }
    showcard(data) {
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
    }

}
