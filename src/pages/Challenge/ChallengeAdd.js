import React ,{useState} from 'react';
import styled from "styled-components";
import {Link}from 'react-router-dom';
import TopBar6 from '../../components/common/TopBar6';
import DateRangePicker from './DateRangePicker';
import axios from 'axios';

function ChallengeAdd() {

    const [isFocused, setIsFocused] = React.useState(false);
    const accessToken = localStorage.getItem('accessToken'); 
    const [challengeTitle, setChallengeTitle] = useState('');
    const [challengeContent, setChallengeContent] = useState('');

 const handleCreateChallenge = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken'); 

      const requestData = {
        challengeTitle: challengeTitle,
        challengeContent: challengeContent,
      };

      const response = await axios.post('http://localhost:8080/challenge/create', requestData, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });
      console.log('데이터:', response.data);
    } catch (error) {
      console.error('에러:', error);
      
    }
  };
    return (
        <PageWrap>
            <TopBar6/>
                <Category>
                        <Top>
                        챌린지 제목        
                        </Top>
                    <input 
                    value={challengeTitle}
                    onChange={(e) => setChallengeTitle(e.target.value)}
                    style={{width:'600px',
                    height:'70px', 
                    border: 'none',
                    fontSize:'30px',
                    outline: isFocused ? 'none' : 'initial'}}
                    placeholder={"챌린지 제목을 입력해주세요"}
                    />
                </Category>
            <DateRangePicker/>
            <Text>
                챌린지 내용
            </Text>
                <textarea name="challengeContent" 
                value={challengeContent}
                onChange={(e) => setChallengeContent(e.target.value)}
                style={{marginLeft:'150px',
                width:'700px',
                height:'500px'
                ,border: '1px solid rgba(0, 0, 0, 0.50)',
                marginTop:'50px',
                fontSize:'30px',
                outline: isFocused ? 'none' : 'initial'}}
                rows={5} 
                cols={35}
                placeholder={"챌린지 내용을 입력해주세요"}
                maxLength = {25} />
            <Button onClick={handleCreateChallenge}>
                <Link to ="/Main">
                    <Text1>
                    입력 완료
                    </Text1>
                </Link>
            </Button>
         </PageWrap>

    );
}
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

const PageWrap = styled.div`
    width:1000px;
    height:100vh
    flex-direction: column;
    justify-content:center;
`

const Top = styled.div`
    width:200px;
    height:50px;
    font-size:40px;
    font-weight:600;
`

const Category = styled.div`
    margin-left:170px;
    width:600px;
    height:130px;
    margin-top:200px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.50);
`

const Text = styled.div`
    width:200px;
    height:50px;
    margin-top:150px;
    margin-left:170px;
    font-size:40px;
    font-weight:600;
`

export default ChallengeAdd;