import styled from "styled-components";
import { CustomerBreakpoint } from "../../responsive";
import { useState } from "react";

const SortCon = styled.div`
  // height: 100%;
  position: absolute;
  top: 0;
  width: 100%;

  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const SortWrapper = styled.div`
  background: white;
  width: 100%;
  box-sizing: border-box;
`;
const SortsTextCon = styled.div`
  padding: 6px 16px;

  &:hover {
    background: whitesmoke;
  }
`;
const SortsText = styled.span`
  ${CustomerBreakpoint({
    fontSize: "14px",
  })};
`;
const Sort = () => {
  const data = [
    [
      {
        id: 0,
        text: "New listings",
      },
      {
        id: 0,
        text: "Lowest price",
      },
      {
        id: 0,
        text: "Highest price",
      },
      {
        id: 0,
        text: "Lowest mileage",
      },
      {
        id: 0,
        text: "Newest year",
      },
      {
        id: 0,
        text: "Oldest year",
      },
    ],
  ];
  const [sort, setSort] = useState("Sort");
  const ShowFilter = (sort) => {
    setSort(sort);
  };
  return (
    <SortCon className="flex aife jcfe fdc">
      <SortWrapper>
        {data[0].map((item) => (
          <SortsTextCon onClick={() => ShowFilter(item.text)}>
            <SortsText>{item.text}</SortsText>
          </SortsTextCon>
        ))}
      </SortWrapper>
    </SortCon>
  );
};

export default Sort;
