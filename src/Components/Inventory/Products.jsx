import styled from "styled-components";
import Product3 from "./Product3";

const Container = styled.div`
position:relative;
`;


const ProductsCon = styled.div`
  padding: 0 1px;
`;


function Products() {
  
  return (
    <Container className="flex aic jcc w100 fdc">  
      <ProductsCon className="flex aifs jcsa w100 bgw bsbb wrap">
        <Product3 />
        <Product3 />
        <Product3 />
        <Product3 />
        <Product3 />
        <Product3 />
        <Product3 />
        <Product3 />
        <Product3 />
        <Product3 />
        <Product3 />
      </ProductsCon>
    </Container>
  );
}

export default Products;
