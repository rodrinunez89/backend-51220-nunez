const fs = require('fs/promises');

class ProductManager {
    constructor(path){
       this.products = []
       this.path = path;
    }
    
    async addProduct(product) {
        const products = await this.getProducts();
        const checkProducts = await this.checkProduct(product);
        if(checkProducts){
            products.push(
                {
                    title: product.title,
                    description: product.description,
                    price: product.price,
                    status:product.status || true,
                    thumbnail: product.thumbnail,
                    code: product.code,
                    stock: product.stock,
                    id: await this.generateId()
                }
            );
            await fs.writeFile(this.path, JSON.stringify(products, 'utf-8', 4));
            return true
        } else {
            console.error('Error on add product', product);
            return false
        }
    }

    

    async deleteItemById(productId){
        const products = await this.getProducts();
        let found = false;
        products.forEach((product, index)=>{
            if (product.id === parseInt(productId)) {
                products.splice(index, 1)
                found = true;
        }})
        if(found){
            await fs.writeFile(this.path, JSON.stringify(products, 'utf-8', 4));
        }
        return found;
    }

    async checkProduct(product){
        const code = await this.getCode(product.code);
        return !code && product.title && product.description && product.price && product.stock
    }

    async getCode(code){
        const products = await this.getProducts();
        const productFind = products.filter((product) => product.code == code);
        return !!(productFind.length);
    }

    async getProducts(){
        const products = await fs.readFile(this.path ,'utf-8');
        const productsJson = JSON.parse(products);
        return productsJson;
    }

    async getProductsById(id){
        const products = await this.getProducts();
        const product = products.filter(product => product.id === parseInt(id));
        return product;
    }
    

    async updateProduct(id, params){
        let products = await this.getProducts();
        products = products.map((product) => {
            if(product.id === parseInt(id)){
                return {...product, ...params};
            } else {
                return product;
            }
        })
        await fs.writeFile(this.path, JSON.stringify(products, 'utf-8', 4));
    }


    async generateId(){
        const products = await this.getProducts();
        return products.length + 1;
    }


}


module.exports = ProductManager;

