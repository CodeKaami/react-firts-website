import React from 'react'
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai"
import vg from "../assets/2.webp"

const Home = () => {
    return (
        <>
            <div className='home' id='home'>
                <main>
                    <h1>techystar</h1>
                    <p>Solution for all your problems</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="graphics" />
                <div>
                    <p>we are your one and only Solution to the tech problrm you face every day. we are leading teach company whose aim is to increase the problem solving ability in children. </p>
                </div>
            </div>
            <div className="home3" id='about'>
                <div>
                    <h1>who we are?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius reprehenderit quia alias ipsa maxime quas repellat nesciunt accusamus maiores, velit magni similique quos? Necessitatibus at, consectetur adipisicing elit. Eius reprehenderit quia alias ipsa maxime quas repellat , ex numquam labore quas cupiditate, est sed omnis aliquid rem repudiandae earum consequuntur non facere! Quis expedita provident ad non repellendus. Atque officiis ea reiciendis?</p>

                </div>
            </div>

            <div className="home4" id='brands'>

                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{ animationDelay: "0.3s" }}>
                            <AiFillGoogleCircle />
                            <p>google</p>
                        </div>

                        <div style={{ animationDelay: "0.5s" }}>
                            <AiFillAmazonCircle />
                            <p>Amazone</p>
                        </div>

                        <div style={{ animationDelay: "0.7s" }}>
                            <AiFillYoutube />
                            <p>youtube</p>
                        </div>

                        <div style={{ animationDelay: "1s" }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>

            </div>
        </>
    )
}

export default Home