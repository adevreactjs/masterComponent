'use client'
import ProductCart from "@/components/productCart/ProductCart"
import { Product } from "@/types/type"
import axios from "axios"
import { useEffect, useState } from "react"

const Product = ({params}: any) => {
  const [product, setProduct] = useState<Product | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Here we need to create a request using the slug parameter
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`https://online-store-1g8i.onrender.com/products/${params.slug}`)
        setProduct(data)
      } catch (error: any) {
        setError(error.message)
      }
    }

    fetchData()
  }, [])

  console.log(product)
  
  return (
    <div>
        {error && error}
        {product !== null && <ProductCart product={product} />} 
    </div>
  )
}

export default Product