import React from 'react';
import { useMediaQuery } from "react-responsive"
import styled from "styled-components";
import { BrowserView, MobileView } from 'react-device-detect';
import {Link}from 'react-router-dom';
import TopBar6 from '../../components/common/TopBar6';
import Dynamic from './DynamicInputForm';
import DateRangePicker from './DateRangePicker';

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
                placeholder={"챌린지 제목을 입력해주세요"}
                />
            </Category>
            <DateRangePicker/>
            <Text>
                챌린지 내용
            </Text>
           <Dynamic/>
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
    font-size:40px;
    font-weight:600;
`

const Category = styled.div`
    margin-left:170px;
    width:600px;
    height:130px;
    margin-top:200px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.50);
`

const Text = styled.div`
    width:200px;
    height:50px;
    margin-top:150px;
    margin-left:170px;
    font-size:40px;
    font-weight:600;
`

export default ChallengeAdd;