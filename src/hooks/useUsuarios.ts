import { useReducer, useCallback} from "react";
import {
  getUsuarios,
  createUsuario,
  updateUsuario,
  deleteUsuario,
  getUsuarioById
} from "../api/Rule_Usuarios";
import { usuariosReducer, initialState } from "../context/usuariosReducer";

export function useUsuarios() {
  const [state, dispatch] = useReducer(usuariosReducer, initialState);

  const fetchUsuarios =  useCallback(async () => {
    dispatch({ type: "FETCH_START" });
    try {
      const data = await getUsuarios();
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }
  }, []);

  const addUsuario = async (usuario) => {
    try {
      const data = await createUsuario(usuario);
      dispatch({ type: "CREATE_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }
  };

  const editUsuario = async (id, usuario) => {
    try {
      const data = await updateUsuario(id, usuario);
      dispatch({ type: "UPDATE_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }
  };

  const removeUsuario = async (id) => {
    try {
      await deleteUsuario(id);
      dispatch({ type: "DELETE_SUCCESS", payload: id });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }
  };

  const fetchUsuarioById = async (id) => {
    try {
      const data = await getUsuarioById(id);
      dispatch({ type: "GET_BY_ID_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }
  };

  return {
    ...state,
    fetchUsuarios,
    addUsuario,
    editUsuario,
    removeUsuario,
    fetchUsuarioById,
  };
}