import React from 'react';
import { useMediaQuery } from "react-responsive"
import styled from "styled-components";
import { BrowserView, MobileView } from 'react-device-detect';
import {Link}from 'react-router-dom';
import TopBarCam from '../../components/common/TopBarCam';


function ChallengeCam() {
    return (
      <PageWrap>
        <TopBarCam/>
        <PicBox>
            <UserBox>
                <UserPic/>
                <UserName>
                김철수
                </UserName>
                <img
                style = {{marginTop:'20px',marginLeft:'270px',width:'55px',height:'55px'}}
                src = './img/report.png'/>
                </UserBox>
            <Pic/>
        </PicBox>

        <PicBox>
            <UserBox>
                <UserPic/>
                <UserName>
                이미나
                </UserName>
                <img
                style = {{marginTop:'20px',marginLeft:'270px',width:'55px',height:'55px'}}
                src = './img/report.png'/>
                </UserBox>
            <Pic/>
        </PicBox>


        <PicBox>
            <UserBox>
                <UserPic/>
                <UserName>
                신현식
                </UserName>
                
                <img
                style = {{marginTop:'20px',marginLeft:'270px',width:'55px',height:'55px'}}
                src = './img/report.png'/>
                </UserBox>
            <Pic/>
        </PicBox>

        <Button>
                <Link to ="/ChallengePic">
                <Text>
                인증하기
                </Text>
                </Link>
               </Button>
        </PageWrap>
    );
}

const PageWrap = styled.div`
    width:1000px;
    height:100vh;
    justify-content:center;
`

const PicBox = styled.div`
    
    width:800px;
    height:800px;

    margin-left:100px;
    margin-top:80px;
    padding:20px;
    box-sizing:border-box;
`

const UserPic = styled.div`
    width:100px;
    height:100px;
    border-radius:100px;
    background-color:red;
`

const Pic = styled.div`
    width:760px;
    height:470px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border-radius:30px;
    margin-top:30px;
`

const UserBox = styled.div`
    width:800px;
    font-size:30px;
    height:120px;
    display:flex;
`

const UserName = styled.div`
    width:300px;
    height:100px;
    font-size:40px;
    margin-left:30px;
    margin-top:20px;
    font-weight:700;
`

const Button = styled.div`
    width:600px;
    height:90px;
    background-color: #6100FF;
    position: absolute;
    top:85%;
    position:fixed;
    border-radius:20px;
    padding:20px;
    margin-left:200px;
    box-sizing:border-box;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

const Text = styled.div`
    font-size:42px;
    color: white;
    font-weight:800;
    text-align:center;
    text-decoration-line: none;
`


export default ChallengeCam;