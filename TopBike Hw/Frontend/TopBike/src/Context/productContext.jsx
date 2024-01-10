import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const productContext = createContext()

export const ProductProvider = ({ children }) => {

    const [Products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    async function GetProducts() {
        try {
            const response = await axios("http://localhost:5000/products").then(res=>res.data)
            console.log(response);
            setProducts(response)
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
      GetProducts()
    }, [])
    

    const data = {
        Products,
        setProducts,
        isLoading
    }

    return (
        <productContext.Provider value={data}>
            {children}
        </productContext.Provider>
    )
}

export const useProducts = () => useContext(productContext)