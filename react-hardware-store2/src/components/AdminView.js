 import React, {Component} from 'react';
 import ProductList from './ProductList';
 import ProductForm from './ProductForm';

 class AdminView extends Component {
     render () {
         const productList = this.props.productList;
         return (
        <div>
           <h1>Admin View</h1>
 
           
           {/* // show our list of products here */}
            <h2>Products</h2>
            <ProductList deleteProductFromProductList={this.props.deleteProductFromProductList} productList={productList} />
 
           <h2>Create a New Product</h2>
            <ProductForm addNewProductToProductList={this.props.addNewProductToProductList}/>
         </div>
         );
         
     }
 }

 export default AdminView;





//   handleRowDel(product) {
//     var index = this.state.products.indexOf(product);
//     this.state.products.splice(index, 1);



//    deleteProduct = (event) => {
//  	event.preventDefault();
 	
//  	this.props.deleteProduct(this.state.deleteProduct);
//  };




// onSubmit={this.deleteProduct}
// <div><input type="submit" value="Create New Product"/></div>