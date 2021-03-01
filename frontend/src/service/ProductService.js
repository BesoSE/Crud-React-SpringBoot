const PRODUCT_API_BASE_URL="http://localhost:8082/api/";
class ProductService{
    getAllProducts=async()=>{
        const res=await fetch(PRODUCT_API_BASE_URL+'products');
        const data=await res.json();
        return data;
    }

    getProductById=async(id)=>{
        const res=await fetch(PRODUCT_API_BASE_URL+'product/'+id);
        const data=await res.json();
        return data;
    }

    addProduct=async(product)=>{
        const res=await fetch(PRODUCT_API_BASE_URL+'product',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(product)
        })
        return res.json();

     
    }

    updateProduct=async(id,product)=>{
        const res=await fetch(PRODUCT_API_BASE_URL+'product/'+id,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(product)
        })

        return res.json();
    }

    deleteProduct=async(id)=>{
        await fetch(PRODUCT_API_BASE_URL+'product/'+id,{
            method:'DELETE'
        });
    }


}

export default new ProductService()