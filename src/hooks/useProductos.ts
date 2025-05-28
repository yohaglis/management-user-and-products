import { useReducer, useCallback} from "react";
import {
  getProducts,
  addProduct,
  updateProduct,
  removeProduct
} from "../api/Rule_Productos";
import { reducer, initialState } from "../context/reducer";

export type Producto = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export function useProductos() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const getProductos = useCallback(() => {
    dispatch({ type: "PRODUCTOS_LOADING" });
    getProducts()
      .then((data) => {
        dispatch({ type: "PRODUCTOS_SUCCESS", payload: data });
      })
      .catch(() => {
        dispatch({ type: "PRODUCTOS_ERROR", payload: "Error al cargar los productos. Por favor intente mas tarde." });
      });
  }, []);

  const addProducto = useCallback((producto: Producto) => {
    dispatch({ type: "PRODUCTO_ADD_LOADING" });
    addProduct(producto)
      .then((data) => {
        dispatch({ type: "PRODUCTO_ADD_SUCCESS", payload: data });
      })
      .catch(() => {
        dispatch({ type: "PRODUCTO_ADD_ERROR", payload: "Error al agregar el producto. Por favor intente mas tarde." });
      });
  }, []);

  const updateProducto = useCallback((id: number, producto: Producto) => {
      updateProduct(id, producto)
      .then((data) => {
        dispatch({ type: "PRODUCTO_UPDATE_SUCCESS", payload: data });
      })
      .catch(() => {
        dispatch({ type: "PRODUCTO_UPDATE_ERROR", payload: "Error al actualizar el producto. Por favor intente mas tarde." });
      });
  }, []);

  const removeProducto = useCallback((id: number) => {
    removeProduct(id)
      .then(() => {
        dispatch({ type: "PRODUCTO_REMOVE_SUCCESS", payload: id });
      })
      .catch(() => {
        dispatch({ type: "PRODUCTO_REMOVE_ERROR", payload: "Error al eliminar el producto. Por favor intente mas tarde." });
      });
  }, []);

  return {
    ...state,
    getProductos,
    addProducto,
    updateProducto,
    removeProducto,
  };
}