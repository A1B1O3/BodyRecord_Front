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
                            <TextBoxUp>
                            <TextBoxIn>
                                체중
                            </TextBoxIn>
                            <TextBoxIn>
                                체지방률
                            </TextBoxIn>
                            <TextBoxIn>
                                골격근량
                            </TextBoxIn>
                            </TextBoxUp>
                  <SelectBox>
                            <TextBox>
                            </TextBox>
                  </SelectBox>
                  <SelectBox style={{marginLeft:"400px"}}>
                            <TextBox>
                            </TextBox>
                </SelectBox>
                 <SelectBox style={{marginLeft:"700px"}}>
                            <TextBox>
                            </TextBox>
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
margin-top:100px;
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
font-weight:700;
`
const SelectBox = styled.div`
width:200px;
height:80px;
padding:20px;
margin-top:-20px;
margin-left:10%;
position:absolute;
box-sizing  : border-box; 
border-radius: 12px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

`

const TextBox = styled.span`
font-size: 50px;

`

const TextBoxUp = styled.div`
width:1000px;
height:100px;
margin-top:100px;

display:flex;
`

const TextBoxIn = styled.div`
width:200px;
height:100px;
font-size:40px;
margin-left:100px;
text-align: center;
font-weight:700;
`


export default ProfileSetting;