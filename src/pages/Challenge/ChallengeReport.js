import { useMediaQuery } from "react-responsive"
import styled from "styled-components";
import { BrowserView, MobileView } from 'react-device-detect';
import {Link}from 'react-router-dom';
import TopBar5 from '../../components/common/TopBar5';
import React, { useState } from 'react';

function ChallengeReport() {

    const SelectBoxWrapper = styled.div`
	display: flex;
`;

const IconSVG = styled.svg`
	margin-left: -28px;
	align-self: center;
	width: 24px;
	height: 24px;
`;


    const OPTIONS = [
        { value: "apple", name: "잘못된 챌린지 게시" },
        { value: "banana", name: "챌린지와 관계없는 내용" },
        { value: "orange", name: "장난식의 글 게시" },
    ];

    const SelectBox = (props) => {
        const handleChange = (e) => {
     
            console.log(e.target.value);
        };
    
        return (
            <Select onChange={handleChange}>
                {props.options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                        defaultValue={props.defaultValue === option.value}
                    >
                        {option.name}
                    </option>
                ))}
            </Select>
        );
    };

    return (
        <PageWrap>
            <TopBar5/>
            <ReportBox>
                <Category>
                    <Top>
                        카테고리 선택
                     </Top>
                        <SelectBox options={OPTIONS} defaultValue="banana"></SelectBox>
                </Category>
                </ReportBox>
            <ReportBox2>
                <Write>
                <img src = '/img/write.png' style={{marginRight:'20px'}} />
                신고 내용을 입력해 주세요
                </Write>
                <textarea
                style={{marginLeft:'150px',width:'700px',height:'500px'
            ,border: '1px solid rgba(0, 0, 0, 0.50)',marginTop:'50px',fontSize:'30px'}}
                rows={5} 
                cols={35}
                placeholder={"신고 내용을 입력해주세요"}
                maxLength = {25} />
                </ReportBox2>
                <Button>
                     <Text style={{textDecoration: 'none'}}>
                    신고하기
                    </Text>
               </Button>
        </PageWrap>
        );
    }

    const PageWrap = styled.div`
    width: 1000px;
    height: 100vh;
    flex-direction: column;
    justify-content:center;
`

const ReportBox = styled.div`
    width: 1000px;
    height: 500px;
    display:flex;
    justify-content:center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.50);
`

const ReportBox2 = styled.div`
    width: 1000px;
    height: 700px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.50);
`

const Category = styled.div`
    width:650px;
    height:150px;
    margin-top:200px;
`

const Top = styled.div`
    width:200px;
    height:50px;
    font-size:37px;
    font-weight:600;
`

export const Select = styled.select`
	margin: 0;
    width:600px;
    margin-top:20px;
	display: block;
	padding: 8px 8px;
	font-size: 30px;
	line-height: inherit;
	border: 1px solid;
	border-radius: 4px;
	color: inherit;

    border:none;
	background-color: transparent;
    border-bottom: 2px solid black;
	&:focus 
		border-color: red;
	}
`;

const Write = styled.div`
    margin-top:50px;
    margin-left:150px;
    width:500px;
    height:50px;
    font-size:37px;
    font-weight:500;
`

const input = styled.div`
    width:700px;
    height:700px;
`

const Button = styled.div`
    width:600px;
    height:90px;
    background-color: #FF002E;
    margin-left:200px;
    position: absolute;
    top:90%;
    border-radius:20px;
    padding:20px;
    position:fixed;
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

    export default ChallengeReport;