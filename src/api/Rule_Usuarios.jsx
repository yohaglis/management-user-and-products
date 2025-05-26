import axios from "axios";

export const getUsers = async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    throw error;
  }
}
export const addUser = async (usuario) => {
  try {
    const response = await axios.post("https://jsonplaceholder.typicode.com/users", usuario);
    return response.data;
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    throw error;
  }
}
export const updateUser = async (id, usuario) => {
  try {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, usuario);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
    throw error;
  }
}
export const removeUser = async (id) => {
  try {
    const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar el usuario:", error);
    throw error;
  }
}