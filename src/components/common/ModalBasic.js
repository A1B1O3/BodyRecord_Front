import { useEffect, useRef } from 'react';
import styled from "styled-components";
import {Link}from 'react-router-dom';

function ModalBasic({ setModalOpen, id, title, content, writer }) {

    const closeModal = () => {
        setModalOpen(false);
    };
    
    return (

        <div 
        style={{ width: "400px", height: "700px", 
        backgroundColor: "white", 
        top: "48%", 
        left: "54%", 
        position: "fixed", 
        borderRadius: "30px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
        }} >
            <Link to ='/RecordMain'>
             <Record>
               <img src = "img/Record.png"/>
             </Record>
            </ Link>
            <Link to ='/ChallengeMain'>
            <Challenge>
               <img src = "img/Challenge.png"/>
            </Challenge>
            </Link>
            <Link to ='/Main'>
               <Home>
                <img src = "img/Home.png"/>
               </Home>
               </Link>
            <Link to ='/SearchMain'>
                <Search>
                <img src = "img/Search.png"/>
              </Search>
            </ Link>
            <Link to ='/ProfileMain'>
               <Profile>
                <img src = "img/Profile.png"/>
              </Profile>
            </Link>
        </div>
    );
}

const Home = styled.div`
    text-align: center;
    padding-top:30px;
    padding-right:20px;
    box-sizing: border-box;
    font-size:40px;
    width:400px;
    height:120px;

`
const Record = styled.div`
    margin-top:50px;
    text-align: center;
    padding-top:30px;
    box-sizing: border-box;
    width:400px;
    height:120px;

`

const Challenge = styled.div`
    text-align: center;
    padding-top:30px;
    padding-left:17px;
    box-sizing: border-box;
    font-size:40px;
    width:400px;
    height:120px;
 
`

const Search = styled.div`
    text-align: center;
    padding-top:30px;
    box-sizing: border-box;
    font-size:40px;
    width:400px;
    height:120px;

`

const Profile = styled.div`
    text-align: center;
    padding-top:30px;
    box-sizing: border-box;
    font-size:40px;
    width:400px;
    height:120px;
    padding-left:15px;
 
`

export default ModalBasic;