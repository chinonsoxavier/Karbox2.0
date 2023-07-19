import { SyncAlt } from "@mui/icons-material";
import styled from "styled-components";
import ProductCard2 from "../Inventory/ProductCard2";
const Container = styled.div``;
const Wrapper = styled.div``;
const Header = styled.div`
   padding:8px 0;
`;
const HeaderText = styled.span`
  font-weight: 500;
  font-size: 20px;
  color: #949498;
`;

const ProductsCon = styled.div``
const SelectCon = styled.select`color:black;`
const SelectText = styled.span`color:black;`
const Select = styled.select``
const Option = styled.option``
function VendorProducts() {
  return (
    <Container>
      <Wrapper>
        <Header >
          <HeaderText>Chinonso</HeaderText>
        </Header>
        {/* <SelectCon>
        <SelectText>Sort by: <SyncAlt sx={{transform:'rotate(90)'}} /> </SelectText>
        <Select>
          <Option>Recommended</Option>
          <Option>Newest first</Option>
          <Option>Lowest price first</Option>
          <Option>Highest price first</Option>
        </Select>
        </SelectCon> */}
        <ProductsCon className='flex aic jcc wrap w100' >
          <ProductCard2/>
          <ProductCard2/>
          <ProductCard2/>
          <ProductCard2/>
          <ProductCard2/>
          <ProductCard2/>
          <ProductCard2/>
          <ProductCard2/>
          <ProductCard2/>
          <ProductCard2/>
          <ProductCard2/>
          <ProductCard2/>
          <ProductCard2/>
          <ProductCard2/>
          <ProductCard2/>
          <ProductCard2/>
          <ProductCard2/>
          <ProductCard2/>
          <ProductCard2/>
          <ProductCard2/>
          <ProductCard2/>
          <ProductCard2/>
          <ProductCard2/>
          <ProductCard2/>
          <ProductCard2/>
        </ProductsCon>
      </Wrapper>
    </Container>
  );
}

export default VendorProducts;
