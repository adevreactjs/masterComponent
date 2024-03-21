'use client'
import ProductCart from "@/components/productCart/ProductCart"
import { fetchProductBySlug } from "@/services/productsApi"
import { Product } from "@/types/type"
import axios from "axios"
import { useEffect, useState } from "react"

const Product = ({params}: any) => {
  const [product, setProduct] = useState<Product | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchProductBySlug(params.slug)
        .then((data) => setProduct(data)).catch((error) => setError(error.message))
  }, [params.slug])
  
  return (
    <div>
        {error && error}
        {product !== null && <ProductCart product={product} />} 
    </div>
  )
}

export default Product