import React from 'react';
import { useMediaQuery } from "react-responsive"
import styled from "styled-components";
import { BrowserView, MobileView } from 'react-device-detect';
import {Link}from 'react-router-dom';

class ProfileSetting extends React.Component {
    render(){
        return (
            <PageWrap>
                <InputBox>
                <Text>
                    닉네임
                </Text>
                </InputBox>
                <InputBox>
                <Text>
                    운동목표
                </Text>
                </InputBox>
                <SelectBox>
                
                </SelectBox>

            </PageWrap>
        );
    }
}

const InputBox = styled.div`
width:800px;
margin-top:30px;
height:100px;
margin-left:10%;
background-color:yello;
border-bottom:2px solid silver;
`

const PageWrap = styled.div`
width: 1000px;
height:1000px;
background-color:blu;
position:absolute;
top:50%;
`

const Text = styled.div`
width:200px;
height:50px;
background-color:re;
font-size: 40px;
font-weight:500;
`
const SelectBox = styled.div`

`

export default ProfileSetting;