import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import useLocalstorage from "../Hooks/useLocalstorage";

const productContext = createContext()

export const ProductProvider = ({ children }) => {

    const [Products, setProducts] = useLocalstorage("products", [])
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
        isLoading,
        GetProducts,
    }

    return (
        <productContext.Provider value={data}>
            {children}
        </productContext.Provider>
    )
}

export const useProducts = () => useContext(productContext)