import styled from "styled-components";
import { Link } from "react-router-dom";
import HomeVid from "../../images/MYCO_RZ_04_020723_REV_2.mp4";
import { tablet,mobile,lmobile, smobile, mmobile } from "../../responsive";

const Container = styled.div`
  color: white;
`;
const Wrapper = styled.div``;
const Header = styled.div``;
const HeaderText = styled.p`
  font-size: 24px;
  font-weight: 400;
  ${mobile({ whiteSpace: "nowrap", fontSize: "12px" })}
`;
const HeaderActive = styled.div`
  background-color: orangered;
  height: 2px;
  width: 20px;
  ${tablet({ margin: "0" })};
`;

const BrandMenuText = styled.p`
  text-align: center;
  color: grey;
  font-size: 15px;
  width: 70%;
  ${tablet({ fontSize: "11px" })}
  ${mobile({ fontSize: "7px" })}
`;
const BrandsCon = styled.div`
  width: 100%;
  margin: 50px 0;
  ${tablet({ margin:'10px 0' })};
  display:none;
`;
const Brands = styled.div`
  width: 80%;
`;
const BrandsImage = styled.img`
  width: 170px;
  ${tablet({ minWidth:'100px' })};
  ${lmobile({ minWidth:'75px' })};
  ${mmobile({ minWidth:'50px' })};
  ${mobile({ minWidth:'45px' })};
  ${smobile({ minWidth:'35px' })};
`;
const Advert = styled.div`
  width: 100%;
  margin-top:20px;
`;
const Video = styled.video`
  width: 100%;
`;

function BrandMenu() {
  return (
    <Container>
      <Wrapper>
        <Header className="flex aic jcc fdc">
          <HeaderText className="s ">Get all Luxurios Cars</HeaderText>
          <HeaderActive />
          <BrandMenuText className="flex aic jcc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A deleniti
            eaque iste cupiditate fugit reiciendis dicta rem unde quaerat
            aliquid, molestias molestiae officia! Sit, facere odit! Doloribus
            quo commodi reiciendis ut. Consequatur, assumenda omnis voluptates
            nemo id iusto laudantium vero, animi nobis fugiat neque earum!
            Tenetur magnam esse voluptas corporis.
          </BrandMenuText>
        </Header>
        <BrandsCon className="flex aic  jcc">
          <Brands className="flex aic jcc ">
            <Link to="/mercedes-benz" className="link BrandMenuLink">
              <BrandsImage src={require("../../images/Jeep.png")} alt="" />
            </Link>
            <Link to="/mercedes-benz" className="link BrandMenuLink">
              <BrandsImage
                src={require("../../images/Mercedes-Benz.png")}
                alt=""
              />
            </Link>
            <Link to="/mercedes-benz" className="link BrandMenuLink">
              <BrandsImage src={require("../../images/Lexus.png")} alt="" />
            </Link>
            <Link to="/mercedes-benz" className="link BrandMenuLink">
              <BrandsImage src={require("../../images/Porsche.png")} alt="" />
            </Link>
            <Link to="/mercedes-benz" className="link BrandMenuLink">
              <BrandsImage src={require("../../images/Dodge.png")} alt="" />
            </Link>
          </Brands>
        </BrandsCon>
        <Advert>
          <Video src={HomeVid} autoPlay={false} loop controls />
        </Advert>
      </Wrapper>
    </Container>
  );
}

export default BrandMenu;
