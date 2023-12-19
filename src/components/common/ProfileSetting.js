import React, {useState,useRef}from 'react';
import { useMediaQuery } from "react-responsive"
import styled from "styled-components";
import { BrowserView, MobileView } from 'react-device-detect';
import {Link, useNavigate}from 'react-router-dom';
import axios from 'axios';
import ConfirmButton from './ConfirmButton';

const ProfileSetting = () => {

    const [nickName, setNickName] = useState('');
    const [selectedImage, setSelectedImage] = useState('./img/person_default.png');
    const fileInput = useRef(null);
    const [isFocused, setIsFocused] = React.useState(false);

    const Navigate = useNavigate();
    const [bodyFatPercentage, setBodyFatPercentage] = useState('');
    const [muscleMass, setMuscleMass] = useState('');
    
    const [weight, setWeight] = useState('');
    const [inputValue, setInputValue] = useState('');
    const accessToken = localStorage.getItem('accessToken');

    const fileChange = (fileBlob)=>{
        const reader = new FileReader(); 
        reader.readAsDataURL(fileBlob); 
        return new Promise((resolve) => {
          reader.onload = () => {   
          setSelectedImage(reader.result);
              resolve();
          };
        });
}
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      setSelectedImage(file);
    };
  
    const handleNicknameChange = (event) => {
      setNickName(event.target.value);
    };
  
    const handleSubmit = async () => {
        if (nickName.trim() === '') {
            alert('닉네임을 입력해 주세요');
          } else {
            const requestData = {
                memberImage: selectedImage,
                memberNickname: nickName,
                weight: weight,
                fat: bodyFatPercentage,
                muscle: muscleMass
                
            };
      
        await axios.post('http://localhost:8080/body/log', requestData, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
          },
        })
        .then(response => {
            console.log('response',response);})
        ;
    }}
        return (
              <PageWrap>
                  <ProfileImg> 
                  <label htmlFor="inputFile" 
                  style={{
                    "width":"500px",
                    "height":"500px",
                    "borderRadius":"1000px"
                  }}>
                <input  
                    id="inputFile" 
                    type="file" 
                    name="file" 
                    accept='image/*'  
                    style={{"display":"none"}} 
                   onChange={(e)=>{fileChange(e.target.files[0])}}></input>
                <img src={selectedImage}
                style={{
                    "width":"500px",
                    "height":"500px",
                    "objectFit": "cover",
                    "borderRadius":"1000px"
                  }}/></label>
                 </ProfileImg>
                  <InputBox >
                        <Text>
                            닉네임
                         </Text>
                         <input type="text" 
                            name="nickname"
                            value={nickName}
                            onChange={handleNicknameChange} 
                         style ={{width:'800px',
                                height:'100px',
                                border:'none',
                                borderBottom:'2px solid silver',
                                fontSize:'40px',
                                outline: isFocused ? 'none' : 'initial'}} 
                                    />
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
                             <input 
                               type="number"
                               placeholder="체중"
                               style={{
                                fontSize:"30px",
                                border:"none",
                                width:"90px",
                                outline: isFocused ? 'none' : 'initial'}}
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                />
                                <Text
                                style={{fontSize:"30px",
                                marginLeft:"100px",
                                top:"20px",
                                position:"absolute"}}>KG
                                    </Text>
                  </SelectBox>
                  <SelectBox style={{marginLeft:"400px"}}>
                  <input 
                               type="number"
                               placeholder="체지방"
                               style={{
                                fontSize:"30px",
                                border:"none",
                                width:"100px",
                                outline: isFocused ? 'none' : 'initial'}}
                                value={bodyFatPercentage}
                                onChange={(e) => setBodyFatPercentage(e.target.value)}
                                />
                                <Text
                                style={{fontSize:"30px",
                               marginLeft:"110px",
                                top:"20px",
                                position:"absolute"}}>%
                                    </Text>
                 </SelectBox>
                 <SelectBox style={{marginLeft:"700px"}}>
                 <input 
                               type="number"
                               placeholder="골격근"
                               style={{
                                fontSize:"30px",
                                border:"none",
                                width:"90px",
                                outline: isFocused ? 'none' : 'initial'}}
                                value={muscleMass}
                                onChange={(e) => setMuscleMass(e.target.value)}
                                />
                                <Text
                                style={{fontSize:"30px",
                               
                                top:"20px",
                                position:"relavent"}}>KG
                                    </Text>
                 </SelectBox>
               <Link to ={'/Main'}>
                <Button >
                <Text1>
                입력 완료
                </Text1>
               </Button>
               </Link>
            </PageWrap>
        );
    }

const InputBox = styled.div`
width:800px;
margin-top:30px;
height:100px;
margin-left:10%;
margin-top:900px;
`

const PageWrap = styled.div`
width: 1000px;
height:2000px;
position:absolute;
top:10%;
`

const Text = styled.div`
width:200px;
height:50px;
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
font-size:30px;
color:black;
display:flex;
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
margin-top:190px;

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
const ProfileImg = styled.div`
width: 500px;
height:500px;
position:absolute;
margin-left:270px;
top:10%;
`
const Button = styled.div`
width:600px;
height:90px;
background-color: #6100FF;
position: absolute;
top:90%;
border-radius:20px;
padding:20px;
box-sizing:border-box;
margin-left:200px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
const Text1 = styled.div`
font-size:42px;
color: white;
font-weight:800;
text-align:center;
text-decoration-line: none;
`
export default ProfileSetting;