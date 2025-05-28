import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/products";

export const getProducts = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    throw error;
  }
};

export const addProduct = async (producto) => {
  try {
    const response = await axios.post(BASE_URL, producto);
    return response.data;
  } catch (error) {
    console.error("Error al registrar el producto:", error);
    throw error;
  }
};

export const updateProduct = async (id, producto) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, producto);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar el producto:", error);
    throw error;
  }
};

export const removeProduct = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.error("Error al eliminar el producto:", error);
    throw error;
  }
};