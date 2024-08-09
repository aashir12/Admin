import React, { useEffect, useState } from 'react';
import Header from './header';
import CardCreate from './cardCreate';
import axios from 'axios';

const Cover = () => {
    const [checker, setChecker] = useState(0);
    const [col, setCol] = useState(true);
    const [item, setItem] = useState({
        arther: '',
        link: ''
    });







    return (
        <div className='cover'>
            <div className='coverlft '>
                <div className='logo'>
                    <img src='/images/logo.PNG' style={{ width: '100%', borderBottom: "0.3px solid grey", paddingBottom: "10%",cursor:'pointer' }} onClick={()=>{setCol(!col)}}/>
                </div>
                <div className='lftCol' style={col===true?{marginLeft:'0',transition:'0.5s'}:{marginLeft:'-250px',transition:'0.5s'}}>
                    <div className='colTop'>
                        <h3 style={{color: "rgb(250, 120, 47)"}}><i class="fa-solid fa-database" style={{paddingRight:'10%',paddingTop:'10%'}}></i>My Projects</h3>
                        <h3 style={{  borderBottom: "0.3px solid grey", paddingBottom: "10%" }}><i class="fa-solid fa-table-cells-large" style={{paddingRight:'10%',paddingTop:'10%'}}></i>Sample Projects</h3>
                        <h3><i class="fa-brands fa-adn" style={{paddingRight:'10%',paddingTop:'10%'}}></i>Apps</h3>
                        <h3><i class="fa-solid fa-circle-play" style={{paddingRight:'10%',paddingTop:'10%'}}></i>Intro to Necleo</h3>
                    </div>
                    <div className='colBottom'>
                        <h3><i class="fa-solid fa-circle-question" style={{paddingRight:'10%',paddingTop:'10%'}}></i>Help and Support</h3>
                        <h3><i class="fa-solid fa-comment-dots" style={{paddingRight:'10%',paddingTop:'10%'}}></i>Feedback</h3>
                        <h3><i class="fa-solid fa-circle-arrow-left" style={{paddingRight:'10%',paddingTop:'10%'}} onClick={()=>setCol(!col)}></i>Collapse</h3>
                    </div>
                </div>
            </div>
            <div className='coverrft'>
                <div>
                    <Header />
                </div>
                <div className='content'>
                   
                    <h1 className='text-red-300'>My Projects</h1>
                    <div className='cards'>                       
                            <CardCreate key='1' url={item.url} Arther='Author' width='200px' height='400px' />
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;
