import styled from "styled-components";
import CreateProduct from "./CreateProduct";
import EditProduct from "./EditProduct";
import ProductList from "./ProductList";

const Container = styled.div``;
const Wrapper = styled.div``;

function Product({ route }) {
  return (
    <Container>
      <Wrapper>
        {route === "product-list" && <ProductList route="product-list" />}
        {route === "edit-product" && <EditProduct route="edit-products" />}
        {route === "create-product" && <CreateProduct route="create-product" />}
      </Wrapper>
    </Container>
  );
}

export default Product;
