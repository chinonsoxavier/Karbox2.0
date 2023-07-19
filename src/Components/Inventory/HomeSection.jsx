import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';
import img from '../../images/Lexus-LCert_WSE-Homepage-Tile-750x750.jpeg'
const Container = styled.div``
const Wrapper = styled.div`
   background:url(${props=>props.bg});
   height:100vh;
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;`

const FilterWrapper = styled.div`
   box-sizing:border-box;
   padding:0 14vh;
   width:100%;
`
const FilterCon = styled.div`
   border-radius:29px;
   background:white;
   padding:10px;
`   
const Filter = styled.div``   

const FilterPriceWrapper = styled.div`

margin:30px  0;
padding: 0 14vh;
`
const FilterPriceCon = styled.div`
background:white;
padding:10px;
border-radius:29px;
`
const FilterPrice = styled.div`
//    background:white;
margin:0 8px;
`

const ButtonCon = styled.div`
   padding:0 14vh;
`
const Button = styled.button`
   border:none;
   padding:25px 42px;
   background:blue;
   color:white;
   cursor:pointer;
`


function HomeSection() {

    const [filter,setFilter]=useState()

  return (
    <Container>
        <Wrapper bg={img} className='flex aic jcc fdc'>
            <FilterWrapper>
           <FilterCon className='flex aic jcsb w100' >  
            <Filter className='flex aic jcsb w100' >
            <FormControl
                fullwidth
                className="citySelect w100 flex1"
                sx={{ marginRight: "5px" }}
              >
                <InputLabel>Brand</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select-label AddressBook_Textfield"
                  className="w100"
                  value={filter}
                  label="Age"
                  onChange={() => setFilter(filter)}
                >
                  <MenuItem value="Lagos">Mercedes Benz</MenuItem>
                  <MenuItem value="Imo">Lamborghini</MenuItem>
                  <MenuItem value="Ogun">Porshe</MenuItem>
                </Select>
              </FormControl>
            <FormControl
                fullwidth
                className="citySelect w100 flex1"
                sx={{ marginRight: "5px" }}
              >
                <InputLabel>Brand</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select-label AddressBook_Textfield"
                  className="w100"
                  value={filter}
                  label="Age"
                  onChange={() => setFilter(filter)}
                >
                  <MenuItem value="Lagos">Mercedes Benz</MenuItem>
                  <MenuItem value="Imo">Lamborghini</MenuItem>
                  <MenuItem value="Ogun">Porshe</MenuItem>
                </Select>
              </FormControl>
            <FormControl
                fullwidth
                className="citySelect w100 flex1"
                sx={{ marginRight: "5px" }}
              >
                <InputLabel>Brand</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select-label AddressBook_Textfield"
                  className="w100"
                  value={filter}
                  label="Age"
                  onChange={() => setFilter(filter)}
                >
                  <MenuItem value="Lagos">Mercedes Benz</MenuItem>
                  <MenuItem value="Imo">Lamborghini</MenuItem>
                  <MenuItem value="Ogun">Porshe</MenuItem>
                </Select>
              </FormControl>
            <FormControl
                fullwidth
                className="citySelect w100 flex1"
                sx={{ marginRight: "5px" }}
              >
                <InputLabel>Brand</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select-label AddressBook_Textfield"
                  className="w100"
                  value={filter}
                  label="Age"
                  onChange={() => setFilter(filter)}
                >
                  <MenuItem value="Lagos">Mercedes Benz</MenuItem>
                  <MenuItem value="Imo">Lamborghini</MenuItem>
                  <MenuItem value="Ogun">Porshe</MenuItem>
                </Select>
              </FormControl>
                {/* <IconCon className='flex aic jcc' >
                    <Search sx={{fontSize:'29px'}} />
                </IconCon> */}
            </Filter>
           </FilterCon>
            </FilterWrapper>
            <FilterPriceWrapper  className='flex aifs bsbb jcfs w100'>
            <FilterPriceCon className='flex aifs bsbb jcfs ' >
                <FilterPrice>
                <TextField
              id=""
              className='bgw'
              sx={{ margin: "8px 0", width: "100%" }}
              type="number"
              fullwidth
              label="min-price"
            />
                </FilterPrice>
                          {/* and */}
                          <FilterPrice>
                    <TextField
                       className='bgw'
              sx={{ margin: "8px 0", width: "100%" }}
              type="number"
              fullwidth
              label="max-price"/>
                          </FilterPrice>
                          {/* <IconCon className='flex aic jcc' >
                    <Search sx={{fontSize:'29px'}} />
                </IconCon> */}
            </FilterPriceCon>
        </FilterPriceWrapper>
        <ButtonCon className='flex aifs w100 jcfs bsbb' >
            <Button>Show Results</Button>
        </ButtonCon>
        </Wrapper>
    </Container>
  )
}

export default HomeSection