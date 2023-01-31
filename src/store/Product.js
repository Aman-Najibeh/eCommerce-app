// Utilities
// import { push } from 'core-js/core/array'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('Product', {
  persist: true,
  state: () => ({
    ProductsStore:[],
    SingleProduct:[],
    productFilter:"all",
    searchvalue:'',
    index:null,
    currntproductedit:{}
  }),
  getters:{
          
      all() {
        return this.ProductsStore.filter(Product => {
          return Product
        })
      },
      smartphones() {
        return this.ProductsStore.filter(Product => {
          return Product.category === 'smartphones'
        })
      },
      laptops() {
        return this.ProductsStore.filter(Product => {
          return Product.category === 'laptops'
        })
      },
      fragrances() {
        return this.ProductsStore.filter(Product => {
          return Product.category === 'fragrances'
        })
      },
      skincare() {
        return this.ProductsStore.filter(Product => {
          return Product.category === 'skincare'
        })
      },
      groceries() {
        return this.ProductsStore.filter(Product => {
          return Product.category === 'groceries'
        })
      },
      homedecoration() {
        return this.ProductsStore.filter(Product => {
          return Product.category === 'home-decoration'
        })
      },
      filteredProducts() {
        if(!this.searchvalue=='')
          {
            return this.ProductsStore.filter((Product) => {
              return Product.title.toLowerCase().includes(this.searchvalue.toLowerCase())
            })
          }
        else if (this.productFilter === "all")
         {
          return this.all;
        }
        else if(this.productFilter === "laptops")
          {
            return this.laptops;
          }
          else if(this.productFilter === "smartphones")
          {
            return this.smartphones;
          }
          else if(this.productFilter === "fragrances")
          {
            return this.fragrances;
          }
          else if(this.productFilter === "skincare")
          {
            return this.skincare;
          }
          else if(this.productFilter === "groceries")
          {
            return this.groceries;
          }
          else if(this.productFilter === "home-decoration")
          {
            return this.homedecoration;
          }
        
       

      }
  },
  actions:{
    productFilterValue(value)
    { 
      return this.productFilter=value
    },
    addProducttoStore(ProductsApi)
    {
      this.ProductsStore=ProductsApi
    },
    selectSingleProduct(product)
    {
       this.SingleProduct=product
    },
    AddProduct(product)
    {
      this.ProductsStore.push(product)
      //product={}
      // console.log(product);
    },
    RemoveProduct(i)
    {
       this.ProductsStore.splice(i,1)
    },
    returnindexProductEdit(i)
    {
      this.index=i
      this.currntproductedit=this.ProductsStore[i]
      console.log(this.index);
      console.log(this.currntproductedit);
      console.log(this.currntproductedit.id);
    },
    AddEditProductToProducts()
  {
    this.ProductsStore[this.index]=this.currntproductedit
    this.currntproductedit={}
  }
  }

})
