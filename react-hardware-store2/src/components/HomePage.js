 import React, {Component} from 'react';
 import AdminView from './AdminView';
 class HomePage extends Component {
 
 
    constructor() {
        super();
 
    this.state = {
 	itemCurrentlyOnSale: 'Toolbelts',
 	editSaleItem: true,
 	productList: [
 		{
 		  productName: 'Toolbelts',
 		  description: 'Pockets for Days',
 		  price: 12.3,
 		},
 		{
 		productName: 'Hammer',
 		  description: 'Heavy Duty Hammer Time',
 		  price: 12.3,
 		    }
       ],
          cartList: [],
    };
 }
  _toggleEditSaleItem = () => {
        const editSaleItem = !this.state.editSaleItem;
        this.setState({editSaleItem});
    };
    _handleItemCurrentlyOnSaleChange = (event) => {
        const itemCurrentlyOnSale = event.target.value;
                     
        this.setState({itemCurrentlyOnSale});
    };
    _addNewProductToProductList = (newProduct) => {
        const productList = [...this.state.productList];
        productList.push(newProduct);
        this.setState({productList});
    };
  _deleteProductFromProductList = (productkey) => {
    const productList = [...this.state.productList];
    productList.splice(productkey, 1);
     this.setState({productList});
}
   _addProductToCart = (index) => {
    const product = {...this.state.productList[index]};
    const cartList = [...this.state.cartList];

    cartList.push(product);

    this.setState({cartList});
  };

  _removeProductFromCart = (index) => {
    const cartList = [...this.state.cartList];

    cartList.splice(index, 1);

    this.setState({cartList});
  };

render() {

    const adminView = <AdminView
        productList={this.state.productList}
        addNewProductToProductList={this._addNewProductToProductList}
        deleteProductFromListByIndex={this._deleteProductFromListByIndex}/>;

    const shopView = <ShopView
        productList={this.state.productList}
        addProductToCart={this._addProductToCart}/>;
     return (
         <div>
           <h1>Aubrey's Handy Hardware</h1>
           <div>
            <span>
           Currently On Sale: { this.state.itemCurrentlyOnSale }    <button onClick={this._toggleEditSaleItem}>
                 { this.state.editSaleItem ? 'Hide' : 'Edit Sale Item' }
               </button>
             </span>
              {this.state.editSaleItem ?
           <div>
            <input 
                onChange={this._handleItemCurrentlyOnSaleChange}
                value={this.state.itemCurrentlyOnSale} 
                type="text"/>
         </div>
         : null}
 
    <AdminView 
   productList={this.state.productList}
   addNewProductToProductList={this._addNewProductToProductList}
   deleteProductFromProductList={this._deleteProductFromProductList}/>

   </div>
   <div>
<button onClick={this._toggleAdminView}>
                  {this.state.showAdminView
                      ? 'Show Shop View'
                      : 'Show Admin View'}
                </button>
                </div>
          
          <div id="view-container">
            {this.state.showAdminView ? adminView : shopView}

            <CartView
                productList={this.state.cartList}
                removeProductFromCart={this._removeProductFromCart}/>
          </div>
          </div>
          
  
    );
  }
}

export default HomePage;