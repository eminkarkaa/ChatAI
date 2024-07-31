import { TypeAnimation } from 'react-type-animation'
import './homepage.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Homepage = () => {

    const [typingStatus, setTypingStatus] = useState("human1")



    return (
        <div className='homepage'>
            <img src="/orbital.png" alt="" className='orbital'/>
            <div className="left">
                <h1>Chat AI</h1>
                <h2>Super Charge your creativity and productivity</h2>
                <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
                <Link to="/dashboard">Get Started</Link>
            </div>
            <div className="right">
                <div className="imgContainer">
                    <div className="bgContainer">
                        <div className="bg"></div>
                    </div>
                    <img src="/bot.png" alt="" className='bot'/>
                    <div className="chat">
                        <img src={typingStatus === "human" 
                            ? "/human1.jpeg" 
                            : typingStatus === "human" 
                            ? "/human2.jpeg" 
                            : "bot.png"} alt="" />
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Human:We produce food for Mice',
                                1000, ()=>{
                                    setTypingStatus("bot")
                                },
                                'Bot:We produce food for Hamsters',
                                1000,()=>{
                                    setTypingStatus("human")
                                },
                                'Human:We produce food for Guinea Pigs',
                                1000,()=>{
                                    setTypingStatus("bot")
                                },
                                'Bot:We produce food for Chinchillas',
                                1000,()=>{
                                    setTypingStatus("human")
                                },
                            ]}
                            wrapper="span"
                            repeat={Infinity}
                            cursor={true}
                            omitDeletionAnimation={true}
                        />
                    </div>
                </div>
            </div>
            <div className="terms">
                <img src="/logo.png" alt="" />
                <div className="links">
                    <Link to="/">Terms of Service</Link>
                    <span>|</span>
                    <Link to="/">Privacy Policy</Link>
                </div>
            </div>
        </div>
    )
}

export default Homepage