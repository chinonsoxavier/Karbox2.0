import styled from "styled-components";
const Container = styled.button`
  background-color: ${(props) => props.bg};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.bdr};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.fz};
  font-weight: ${(props) => props.fw};
  cursor: pointer;
  width:${props=>props.wd}
`;

function Button({ text, fw, fz, border, color, padding,wd, margin, bg, bdr }) {
  return (
    <Container
      bg={bg}
      wd={wd}
      fw={fw}
      fz={fz}
      border={border}
      color={color}
      bdr={bdr}
      padding={padding}
      margin={margin}
    >
      {text}
    </Container>
  );
}

export default Button;
