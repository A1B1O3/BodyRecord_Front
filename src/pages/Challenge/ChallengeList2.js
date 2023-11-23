import { useMediaQuery } from "react-responsive"
import styled from "styled-components";
import { BrowserView, MobileView } from 'react-device-detect';
import {Link}from 'react-router-dom';
import TopBar3 from '../../components/common/TopBar3';
import React, { useState } from 'react';

function ChallengeList2() {
    return (
        <PageWrap>
        
        <BoxWrap>
        <Link to = '/ChallengeDetail' style={{ textDecoration: 'none' }}>
        <Box>
            5시 기상
        </Box>
        </Link>
        <Box>
            7시 기상
        </Box>
        </BoxWrap>

        <BoxWrap>
        <Box>
            7시 기상
        </Box>
        <Box>
            7시 기상
        </Box>
        </BoxWrap>

        <BoxWrap>
        <Box>
            7시 기상
        </Box>
        <Box>
            7시 기상
        </Box>
        </BoxWrap>

        <BoxWrap>
        <Box/>
        <Box/> 
        </BoxWrap>

        <BoxWrap>
        <Box/>
        <Box/> 
        </BoxWrap>

        <BoxWrap>
        <Box/>
        <Box/> 
        </BoxWrap>

       
        </PageWrap>
        );
    }

    const Box = styled.div `
        width:400px;
        height:250px;
        border-radius:10px;
        background-color:blue;
        margin-left:30px;
        justify-content: center;
        font-size:50px;
        font-weight:800;
        box-sizing:border-box;
        padding:30px;
        color:black;
    `

    const PageWrap = styled.div`
        margin-top:70px;
        width:1000px;
        height:1700px;
   
        justify-content: center;
    `

    const BoxWrap = styled.div`
        width:900px;
        height:255px;
        display:flex;
        margin-top:20px;
        margin-left:50px;
    `


    export default ChallengeList2;