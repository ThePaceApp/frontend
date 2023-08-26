import React from 'react'
import './details.css'
import icon from "../../../assets/Group.png"
import dot from "../../../assets/dot.png"
import dot_2 from "../../../assets/dot2.png"
import dot_3 from "../../../assets/dot3.png"
import game from "../../../assets/game.png"
import naira from "../../../assets/naira.png"

const Details = () => {
  return (
    <div className='detailcontainer'>
        <div className="subdetails">
            <div className='subs'>
                <div className='submenus'>
                    <img src={game} alt="" width={'50px'}/>
                </div>
                <div className='submenu'></div>
                <div>
                <div className="subImg">
                    <img src={dot} alt="dot" style={{marginLeft:"50px", width:"20px"}}/>
                    <h3>PLAY</h3>
                </div>
                    <div style={{width:'180px',textAlign:'center',color:'#4B4D52',marginTop:'10px'}}>
                        <p>Practice questions and compete with other students on the leaderboard </p>
                    </div>
                </div>
            </div>
            <div className='subs'>
            <div className='submenus'  style={{background:"#1A97B3"}}>
                <img src={icon} alt="" width={'50px'}/>
            </div>
            <div className='submenu' style={{background:"#30C1E0"}}></div>
            <div>
                <div className="subImg">
                    <img src={dot_2} alt="dot" style={{marginLeft:"35px", width:"20px"}}/>
                    <h3>LEARN</h3>
                </div>
                    <div style={{width:'180px',textAlign:'center',color:'#4B4D52',marginTop:'10px'}}>
                        <p>Share difficult questions and get help from a vibrant community of fellow students and expert tutors </p>
                    </div>
                </div>
        </div>
             <div className='subs'>
                <div className='submenus' style={{background:"#B31A4B"}}>
                    <img src={naira} alt="" width={'50px'}/>
                </div>
                <div className='submenu' style={{background:"#E03069"}}></div>
                <div>
                <div className="subImg">
                    <img src={dot_3} alt="dot" style={{marginLeft:"50px", width:"20px"}}/>
                    <h3>EARN</h3>
                </div>
                    <div style={{width:'180px',textAlign:'center',color:'#4B4D52',marginTop:'10px'}}>
                        <p>Join our live quizzes and seize a spot among the top 3 to unlock rewards including money,laptops,learning materials, and scholarship</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="progress">
            <div className="earn">
                <h2>200k</h2>
                <div style={{width:'100px',textAlign:'center',marginTop:'10px',color:'#F2F2F2',letterSpacing:"1px"}}>
                    <p>Earned by user</p>
                </div>     
            </div>
            <div className="earn">
            <h2 style={{fontSize:"3rem", fontWeight:""}}>5K</h2>
            <div style={{width:'130px',textAlign:'center',marginTop:'10px',color:'#F2F2F2',letterSpacing:"1px"}}>
                <p>download on Playstore</p>
            </div>
            </div>
            <div className="earn">
            <h2 style={{fontSize:"3rem", fontWeight:""}}>4.8</h2>
            <div style={{width:'100px',textAlign:'center',marginTop:'10px',color:'#F2F2F2',letterSpacing:"1px"}}>
                <p>App store rating</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Details