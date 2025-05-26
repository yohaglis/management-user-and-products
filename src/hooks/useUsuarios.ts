import { useReducer, useCallback} from "react";
import {
  getUsers,
  addUser,
  updateUser,
  removeUser} from "../api/Rule_Usuarios";
import { reducer, initialState } from "../context/reducer";

export function useUsuarios() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getUsuarios =  useCallback(async () => {
    dispatch({ type: "USUARIOS_LOADING" });
    try {
      const data = await getUsers();
      dispatch({ type: "USUARIOS_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "USUARIOS_ERROR", payload: "Error al cargar los usuarios. Por favor intente mas tarde." });
    }
  }, []);

  const addUsuario = async (usuario) => {
    try {
      const data = await addUser(usuario);
      dispatch({ type: "USUARIO_ADD_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "USUARIO_ADD_ERROR", payload: "Error al agregar el usuario. Por favor intente mas tarde." });
    }
  };

  const updateUsuario = async (id, usuario) => {
    try {
      const data = await updateUser(id, usuario);
      dispatch({ type: "USUARIO_UPDATE_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "USUARIO_UPDATE_ERROR", payload: "Error al actualizar el usuario. Por favor intente mas tarde." });
    }
  };

  const removeUsuario = async (id) => {
    try {
      await removeUser(id);
      dispatch({ type: "USUARIO_REMOVE_SUCCESS", payload: id });
    } catch (error) {
      dispatch({ type: "USUARIO_REMOVE_ERROR", payload: "Error al eliminar el usuario. Por favor intente mas tarde." });
    }
  };

  return {
    ...state,
    getUsuarios,
    addUsuario,
    updateUsuario,
    removeUsuario
  };
}