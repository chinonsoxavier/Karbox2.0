import { ArrowBack } from "@mui/icons-material";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
   background:white;
   padding-bottom:15px;
`;
const Wrapper = styled.div``;
const Header = styled.div`
   padding:0 15px;
`;
const HeaderText = styled.span`
   padding:13px 0;
   font-size:18px;
   font-weight:400;
`;
const Hr = styled.hr`
  background-color: #eee;
  height: 1px;
  border: none;
  width: 100%;
  margin-top: ${(props) => props.mgt};
`;

const TextCon = styled.div`
  padding:0 15px;
`

const Text = styled.p`
   max-width:440px;
`
const InputCon = styled.div`
   max-width:440px;
   margin-top:15px;
`
const InputText = styled.span``
const Input = styled.input`
   margin:8px;
`

const ButtonCon = styled.div`
   max-width:440px;
   `
   const Button = styled.button`
   margin-top:15px;
   width:100%;
   border:none;
   border-radius:5px;
   padding:10px 15px;
   background:${props=>props.disable ? 'grey' : 'orangered'};
   color:white;
`


function CloseAccount() {
      const [reason, setreason] = useState();

  return (
    <Container>
      <Wrapper>
        <Header className="flex aic jcfs bsbb">
          <Link to='/customer/account' className='link' >
          <HeaderText className="v flex aic jcfs"> <ArrowBack/> Close account</HeaderText>
          </Link>
        </Header>
        <Hr />
        <TextCon>
          <Text>Please read carefully</Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ullam
            laboriosam consectetur, tempora deserunt praesentium, aliquid cumque
            officia quas quaerat fugiat optio quibusdam! Illum autem
            voluptatibus inventore assumenda repellendus. Sunt!
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            ea corrupti? Ducimus culpa sint libero et voluptatibus.
          </Text>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque ex
            commodi nobis vero harum voluptatum?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            doloribus tenetur distinctio.
          </Text>
          <FormControl
            fullwidth
            className="citySelect w100 flex1"
            sx={{ marginRight: "5px",maxWidth:'440px' }}
          >
            <InputLabel>Select the reason</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select-label AddressBook_Textfield"
              className="w100"
              value={reason}
              label="Select the reason"
              onChange={() => setreason(reason)}
            >
              <MenuItem value="Lagos">Lagos</MenuItem>
              <MenuItem value="Imo">Imo</MenuItem>
              <MenuItem value="Ogun">Ogun</MenuItem>
            </Select>
          </FormControl>
          <InputCon className='flex aifs jcfs' >
          <Input type='checkbox' />
          <InputText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptate corporis minus tempore.</InputText>
          </InputCon>
          <ButtonCon>
            <Button>CLOSE MY ACCOUNT</Button>
          </ButtonCon>
        </TextCon>
      </Wrapper>
    </Container>
  );
}

export default CloseAccount;
