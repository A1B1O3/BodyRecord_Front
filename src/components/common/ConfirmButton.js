import React from 'react';
import { useMediaQuery } from "react-responsive"
import styled from "styled-components";
import { BrowserView, MobileView } from 'react-device-detect';
import {Link}from 'react-router-dom';

class ConfirmButton extends React.Component {
    render(){
        return (
               <Button>
                <Link to ="/Main">
                <Text>
                입력 완료
                </Text>
                </Link>
               </Button>
             
        );
    }
}

const Button = styled.div`
width:600px;
height:90px;
background-color: #6100FF;
position: absolute;
top:90%;
border-radius:20px;
padding:20px;
box-sizing:border-box;
margin-left:200px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

const Text = styled.div`
font-size:42px;
color: white;
font-weight:800;
text-align:center;
text-decoration-line: none;
`

export default ConfirmButton;