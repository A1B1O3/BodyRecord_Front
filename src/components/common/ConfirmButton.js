import React from 'react';
import { useMediaQuery } from "react-responsive"
import styled from "styled-components";
import { BrowserView, MobileView } from 'react-device-detect';
import {Link}from 'react-router-dom';

class ConfirmButton extends React.Component {
    render(){
        return (
          <Button>
            <Text>
                입력 완료
                </Text>
            </Button>
        );
    }
}

const Button = styled.button`
width:600px;
height:90px;
background-color: #6100FF;
position: absolute;
top:85%;
border-radius:20px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

const Text = styled.div`
font-size:42px;
color: white;
font-weight:800;
`

export default ConfirmButton;