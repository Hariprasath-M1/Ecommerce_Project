import { createContext , useContext , useEffect, useState } from "react"
import axios from "axios"

const ProductContext=createContext()

function ProductContextAPI({children}){
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData=async()=>{
        const response=await axios.get("https://dummyjson.com/products?limit=0")
        //console.log(response.data.products) 
        setProducts(response.data.products)
}
return(
    <ProductContext.Provider value={{products, setProducts}}>
        {children}
    </ProductContext.Provider>
    )
    }
    export const useProduct=()=>{
        return useContext(ProductContext)
    }
    export default ProductContextAPI