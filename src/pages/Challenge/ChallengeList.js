import { useMediaQuery } from "react-responsive"
import styled from "styled-components";
import { BrowserView, MobileView } from 'react-device-detect';
import {Link}from 'react-router-dom';
import TopBar3 from '../../components/common/TopBar3';
import React, { useState } from 'react';
import ChallengeList2 from './ChallengeList2';


function ChallengeList() {

    const [selectedButton, setSelectedButton] = useState(null);
  
     const handleButtonClick = (buttonNumber) => {

    if (selectedButton !== buttonNumber) {
      setSelectedButton(buttonNumber);
    } else {
  
      setSelectedButton(null);
    }
  };


    return (
     <PageWrap>
        <TopBar3/>
        <CategoryList>
            <Link to = ''style={{ textDecoration: 'none' }}>
            <Category selected={selectedButton === 1} onClick={() => handleButtonClick(1)}>
                 홈           
            </Category>
            </Link>
            <Category selected={selectedButton === 2} onClick={() => handleButtonClick(2)}>
                인기
            </Category>
            <Category selected={selectedButton === 3} onClick={() => handleButtonClick(3)}>
                신규
            </Category>
        </CategoryList>
        <ChallengeList2/>
        </PageWrap>
    );
}

const PageWrap = styled.div`
    width: 1000px;
    height: 100vh;
    flex-direction: column;
    justify-content:center;
`

const CategoryList = styled.div`

    width: 1000px;
    height: 150px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.50);
    display:flex;
    box-sizing:border-box;
    padding:50px;
`
const Category = styled.div`
    border-bottom: ${(props) => (props.selected ? '7px solid #6100FF' : '4px solid white')};
    font-size:40px;
    margin-left:70px;
    font-weight:600;
    width:100px;
    text-align:center;
    height:80px;
    color:black;
`
export default ChallengeList;