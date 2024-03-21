import axios from "axios";

// export const getProducts = async (page: number = 1, limit: number = 10) => {
//   const response = await axios.get(`/products`, {
//     params: { page, limit },
//   });
//   return response.data;
// };

export const getProducts = async () => {
    const response = await axios.get(`/products`);
    return response.data;
};

export const fetchProductsByCategory = async (category: string) => {
    const response = await axios.get(`/products/filter/?category=${category}`);
    return response.data;
};


export const fetchProductBySlug = async (slug: string) => {
    const response = await axios.get(`/products/${slug}`);
    return response.data;
};
