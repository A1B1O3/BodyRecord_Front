import React,{useState,useEffect} from 'react';
import { useMediaQuery } from "react-responsive"
import styled from "styled-components";
import { BrowserView, MobileView } from 'react-device-detect';
import {Link}from 'react-router-dom';
import TopBarPic from '../../components/common/TopBarPic';
import axios from 'axios';
function ChallengePic() {

    const [selectedImage, setSelectedImage] = useState("./img/insertPicture.png");
    const accessToken = localStorage.getItem('accessToken');
 
    const [adjustedIndexValue, setAdjustedIndex] = useState(null);
    const [memberCode , setMemberCode] = useState(null);

    const queryParams = new URLSearchParams(window.location.search);
    const index = queryParams.get('code');
        
    const fileChange = (fileBlob) => {
            const reader = new FileReader();
            reader.readAsDataURL(fileBlob);
            reader.onload = () => {
              setSelectedImage(reader.result);
            };
          };
       {/*   const handleImageChange = (event) => {
            const file = event.target.files[0];
          
            if (file) {
              fileChange(file);
            }
          };*/}

          /* const handleSubmit = async () => {
            try {
              if (!selectedImage) {
                console.error('파일이 선택되지 않았습니다.');
                return;
              }
          
              const formData = new FormData();
              formData.append('challengeImageFile', selectedImage);
          
              await axios.post(`http://localhost:8080/challenge/certify/${index}`, formData, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                  'Authorization': `Bearer ${accessToken}`,
                },
              })
              .then(response => {
                console.log('응답:', response);
              })
              .catch(error => {
                console.error('handleSubmit에서 오류:', error);
              });
            } catch (error) {
              console.error('handleImageChange에서 오류:', error);
            }
          };*/
          
    return (
    <PageWrap>
        <TopBarPic/>
        <PictureBox>
            <Picture>
            <label htmlFor="inputFile" 
                  style={{
                    "width":"500px",
                    "height":"500px"
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
                    "width":"900px",
                    "height":"600px",
                    "objectFit": "cover"
                
                  }}/></label>
          
            </Picture>
            <Link to ="/challengeMain">
            <UploadButton>
              사진 업로드
            </UploadButton>
            </Link>
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