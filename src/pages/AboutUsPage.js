import React from 'react';
import '../styles/pages/AboutUsPage.css';
import { Carousel,Col, Row } from "react-bootstrap";

const AboutUsPage = (props)=>{
    return (
        <main className='holder'>
            <div  className='cuadrado '>
                <h2>About us</h2>
                <p>We are a company with over 20 years of experience  in custom set and display manufacturing. Our team is a combination of the best profesionals.</p>
            </div>

<section>
        <h1>TEAM ALCHEMY</h1>
    <p>Our Team prides itself on delivering <span>CREATIVITY, QUALITY &amp; PARTNERSHIP!</span></p>
        <p>We pride ourselves on helping customers achieve outstanding projects because</p>
        <span>“WE GIVE A SHIT!</span>
</section>           

<div className="team-carousel">
                <Carousel className="carousel-dark slide" interval="100000">
                    <Carousel.Item>
                    <div className=" d-flex w-100 ">
                      <img
                        className=" image d-flex mb-2 w-50"
                        src="images\about\ani2.png"
                        alt="vivid 2"
                        />
                        <div className='text-team justify-content-center align-self-center w-40'>
                        <h4 className='name'>ANITA MARTIN TORRES</h4>
                        <h5 className='position'>Production Designer</h5>
                        <p className='description p-1 '>Multi-talented &amp; innovative in creating design solutions that look amazing-despite all sorts of jobs to deal with.</p>
                        </div>
{/*                        <Carousel.Caption  className='text-team  w-75'>
                        <h3 className='name'>ANITA MARTIN TORRES</h3>
                        <h4 className='position'>Production Designer</h4>
                        <p className='description'>Multi-talented &amp; innovative in creating design solutions that look amazing-despite all sorts of jobs to deal with.</p>
                        </Carousel.Caption> */}

                     
                    </div>
                    </Carousel.Item>

                    <Carousel.Item>
                    <div className=" d-block w-60 ">
                        <img
                        className=" d-block  w-50"
                        src="images\about\BEC2.png"
                        alt="vivid 2"
                        />
                        <Carousel.Caption className='text-team  w-75'>
                        <h3 >Bec Ianna</h3>
                        <h4>PROJECT MANAGER</h4>
                        <p>THEY CONVERT A CONCEPT INTO A REALITY THAT CAN BE BUILT ON TIME & ON BUDGET. WITH OVER 20 YEARS OF COMBINED INDUSTRY EXPERIENCE, THEY DELIVER-CONSISTENTLY!</p>
                        </Carousel.Caption>
                    </div>
                    </Carousel.Item>

                    <Carousel.Item>
                    <div className=" d-block w-60 ">
                        <img
                        className=" d-block w-50"
                        src="images\about\CHARLY3.png"
                        alt="vivid 2"
                        />
                        <Carousel.Caption className='text-team  w-75'>
                        <h3 >Charly Mcdonald</h3>
                        <h4>LOGISTIC SUPERVISOR</h4>
                        <p>YEARS OF EXPERIENCE INSTALLING A RANGE OF DIFFERENT PROJECTS IN ALL TYPES OF LOCATIONS-WITH CONSISTENT CUSTOMER SATISFACTION AND QUALITY.</p>
                        </Carousel.Caption>
                    </div>
                    </Carousel.Item>

                    <Carousel.Item>
                    <div className=" d-block w-60 ">
                        <img
                        className=" d-block x w-50"
                        src="images\about\Diego2-1.png"
                        alt="vivid 2"
                        />
                        <Carousel.Caption className='text-team  w-75'>
                        <h3 >DIEGO CARTELLE</h3>
                        <h4>GRAPHICS MANAGER</h4>
                        <p>YEARS OF EXPERIENCE INSTALLING A RANGE OF DIFFERENT PROJECTS IN ALL TYPES OF LOCATIONS-WITH CONSISTENT CUSTOMER SATISFACTION AND QUALITY.</p>
                        </Carousel.Caption>
                    </div>
                    </Carousel.Item>

                    <Carousel.Item>
                    <div className=" d-block w-60 ">
                        <img
                        className=" d-block w-50"
                        src="images\about\jaime2.png"
                        alt="vivid 2"
                        />
                        <Carousel.Caption className='text-team  w-75'>
                        <h3 >Jaime Merchan</h3>
                        <h4>PROJECT MANAGER</h4>
                        <p>THEY CONVERT A CONCEPT INTO A REALITY THAT CAN BE BUILT ON TIME & ON BUDGET. WITH OVER 20 YEARS OF COMBINED INDUSTRY EXPERIENCE, THEY DELIVER-CONSISTENTLY!</p>
                        </Carousel.Caption>
                    </div>
                    </Carousel.Item>

                    <Carousel.Item>
                    <div className=" d-block w-60 ">
                        <img
                        className=" d-block x w-50"
                        src="images\about\JC1.png"
                        alt="vivid 2"
                        />
                        <Carousel.Caption className='text-team  w-75'>
                        <h3 >John Chellingworth</h3>
                        <h4>CFO</h4>
                        <p>FORMER CEO THAT ENSURES THAT CASH FLOW IS MANAGED &amp; SYSTEMS DELIVER PROFITS.</p>
                        </Carousel.Caption>
                    </div>
                    </Carousel.Item>

                    <Carousel.Item>
                    <div className=" d-block w-60 ">
                        <img
                        className=" d-block w-50"
                        src="images\about\MATT2.png"
                        alt="vivid 2"
                        />
                        <Carousel.Caption className='text-team  w-75'>
                        <h3 >Matt Aylife</h3>
                        <h4>CREATIVE DIRECTOR</h4>
                        <p>20 YEARS OF DEVELOPING HIGH QUALITY &amp; CREATIVE SOLUTIONS COMBINED WITH FAIR PRICING.</p>
                        </Carousel.Caption>
                    </div>
                    </Carousel.Item>

                    <Carousel.Item>
                    <div className=" d-block w-60 ">
                        <img
                        className=" d-block x w-50"
                        src="images\about\Tony.png"
                        alt="vivid 2"
                        />
                        <Carousel.Caption className='text-team  w-75'>
                        <h3 >Anthony Shone</h3>
                        <h4>PRODUCTION MANAGER</h4>
                        <p>EXTENSIVE BUILD &amp; MANUFACTURING EXPERIENCE WITH STATE-OF-THE-ART EQUIPMENT AND A PRODUCTION TEAM THAT EXCELS.</p>
                        </Carousel.Caption>
                    </div>
                    </Carousel.Item>
                </Carousel>
</div>

<div className='mision'>
                <h1>OUR MISSION</h1>
                <p><span>"You imagine it, we create it"</span> is our charter here at Alchemy. With over 20 years experience in custom set and display manufacturing, the company has worked with over 100 of Australia’s leading brand agencies, and with over 2000 installations achieved we know our stuff. Our team of local and European craftspeople are multi-talented in all trades to produce high quality creations to represent your brand or environment.</p>
                <p>A community of production professionals with over 200 years of combined experience means the team at Alchemy has broad talent in all areas. From the design team through to account management, workshop and event logistics, our team presides over all areas of production and manufacturing to deliver your creative ideas.</p> 
            </div>
</main>
    );
}

export default AboutUsPage;