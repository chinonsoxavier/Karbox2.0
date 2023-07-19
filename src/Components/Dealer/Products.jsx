import styled from "styled-components";
import Product from "./Product";
const Container = styled.div`
  margin-top: 20px;
  background: white;
  box-sizing: border-box;
  padding: 0 14vh;
`;
const ProductsCon = styled.div``;
const Navbar = styled.div`
  padding: 20px 0;
`;
const NavbarText = styled.div`
  font-size: 18px;
  font-weight: 500;
`;
const Select = styled.select`
  border: none;
  outline: none;
`;
const Option = styled.option``;
function Products() {
  return (
    <Container>
      <Navbar className="flex aic jcsb w100">
        <NavbarText>Products</NavbarText>
        <Select>
          <Option>Newest</Option>
          <Option>Price:Low to High </Option>
          <Option>Price : High to Low</Option>
          <Option>Customer Rating</Option>
        </Select>
      </Navbar>
      <ProductsCon className="flex aic jcsb wrap">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ProductsCon>
    </Container>
  );
}

export default Products;
