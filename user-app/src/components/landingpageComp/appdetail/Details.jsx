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
                        <p>Play quiz in form of pratice question in your related field of studies. </p>
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
                        <p>Learn by taking quiz with   solution to each questions. </p>
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
                        <p>Earn up to N150,000 in saturday live game and up to N1000 per day when you pratice. </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="progress">
            <div className="earn">
                <h2>200k</h2>
                <div style={{width:'100px',textAlign:'center',marginTop:'10px',color:'#F2F2F2'}}>
                    <p>Earned by user</p>
                </div>     
            </div>
            <div className="earn">
            <h2 style={{fontSize:"3rem", fontWeight:""}}>5K</h2>
            <div style={{width:'100px',textAlign:'center',marginTop:'10px',color:'#F2F2F2'}}>
                <p>download on Playstore</p>
            </div>
            </div>
            <div className="earn">
            <h2 style={{fontSize:"3rem", fontWeight:""}}>4.8</h2>
            <div style={{width:'100px',textAlign:'center',marginTop:'10px',color:'#F2F2F2'}}>
                <p>App store rating</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Details