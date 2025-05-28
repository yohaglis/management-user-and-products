/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react";
import CardProduct from "../Productos/Components/CardProduct";
import { useProductos } from "../../../hooks/useProductos";
import ModalProduct from "../Productos/Components/ModalProduct";
import ModalError from "../../ModalError";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import styles from "./styles.module.scss";
import { Typography, Button } from "@mui/material";

function Productos() {
  const {
    getProductos,
    removeProducto,
    addProducto,
    updateProducto,
    productos,
    productosLoading,
    productosError,
    productoAddError,
    productoUpdateError,
    productoRemoveError,
  } = useProductos();
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState<"Agregar" | "Modificar" | "">("");
  const [errorOpen, setErrorOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOnClickAdd = () => {
    setSelectedProduct(null);
    setAction("Agregar");
    setOpen(true);
  };

  const handleOnDelete = async (id) => {
    await removeProducto(id);
  };

  const handleOnEdit = async (producto) => {
    setSelectedProduct(producto);
    setOpen(true);
    setAction("Modificar");
  };

  const handleCloseModal = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  const handleCloseErrorModal = () => {
    setErrorOpen(false);
    setSelectedProduct(null);
  };

  useEffect(() => {
    getProductos();
  }, [getProductos]);

  useEffect(() => {
    setErrorOpen(!!productoAddError || !!productoUpdateError || !!productoRemoveError);
  }, [productoAddError, productoUpdateError, productoRemoveError]);

  return (
    <div>
      {productosLoading && (
        <Typography variant="body1" component="p" gutterBottom>
          Cargando productos...
        </Typography>
      )}
      {productosError && (
        <div style={{ color: "red" }}>
          {" "}
          <ReportProblemIcon color="error" sx={{ marginRight: 1 }} />
          {productosError}
        </div>
      )}
      {!productosLoading && !productosError && productos.length === 0 && (
        <Typography variant="body1" component="p" gutterBottom>
          No hay productos disponibles.
        </Typography>
      )}
      {!productosLoading && productos.length > 0 && (
        <>
          <div className={styles.header}>
            <Typography variant="h2" component="h2" gutterBottom>
              Catalogo de Productos
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleOnClickAdd}
            >
              Agregar Producto
            </Button>
          </div>
          <Typography variant="body1" component="p" gutterBottom>
            Total de productos: {productos.length}
          </Typography>
          <div className={styles.grid}>
            {productos.map((producto) => (
              <CardProduct
                key={producto.id}
                producto={producto}
                onDelete={handleOnDelete}
                onEdit={handleOnEdit}
              />
            ))}
          </div>
        </>
      )}
      <ModalProduct
        open={open}
        onClose={handleCloseModal}
        action={action}
        producto={selectedProduct}
        addProducto={addProducto}
        updateProducto={updateProducto}
      />
      <ModalError
        open={errorOpen}
        onClose={handleCloseErrorModal}
        message={productoAddError || productoUpdateError || productoRemoveError}
      />
    </div>
  );
}

export default Productos;
