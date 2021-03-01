import {Link} from 'react-router-dom'

const Product = ({product,onDelete}) => {

    return (
        <tr key={product.id}>
        <td>{product.title}</td>
        <td>{product.price} $ </td>
        <td>
            <button onClick={()=>onDelete(product.id)} className="btn btn-danger">Delete</button>
             <Link to={`/product/${product.id}`} className="btn btn-info btn-a">Info</Link> 
             <Link to={`/add-or-update-product/${product.id}`} className="btn btn-dark btn-a">Update</Link>
             </td>
    </tr>
    )
}

export default Product
