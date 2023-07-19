import { SmartToyOutlined } from "@mui/icons-material";
import styled from "styled-components";
const Container = styled.div`
  position: absolute;
  bottom:0;
  right:100px;
  padding:2px 16px ;
  background:orangered;
  color:white;
  cursor:'pointer'
  
`;
const Wrapper = styled.div``;
function MinChatbox({setShowChatbox}) {
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



  return (
    <Container
      onMouseDown={addWindow}
      onMouseUp={removeWindow}
      onClick={() => setShowChatbox(true)}
    >
      <Wrapper className="flex aic jcc">
        <SmartToyOutlined sx={{ margin: "6px" }} />
        ROBOT
      </Wrapper>
    </Container>
  );
}

export default MinChatbox