import { useMemo } from "react"

export const UsePagination = ({
    totalCount,
    PageSize,
    siblingCount = 1,
    currentPage
})=>{
    const paginationRange = useMemo(() => {
        const totalPageCount = Math.ceil(totalCount/PageSize);

        const totalPageNBumbers = siblingCount + 5;

        if(totalPageNBumbers>=totalPageCount){
            return Range(1,totalPageCount)
        };
        const leftSiblingIndex = Math.max(currentPage-siblingCount,1);
        const rightiblingIndex = Math.min(currentPage+siblingCount,totalPageCount);
    }, []);
    return paginationRange;
}




import {
  ChevronLeft,
  ChevronRight,
  FavoriteBorder,
  FileUploadOutlined,
} from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { mmobile, mobile, tablet } from "../../responsive";
const Container = styled.div`
  position: relative;
`;
const Wrapper = styled.div`
  position: relative;
`;
const ImageSliderCon = styled.div`
  box-sizing: border-box;
  padding-right: 10px;
  ${mmobile({ padding: "0" })}
`;
const ImageSlider = styled.div``;
const ImageSliderImg = styled.img`
  max-width: 100%;
`;
const ImageSliderPagWrapper = styled.div`
  // max-width:600px;
  // max-width: 420px;
  // overflow-x:hidden;
  // transform:translateX(-150px);
`;
const ImageSliderPagCon = styled.div`
  // transform:translateX(-100px);
  ${mmobile({ display: "none" })}
`;
const ImageSliderPag = styled.div`
  // width:100%/4;
  min-width: 105px;
  box-sizing: border-box;
  padding: 5px;
`;
const ImageSliderImgPag = styled.img`
  width: 100%;
  position: relative;
  z-index: 4;
`;

const ButtonCon = styled.div`
  position: absolute;
  z-index: 100;
  width: 100%;
`;
const Button = styled.div`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  background: #eee;
  opacity: 0.8;
  transition: 0.2s linear;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);

  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }
`;

const MobileControls = styled.div`
  position: absolute;
  display: none;
  padding: 5px 0;
  ${mmobile({ display: "flex" })}
`;
const MobileControlsLeft = styled.div``;
const MobileControlsRight = styled.div``;
const MobileControlsIcons = styled.div`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  cursor: pointer;
  font-size: 10px;
`;
const ProductInfoCon = styled.div`
  display: none;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 0 1vh;
  // margin-top: 50px;
  ${mmobile({ display: "flex" })}
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;
const ProductInfoTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductName = styled.span`
  white-space: nowrap;
  font-size: 42px;
  font-weight: 600;
  ${tablet({ fontSize: "32px" })}
  ${mmobile({ fontSize: "25px" })}
`;
const ProductInfoBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0;
`;
const ListingId = styled.span`
  white-space: nowrap;
  color: grey;
  font-weight: 300;
  ${tablet({ fontSize: "13px" })}
  ${mmobile({ fontSize: "11px" })}
`;
const HR = styled.div`
  border-right: 2px solid gray;
  height: 15px;
  width: 2px;
  margin: 8px;
`;
const ItemId = styled.span`
  white-space: nowrap;
  color: grey;
  font-weight: 300;
  ${tablet({ fontSize: "13px" })};
  ${mmobile({ fontSize: "11px" })};
`;

const PagNum = styled.div`
  position: absolute;
  z-index: 900;
  color: white;
  box-sizing: border-box;
  padding: 1vh;
`;
const PagNumTextCon = styled.div``;
const PagNumText = styled.span`
  // font-size:100px;
`;

function Gallery() {
  const images = [
    {
      id: 0,
      img: require("../../images/lexus-homepage-tile-750x750-LEX-GXG-MY22-0073.jpeg"),
    },
    {
      id: 0,
      img: require("../../images/lexus-homepage-tile-750x750-LEX-GXG-MY22-0073.jpeg"),
    },
    {
      id: 0,
      img: require("../../images/Lexus-LCert_WSE-Homepage-Tile-750x750.jpeg"),
    },
    {
      id: 0,
      img: require("../../images/Lexus-LCert_WSE-Homepage-Tile-750x750.jpeg"),
    },
    {
      id: 0,
      img: require("../../images/Lexus-LCert_WSE-Homepage-Tile-750x750.jpeg"),
    },
    {
      id: 0,
      img: require("../../images/Lexus-LCert_WSE-Homepage-Tile-750x750.jpeg"),
    },
    {
      id: 0,
      img: require("../../images/Lexus-LCert_WSE-Homepage-Tile-750x750.jpeg"),
    },
    {
      id: 0,
      img: require("../../images/Lexus-LCert_WSE-Homepage-Tile-750x750.jpeg"),
    },
    {
      id: 0,
      img: require("../../images/Lexus-LCert_WSE-Homepage-Tile-750x750.jpeg"),
    },
    {
      id: 0,
      img: require("../../images/lexus-homepage-tile-750x750-LEX-GXG-MY22-0073.jpeg"),
    },
  ];
  const ImgPagRef = useRef();
  const ImgPagConRef = useRef();
  const ImgPagWrapRef = useRef();
  const CountRef = useRef(0);
  const slideLength = images.length + 1;
  const CurrentSlide = 1;

  const handleClick = (slide) => {
    CurrentSlide = slide + 1;
  };

  const handleClickLeft = (direction) => {
    if (!(CountRef.current - 1 < 0)) {
      ImgPagConRef.current.style.transform = `translateX(-${
        105 * (CountRef.current - 1)
      }px)`;
      CountRef.current--;
    }
  };
  const handleClickRight = (direction) => {
    if (CountRef.current + 1 <= images.length - 4) {
      ImgPagConRef.current.style.transform = `translateX(-${
        105 * (CountRef.current + 1)
      }px)`;
      CountRef.current++;
    }
  };

  return (
    <Container>
      <Wrapper className="flex aife jcsb fdc w100 ">
        <MobileControls className=" aifs jcsb w100">
          <MobileControlsLeft className="flex aic jcsb w100">
            <MobileControlsIcons>
              <ChevronLeft sx={{ fontSize: "19px" }} />
            </MobileControlsIcons>
          </MobileControlsLeft>
          <MobileControlsRight className="flex aic jcfe w100">
            <MobileControlsIcons>
              <FileUploadOutlined sx={{ fontSize: "19px" }} />
            </MobileControlsIcons>
            <MobileControlsIcons>
              <FavoriteBorder sx={{ fontSize: "19px" }} />
            </MobileControlsIcons>
          </MobileControlsRight>
        </MobileControls>

        <ImageSliderCon className="flex aife jcfs">
          {/* <PagNum>
            <PagNumTextCon>
              <PagNumText>{CurrentSlide}</PagNumText>/
              <PagNumText>{slideLength}</PagNumText>
            </PagNumTextCon>
          </PagNum> */}
          <ImageSlider className="flex aic jcc">
            <ImageSliderImg
              src={require("../../images/Lexus-LCert_WSE-Homepage-Tile-750x750.jpeg")}
              alt=""
            />
          </ImageSlider>
        </ImageSliderCon>
        <ImageSliderPagCon ref={ImgPagWrapRef} className="flex aic jcc ">
          <ButtonCon className="flex aic jcsb w100">
            <Button onClick={handleClickLeft} className="flex aic jcc">
              <ChevronLeft />
            </Button>
            <Button onClick={handleClickRight} className="flex aic jcc">
              <ChevronRight />
            </Button>
          </ButtonCon>
          <div style={{ maxWidth: "420px", overflowX: "hidden" }}>
            <ImageSliderPagWrapper
              className="flex aifs jcfs"
              ref={ImgPagConRef}
            >
              {images.map((item, i) => (
                <ImageSliderPag
                  onClick={() => handleClick(i)}
                  ref={ImgPagRef}
                  className=""
                  key={i}
                >
                  <ImageSliderImgPag src={item.img} alt="" />
                </ImageSliderPag>
              ))}
            </ImageSliderPagWrapper>
          </div>
        </ImageSliderPagCon>
        <ProductInfoCon>
          {/* <ProductInfoLeftCon> */}
          <ProductInfo>
            <ProductInfoTop>
              <ProductName>The Breeze Zodiac IX</ProductName>
            </ProductInfoTop>

            <ProductInfoBottom>
              <ListingId>Listing ID: 14076242</ListingId>
              <HR />
              <ItemId>Item #: 7300-335686</ItemId>
            </ProductInfoBottom>
          </ProductInfo>
        </ProductInfoCon>
      </Wrapper>
    </Container>
  );
}

export default Gallery;
