import React from 'react';
import { useMediaQuery } from "react-responsive"
import styled from "styled-components";
import { BrowserView, MobileView } from 'react-device-detect'
import { ReactComponent as Backsvg } from '../../asset/Back.svg';
import {Link}from 'react-router-dom';

class SideBar extends React.Component {
    render(){
        return (
            <PageWrap>
            
            </PageWrap>
        );
    }
}

const PageWrap = styled.div`
width:200px;
height:700px;
background-color:blue;

`