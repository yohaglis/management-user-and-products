import axios from "axios";

export const getProducts = async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    throw error;
  }
}

export const addProduct = async (producto) => {
  try {
    const response = await axios.post("https://jsonplaceholder.typicode.com/users", producto);
    return response.data;
  } catch (error) {
    console.error("Error al crear el producto:", error);
    throw error;
  }
}

export const updateProduct = async (id, producto) => {
  try {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, producto);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar el producto:", error);
    throw error;
  }
}

export const removeProduct = async (id) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  } catch (error) {
    console.error("Error al eliminar el producto:", error);
    throw error;
  }
}