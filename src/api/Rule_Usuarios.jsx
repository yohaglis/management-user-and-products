import axios from "axios";

export const getUsuarios = async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    throw error;
  }
}
export const createUsuario = async (usuario) => {
  try {
    const response = await axios.post("https://jsonplaceholder.typicode.com/users", usuario);
    return response.data;
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    throw error;
  }
}
export const updateUsuario = async (id, usuario) => {
  try {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, usuario);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
    throw error;
  }
}
export const deleteUsuario = async (id) => {
  try {
    const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar el usuario:", error);
    throw error;
  }
}
export const getUsuarioById = async (id) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el usuario por ID:", error);
    throw error;
  }
}
