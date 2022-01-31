export default class ProductList {
   constructor(list) {
      this.list = list;
   }

   getList() {
      return this.list;
   }

   find(id) {
      const index = this.list.findIndex((item) => item.id == id);
      if(index >=0) {
         return this.list[index];
      }
      return false;
   }

   remove(id) {
      const index = this.list.findIndex((item) => item.id == id);
      if(index >= 0){
         this.list = [...this.list.splice(0,index),...this.list.splice(index + 1)];
         return true
      }
      return false;
   }
}