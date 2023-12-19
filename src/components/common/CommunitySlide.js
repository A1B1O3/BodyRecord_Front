import { useMediaQuery } from "react-responsive"
import styled from "styled-components";
import { BrowserView, MobileView } from 'react-device-detect'
import { useState, useRef, useEffect } from "react";
import React, { Component } from "react";

class CommunitySlide extends React.Component {
    render(){
        return (
           <PageWrap>
            <Photo>
                <img src = "img/breakfast.png"/>
                </Photo>
            <Profile>
                <Pic>
                    <img src = "img/face4.png" />
                </Pic>
                <Name>
                김나래 <br/> 
                </Name>
            </Profile>
            </PageWrap>
        );
    }
}

const PageWrap = styled.div`
border-radius:30px;
padding-top:30px;
    width:900px;
    height:700px;
    align-item: center;
`
const Photo = styled.div`
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  overflow:hidden;
  border-radius:30px;
    width:850px;
    height:500px;
    background-color:yellow;
    margin: 0 auto;
`
const Profile = styled.div`
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    box-sizing: border-box;
    padding:20px;
    border-radius:30px; 
    width:850px;
    height:150px;
    margin: 0 auto;
    display:flex;
`

const Pic = styled.div`
overflow:hidden;
    width:100px;
    height:100px;
    border-radius:100px;
    background-color:black;
    object-fit: scale-down

`
const Name = styled.div`
    width:500px;
    height:70px;
    font-size:30px;
    margin-left:20px;
    margin-top:20px;
`
export default CommunitySlide;