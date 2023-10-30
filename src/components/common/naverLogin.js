import React from 'react';
import { useMediaQuery } from "react-responsive"
import styled from "styled-components";
import { BrowserView, MobileView } from 'react-device-detect'

const NaverIdLogin = styled.div`
	display: none;
`

const NaverLoginBtn = styled.button`
	display: flex;
	align-items: center;
	width: 600px;
	height:90px;
	background-color: #03c75a;
	border-radius: 9px;
    border:none;
	margin-bottom:50px;
	margin-top:300px;
`

const NaverIcon = styled.div`
    padding-left:4.5%;
	background-size: 30px;
    font-size:40px;
    color: white;
    font-family: var(--font-BlackHansSans-Regular);

`

const NaverLoginTitle = styled.span`
	color: white;
	font-weight: 600;
	font-size: 30px;
    padding-left:25%;
`

function naverLogin() {
    return (
        <div>
            <NaverLoginBtn>
				<NaverIcon alt="navericon">N</NaverIcon>
				<NaverLoginTitle>네이버로 시작하기</NaverLoginTitle>
			</NaverLoginBtn>

        </div>


    );

}

export default naverLogin;