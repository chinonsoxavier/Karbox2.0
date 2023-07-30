import styled from "styled-components";
import Product3 from "./Product3";
import { lmobile, metablet, mmobile } from "../../responsive";

const Container = styled.div`
position:relative;
`;


const ProductsCon = styled.div`
  box-sizing: border-box;
  display: grid; 
  padding: 0 30px;
  box-sizing:border-box;
  grid-template-columns: 24% 24% 24% 24%;
  ${metablet({ gridTemplateColumns: "1fr 1fr 1fr" })}
  ${mmobile({ gridTemplateColumns: "47% 47%",padding:'0 6px',gridGap:'10px' })}
  grid-gap:16px;
`;


function Products({ backdrop }) {
  const array = [
    {
      id: 0,
    },
    {
      id: 0,
    },
    {
      id: 0,
    },
    {
      id: 0,
    },
    {
      id: 0,
    },
    {
      id: 0,
    },
    {
      id: 0,
    },
    {
      id: 0,
    },
    {
      id: 0,
    },
    {
      id: 0,
    },
    {
      id: 0,
    },
    {
      id: 0,
    },
    {
      id: 0,
    },
    {
      id: 0,
    },
    {
      id: 0,
    },
  ];

  const odd = array.length % 2 !== 0;

  if (array.length % 2 == 0) {
    console.log(array.length + "even");
  } else {
    console.log("odd");
  }

  return (
    <Container className="flex aic jcc w100 fdc">
      <ProductsCon backdrop={backdrop} className="flex aifs jcfs w100 bgw bsbb wrap">
        {array.map((item, i) => (
          <Product3 odd={odd} key={i} />
        ))}
      </ProductsCon>
    </Container>
  );
}

export default Products;
