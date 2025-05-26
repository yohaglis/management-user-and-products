import { useReducer, useCallback} from "react";
import {
  getProducts,
  addProduct,
  updateProduct,
  removeProduct
} from "../api/Rule_Productos";
import { reducer, initialState } from "../context/reducer";

export function useProductos() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProductos =  useCallback(async () => {
    dispatch({ type: "PRODUCTOS_LOADING" });
    try {
      const data = await getProducts();
      dispatch({ type: "PRODUCTOS_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "PRODUCTOS_ERROR", payload: "Error al cargar los productos. Por favor intente mas tarde." });
    }
  }, []);

  const addProducto = async (producto) => {
    try {
      const data = await addProduct(producto);
      dispatch({ type: "PRODUCTO_ADD_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "PRODUCTO_ADD_ERROR", payload: "Error al agregar el producto. Por favor intente mas tarde." });
    }
  };

  const updateProducto = async (id, producto) => {
    try {
      const data = await updateProduct(id, producto);
      dispatch({ type: "PRODUCTO_UPDATE_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "PRODUCTO_UPDATE_ERROR", payload: "Error al actualizar el producto. Por favor intente mas tarde." });
    }
  };

  const removeProducto = async (id) => {
    try {
      await removeProduct(id);
      dispatch({ type: "PRODUCTO_REMOVE_SUCCESS", payload: id });
    } catch (error) {
      dispatch({ type: "PRODUCTO_REMOVE_ERROR", payload: "Error al eliminar el producto. Por favor intente mas tarde." });
    }
  };

  return {
    ...state,
    getProductos,
    addProducto,
    updateProducto,
    removeProducto,
  };
}