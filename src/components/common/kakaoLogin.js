import React from 'react';
import { useMediaQuery } from "react-responsive"
import styled from "styled-components";
import { BrowserView, MobileView } from 'react-device-detect'

const KakaoLogin = styled.div`
	display: none;
`

const KakaoLoginBtn = styled.button`
	display: flex;
	align-items: center;
	width: 30vh;
	height: 4vh;
	background-color: #03c75a;
	border-radius: 9px;
    border:none;
`

const KakaoIcon = styled.div`
    padding-left:10%;
	background-size: 30px;
    font-size:1.5vh;
    color: white;
    font-family: var(--font-BlackHansSans-Regular);

`

const KakaoLoginTitle = styled.span`
	color: white;
	font-weight: 600;
	font-size: 1.5vh;
    padding-left:30%;
`

function kakaoLogin() {
    return (
        <div>
            <KakaoLoginBtn>
				<KakaoIcon alt="KakaoIcon">N</KakaoIcon>
				<KakaoLoginTitle>네이버로 로그인</KakaoLoginTitle>
			</KakaoLoginBtn>

        </div>


    );

}

export default kakaoLogin;