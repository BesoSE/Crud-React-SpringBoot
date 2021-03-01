
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header';
import './App.css';
import ProductService from './service/ProductService';
import Products from './components/Products';
import { useState } from 'react';
import { useEffect } from 'react';
import ProductInfo from './components/ProductInfo';
import AddOrUpdateProduct from './components/AddOrUpdateProduct';


function App() {

 
  const [products,setProducts]=useState([])
  useEffect(()=>{
    const getProducts=async()=>{
  
      setProducts(await ProductService.getAllProducts());
    }
    getProducts();
  },[]);

   const deleteP=async(id)=>{
     await ProductService.deleteProduct(id);
      setProducts(products.filter((product)=>product.id!==id));
    }

    const addProduct=async(product)=>{
       const data=await ProductService.addProduct(product);
      
      setProducts([...products,data])
    }
    const updateProduct=async(id,prod)=>{
      const data=await ProductService.updateProduct(id,prod);
      const updProduct=products.map((product)=>{
      if(product.id===parseInt(id)){
     
        return data;
      }
      return product;
    });
 
    setProducts(updProduct);
     
      

     
   }
  
    
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          {/* <Route path="/" exact component={Products}></Route> */}
             <Route path="/" exact render={(props)=>(
               <>
               <Products products={products}  onDelete={deleteP} />
               </>
             )}></Route>
             <Route path="/product/:id" component={ProductInfo}></Route>
             <Route path="/add-or-update-product/:id" render={(props)=>(
               <AddOrUpdateProduct onAdd={addProduct} onUpdate={updateProduct}/>
             )} ></Route>
        </Switch>
        <Footer/>
      </Router>

    
    
    
    </>


  );
}

export default App;
