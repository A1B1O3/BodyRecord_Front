import React from 'react';
import { useMediaQuery } from "react-responsive"
import styled from "styled-components";
import { BrowserView, MobileView } from 'react-device-detect';
import {Link}from 'react-router-dom';
import TopBarPic from '../../components/common/TopBarPic';

function ChallengePic() {
    return (
    <PageWrap>
        <TopBarPic/>
        <PictureBox>
            <Picture>
                <img style = {{marginLeft:'430px',marginTop:'250px'}} src='./img/Picture.png'/>
            </Picture>
            <UploadButton>
              사진 업로드
            </UploadButton>
        </PictureBox>
    </PageWrap>
    );
}

const PageWrap = styled.div`
    width:1000px;
    height:100vh;
    
`

const Picture = styled.div`
    width:900px;
    height:600px;
    background-color:#F0F0F0;
    margin-top:200px;
    margin-left:50px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

const PictureBox = styled.div`
    width:1000px;
    height:1000px;
`

const UploadButton = styled.div`
    width:400px;
    height:100px;
    background-color:#0074FF;
    margin-left:300px;
    margin-top:150px;
    border-radius:20px;
    font-size:50px;
    color:white;
    font-weight:700;
    padding:20px;
    padding-left:80px;
    box-sizing:border-box;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`

export default ChallengePic;