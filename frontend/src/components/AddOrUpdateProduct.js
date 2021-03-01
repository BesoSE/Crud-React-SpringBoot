import { useEffect } from "react";
import { useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import ProductService from "../service/ProductService";

const AddOrUpdateProduct = ({onAdd,onUpdate}) => {

    const history=useHistory();
    const {id}=useParams();
    const [title,setTitle]=useState('')
    const [description,setDescription]=useState('')
    const [price,setPrice]=useState('')

    useEffect(()=>{
        const getProduct=async()=>{
            const data=await ProductService.getProductById(id);
            setTitle(data.title);
            setDescription(data.description);
            setPrice(data.price);
        }
        if(id!=='_add'){
        getProduct();
        }
    },[])

    const onSubmit=(e)=>{
        e.preventDefault();
        if(!title){
            document.getElementById("title").innerHTML="";
          document.getElementById("title").append("Please enter name of product");
            return;
        }else if(!description){
            document.getElementById("desc").innerHTML="";
            document.getElementById("desc").append("Please enter description");
            return;
        }else if(!price){
            document.getElementById("price").innerHTML="";
            document.getElementById("price").append("Please enter price");
            return;
        }
        if(id==='_add'){
            onAdd({title,description,price}).then(res=>history.push("/"));
        }else{
            onUpdate(id,{title,description,price}).then(res=>history.push("/"));
        }
       
        document.getElementById("title").innerHTML="";
        document.getElementById("desc").innerHTML="";
        document.getElementById("price").innerHTML="";
        setTitle('');
        setDescription('');
        setPrice('')
    }


    return (
      <div className="container">
          <h1>{id==='_add' ? 'Add product' : 'Update product' }</h1>
           <form className="add-form" onSubmit={onSubmit}>
               
               <div className="form-group">
                   <label htmlFor="" >Name</label>
                   <input type="text" className="form-control"  placeholder="Name" value={title} onChange={(e)=>setTitle(e.target.value)} />
                    <span id="title"/>
               </div>
               <div className="form-group">
                   <label htmlFor="">Description</label>
                  <textarea placeholder="Description" className="form-control"  value={description} onChange={(e)=>setDescription(e.target.value)}/>
                  <span id="desc"/>
               </div>
               <div className="form-group">
                   <label htmlFor="">Price</label>
                   <input type="Number"  placeholder="Price" className="form-control"  value={price} onChange={(e)=>setPrice(e.target.value)} />
                   <span id="price"/>
               </div>
               <input type="submit" value={id==='_add' ? "Save product" : 'Update product'} className="btn btn-success"/>
           </form>
           </div>
    )
}

export default AddOrUpdateProduct
