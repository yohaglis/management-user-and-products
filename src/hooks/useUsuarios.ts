import { useReducer, useCallback} from "react";
import {
  getUsers,
  addUser,
  updateUser,
  removeUser} from "../api/Rule_Usuarios";
import { reducer, initialState } from "../context/reducer";

export type Usuario = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string; 
};

export function useUsuarios() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getUsuarios =  useCallback(() => {
    dispatch({ type: "USUARIOS_LOADING" });
    getUsers()
      .then((data) => {
        dispatch({ type: "USUARIOS_SUCCESS", payload: data });
      })
      .catch(() => {
        dispatch({ type: "USUARIOS_ERROR", payload: "Error al cargar los usuarios. Por favor intente mas tarde." });
      });
  }, []);

  const addUsuario = useCallback((usuario: Usuario) => {
    dispatch({ type: "USUARIO_ADD_LOADING" });
    addUser(usuario)
      .then((data) => {
        dispatch({ type: "USUARIO_ADD_SUCCESS", payload: data });
      })
      .catch(() => {
        dispatch({ type: "USUARIO_ADD_ERROR", payload: "Error al agregar el usuario. Por favor intente mas tarde." });
      });
  }, []);

  const updateUsuario = useCallback((id: number, usuario: Usuario) => {
    dispatch({ type: "USUARIO_UPDATE_LOADING" });
    updateUser(id, usuario)
      .then((data) => {
        dispatch({ type: "USUARIO_UPDATE_SUCCESS", payload: data });
      })
      .catch(() => {
        dispatch({ type: "USUARIO_UPDATE_ERROR", payload: "Error al actualizar el usuario. Por favor intente mas tarde." });
      });
  }, []);

  const removeUsuario = useCallback((id: number) => {
    dispatch({ type: "USUARIO_REMOVE_LOADING" });
    removeUser(id)
      .then(() => {
        dispatch({ type: "USUARIO_REMOVE_SUCCESS", payload: id });
      })
      .catch(() => {
        dispatch({ type: "USUARIO_REMOVE_ERROR", payload: "Error al eliminar el usuario. Por favor intente mas tarde." });
      });
  }, []);

  return {
    ...state,
    getUsuarios,
    addUsuario,
    updateUsuario,
    removeUsuario
  };
}