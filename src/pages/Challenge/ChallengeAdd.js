import React from 'react';
import { useMediaQuery } from "react-responsive"
import styled from "styled-components";
import { BrowserView, MobileView } from 'react-device-detect';
import {Link}from 'react-router-dom';
import TopBar6 from '../../components/common/TopBar6';

function ChallengeAdd() {
    return (
        <PageWrap>
            <TopBar6/>
            <Category>
                <Top>
                  챌린지 제목        
                </Top>
                <input 
                style={{width:'600px',height:'70px', border: 'none',
                fontSize:'30px'}}
                placeholder={"신고 내용을 입력해주세요"}
                />
            </Category>

        </PageWrap>

    );
}


const PageWrap = styled.div`
    width:1000px;
    height:100vh
    flex-direction: column;
    justify-content:center;
`

const Top = styled.div`
    width:200px;
    height:50px;
    font-size:37px;
    font-weight:600;
`

const Category = styled.div`
    margin-left:170px;
    width:600px;
    height:130px;
    margin-top:200px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.50);
`

export default ChallengeAdd;