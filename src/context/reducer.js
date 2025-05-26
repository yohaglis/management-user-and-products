export const initialState = {
  usuarios: [],
  usuariosLoading: false, 
  usuariosError: null,
  usuarioAddError: null,
  usuarioUpdateError: null,
  usuarioRemoveError: null,
  productos: [],
  productosLoading: false,
  productosError: null,
  productoAddError: null,
  productoUpdateError: null,
  productoRemoveError: null,
};

export function reducer(state, action) {
  switch (action.type) {
    case "USUARIOS_LOADING":
      return { ...state, usuariosLoading: true, usuariosError: null };
    case "USUARIOS_SUCCESS":
      return { ...state, usuariosLoading: false, usuarios: action.payload };
    case "USUARIOS_ERROR":
      return { ...state, usuariosLoading: false, usuariosError: action.payload };
    case "USUARIO_ADD_SUCCESS":
      return { ...state, usuarios: [...state.usuarios, action.payload] };
    case "USUARIO_ADD_ERROR":
      return { ...state, usuarioAddError: action.payload };
    case "USUARIO_UPDATE_SUCCESS":
      return {
        ...state,
        usuarios: state.usuarios.map(u =>
          u.id === action.payload.id ? action.payload : u
        ),
      };
    case "USUARIO_UPDATE_ERROR":
      return { ...state, usuarioUpdateError: action.payload };
    case "USUARIO_REMOVE_SUCCESS":      
      return {
        ...state,
        usuarios: state.usuarios.filter(u => u.id !== action.payload)
      };
    case "USUARIO_REMOVE_ERROR":
      return { ...state, usuarioRemoveError: action.payload };
    case "PRODUCTOS_LOADING":
      return { ...state, productosLoading: true, productosError: null };
    case "PRODUCTOS_SUCCESS":
      return { ...state, productosLoading: false, productos: action.payload };
    case "PRODUCTOS_ERROR":
      return { ...state, productosLoading: false, productosError: action.payload };
    case "PRODUCTO_ADD_SUCCESS":
      return { ...state, productos: [...state.productos, action.payload] };
    case "PRODUCTO_ADD_ERROR":
      return { ...state, productoAddError: action.payload };
    case "PRODUCTO_UPDATE_SUCCESS":
      return {
        ...state,
        productos: state.productos.map(u =>
          u.id === action.payload.id ? action.payload : u
        ),
      };
    case "PRODUCTO_UPDATE_ERROR":
      return { ...state, productoUpdateError: action.payload };
    case "PRODUCTO_REMOVE_SUCCESS":
      return {
        ...state,
        productos: state.productos.filter(u => u.id !== action.payload)
      };
    case "PRODUCTO_REMOVE_ERROR":
      return { ...state, productoRemoveError: action.payload };
    default:
      return state;
  }
}