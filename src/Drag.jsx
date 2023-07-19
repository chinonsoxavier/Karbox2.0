import React from "react";
import styled from "styled-components";

const Drag = () => {
  let offsetX, offsetY;
  const moveWindow = (event) => {
    const eventTarget = event.target;
    eventTarget.style.left = `${event.pageX - offsetX}px`;
    eventTarget.style.top = `${event.pageY - offsetY}px`;
  };
  const addWindow = (event) => {
    const eventTarget = event.target;
    offsetX = event.clientX - eventTarget.getBoundingClientRect().left;
    offsetY = event.clientY - eventTarget.getBoundingClientRect().top;
    eventTarget.addEventListener("mousemove", moveWindow);
  };
  const removeWindow = (event) => {
    const eventTarget = event.target;
    eventTarget.removeEventListener("mousemove", moveWindow);
  };
  const StyledWrapper = styled.div`
    width: 200px;
    height: 120px;
    position: absolute;
    top: 40px;
    left: 227px;
    background-color: rgb(0, 0, 0, 0.5);
    cursor: pointer;
    z-index: 100;
    padding-top: 20px;
  `;
  return (
    <StyledWrapper onMouseDown={addWindow} onMouseUp={removeWindow}>
      <div
        style={{
          color: "white",
          backgroundColor: "red",
          width: 200,
          height: 70,
          paddingTop: 30,
          textAlign: "center",
          fontWeight: "bolder",
        }}
      >
        recompile.in
      </div>
    </StyledWrapper>
  );
};

export default Drag;
