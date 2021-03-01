import { Link } from "react-router-dom"

import Product from "./Product"


const Products = ({products,onDelete}) => {
   
    return (
        <>
      <h2 className="text-center">Products List</h2>
     
        <div className="container">
        <Link to="/add-or-update-product/_add" className="btn btn-primary"  >Add product</Link>
      
            <div className="row">
                <table className="table table-striped">
                    <thead>
                       <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product)=>
                          <Product key={product.id} product={product} onDelete={onDelete} />
                        )}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default Products
