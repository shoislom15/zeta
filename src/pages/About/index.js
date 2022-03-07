import { Container } from '@mui/material';
import React from 'react'
import CountUp  from 'react-countup';
import AboutWrapper from './AboutWrapper';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';


const numeral = require("numeral");
const num1 = <CountUp className='text-primary text-5xl' end= {2230000} duration = {5} />
function About() {
  return (
    <AboutWrapper>
        <Container className='mt-[100px] p-0 m-0'>
        <div>
            <p className='text-primary font-semibold text-center lg:text-left'>About us</p>
            <div className='flex flex-col gap-8 lg:flex-row mt-10 '>
                <div className='lg:w-1/3 flex items-end justify-center lg:items-start px-10 lg:p-0 lg:justify-start text-center lg:text-left'>
                <p className='text-4xl font-semibold'>
                    We Make The Best For All Our Customers.
                </p>
                </div>
                <div className='lg:w-1/3 lg:max-w-[350px] overflow-hidden text-footerText px-10 lg:p-0 flex text-center lg:text-left'>
                <p>Curabitur ullamcorper ultricies nisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci.</p>
                </div>
                <div className='lg:w-1/3 lg:max-w-[350px] overflow-hidden text-footerText px-10 lg:p-0 flex text-center lg:text-left'>
                <p>Curabitur ullamcorper ultricies nisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci.</p>
                </div>
            </div>
        </div>
        <div className="bg-about-career mt-[100px] bg-cover w-full h-[700px] rounded-2xl flex">
        <div className='lg:w-1/2'></div>
        <div className='lg:w-1/2  w-full flex flex-col justify-center items-center bg-gradient rounded-2xl lg:rounded-none'>
            <div className='max-w-md text-white'>
                <p className='font-semibold text-5xl text-center lg:text-left'>Our Agency Has Been</p>
                <p className='mt-8 text-center lg:text-left'>Hello. Our agency has been present for over 20 years. We make the best for all our customers.</p>
            </div>
            <div className='flex flex-wrap mt-[100px] text-center'>
                <div className='w-1/2'>
                <h1 className='text-primary text-3xl md:text-5xl'>
                    {numeral(2230000).format("0.00a+")}
                </h1>
                <p className='text-footerText mt-6'>Jobs</p>
                </div>
                <div className='w-1/2'>
                <h1 className='text-primary text-3xl md:text-5xl'>
                    {numeral(2230000).format("0.00a+")}
                </h1>
                <p className='text-footerText mt-6'>Jobs</p>
                </div>
                <div className='w-1/2 mt-8'>
                <h1 className='text-primary text-3xl md:text-5xl'>
                    {numeral(2230000).format("0.00a+")}
                </h1>
                <p className='text-footerText mt-6'>Jobs</p>
                </div>
                <div className='w-1/2 mt-8'>
                <h1 className='text-primary text-3xl md:text-5xl'>
                    {numeral(2230000).format("0.00a+")}
                </h1>
                <p className='text-footerText mt-6'>Jobs</p>
                </div>
            </div>
        </div>
        </div>
        <div className='flex gap-10 flex-col lg:flex-row h-[500px] mt-[100px]'>
            <div className='lg:w-1/3 flex flex-col justify-center items-center'>
                <p className='text-4xl font-semibold'>Fusce convallis metus id felis luctus</p>
                <p className='text-footerText mt-8'>Fusce convallis metus id felis luctus adipiscing. Etiam imperdiet imperdiet orci. Vestibulum eu odio. Phasellus nec sem in justo pellentesque facilisis.</p>
            </div>
            <div className='lg:w-1/3 bg-[url(https://zone-assets-api.vercel.app/assets/images/career/career_about_introduce.jpg)] bg-cover rounded-2xl'></div>
            <div className='lg:w-1/3 flex flex-col justify-center items-center'>
                <p className='text-4xl font-semibold'>Fusce convallis metus id felis luctus</p>
                <p className='text-footerText mt-8'>Fusce convallis metus id felis luctus adipiscing. Etiam imperdiet imperdiet orci. Vestibulum eu odio. Phasellus nec sem in justo pellentesque facilisis.</p>
            </div>
        </div>
        <div className='mt-[100px] flex justify-center items-center'>
            <div className='max-w-lg'>
                <p className='text-5xl font-semibold text-center'>Our Team</p>
                <p className='text-footerText text-center mt-10'>Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros.</p>
            </div>
        </div>
    </Container>
        <div className='flex flex-wrap mt-[100px]'>
            <div className='lg:w-1/4 lg:h-[280px] relative hoverCard md:w-1/2 h-[500px] w-full'>
                <img src='https://zone-assets-api.vercel.app/assets/images/members/member_1.jpg' className='object-cover w-full h-full absolute' />
                <div className='text-white text-center justify-center items-center flex-col absolute bg-black opacity-70 w-full h-full cardHover'>
                    <p className='font-semibold text-xl'>Jayvion Simon</p>
                    <p className='text-footerText mt-4'>UX Designer</p>
                    <div className='flex text-primary text-center gap-4 mt-4'>
                        <Facebook/>
                        <Instagram/>
                        <Instagram/>
                        <Twitter/>
                    </div>
                </div>
            </div>
            <div className='lg:w-1/4 lg:h-[280px] relative hoverCard md:w-1/2 h-[500px] w-full'>
                <img src='https://zone-assets-api.vercel.app/assets/images/members/member_2.jpg' className='object-cover w-full h-full absolute' />
                <div className='text-white text-center justify-center items-center flex-col absolute bg-black opacity-70 w-full h-full cardHover'>
                    <p className='font-semibold text-xl'>Lucian Obrien</p>
                    <p className='text-footerText mt-4'>Full Stack Designer</p>
                    <div className='flex text-primary text-center gap-4 mt-4'>
                        <Facebook/>
                        <Instagram/>
                        <Instagram/>
                        <Twitter/>
                    </div>
                </div>
            </div>
            <div className='lg:w-1/4 lg:h-[280px] relative hoverCard md:w-1/2 h-[500px] w-full'>
                <img src='	https://zone-assets-api.vercel.app/assets/images/members/member_3.jpg' className='object-cover w-full h-full absolute' />
                <div className='text-white text-center justify-center items-center flex-col absolute bg-black opacity-70 w-full h-full cardHover'>
                    <p className='font-semibold text-xl'>Deja Brady</p>
                    <p className='text-footerText mt-4'>Backend Developer</p>
                    <div className='flex text-primary text-center gap-4 mt-4'>
                        <Facebook/>
                        <Instagram/>
                        <Instagram/>
                        <Twitter/>
                    </div>
                </div>
            </div>
            <div className='lg:w-1/4 lg:h-[280px] relative hoverCard md:w-1/2 h-[500px] w-full'>
                <img src='https://zone-assets-api.vercel.app/assets/images/members/member_4.jpg' className='object-cover w-full h-full absolute' />
                <div className='text-white text-center justify-center items-center flex-col absolute bg-black opacity-70 w-full h-full cardHover'>
                    <p className='font-semibold text-xl'>Harrison Stein</p>
                    <p className='text-footerText mt-4'>UX Designer</p>
                    <div className='flex text-primary text-center gap-4 mt-4'>
                        <Facebook/>
                        <Instagram/>
                        <Instagram/>
                        <Twitter/>
                    </div>
                </div>
            </div>
            <div className='lg:w-1/4 lg:h-[280px] relative hoverCard md:w-1/2 h-[500px] w-full'>
                <img src='https://zone-assets-api.vercel.app/assets/images/members/member_5.jpg' className='object-cover w-full h-full absolute' />
                <div className='text-white text-center justify-center items-center flex-col absolute bg-black opacity-70 w-full h-full cardHover'>
                    <p className='font-semibold text-xl'>Reece Chung</p>
                    <p className='text-footerText mt-4'>UX Designer</p>
                    <div className='flex text-primary text-center gap-4 mt-4'>
                        <Facebook/>
                        <Instagram/>
                        <Instagram/>
                        <Twitter/>
                    </div>
                </div>
            </div>  
            <div className='lg:w-1/4 lg:h-[280px] relative hoverCard md:w-1/2 h-[500px] w-full'>
                <img src='	https://zone-assets-api.vercel.app/assets/images/members/member_6.jpg' className='object-cover w-full h-full absolute' />
                <div className='text-white text-center justify-center items-center flex-col absolute bg-black opacity-70 w-full h-full cardHover'>
                    <p className='font-semibold text-xl'>Lainey Davidson</p>
                    <p className='text-footerText mt-4'>Project Manager</p>
                    <div className='flex text-primary text-center gap-4 mt-4'>
                        <Facebook/>
                        <Instagram/>
                        <Instagram/>
                        <Twitter/>
                    </div>
                </div>
            </div>  
            <div className='lg:w-1/4 lg:h-[280px] relative hoverCard md:w-1/2 h-[500px] w-full'>
                <img src='https://zone-assets-api.vercel.app/assets/images/members/member_7.jpg' className='object-cover w-full h-full absolute' />
                <div className='text-white text-center justify-center items-center flex-col absolute bg-black opacity-70 w-full h-full cardHover'>
                    <p className='font-semibold text-xl'>Cristopher Cardenas</p>
                    <p className='text-footerText mt-4'>Leader</p>
                    <div className='flex text-primary text-center gap-4 mt-4'>
                        <Facebook/>
                        <Instagram/>
                        <Instagram/>
                        <Twitter/>
                    </div>
                </div>
            </div>  
            <div className='lg:w-1/4 lg:h-[280px] relative hoverCard md:w-1/2 h-[500px] w-full'>
                <img src='	https://zone-assets-api.vercel.app/assets/images/members/member_8.jpg' className='object-cover w-full h-full absolute' />
                <div className='text-white text-center justify-center items-center flex-col absolute bg-black opacity-70 w-full h-full cardHover'>
                    <p className='font-semibold text-xl'>Melanie Noble</p>
                    <p className='text-footerText mt-4'>Backend Developer</p>
                    <div className='flex text-primary text-center gap-4 mt-4'>
                        <Facebook/>
                        <Instagram/>
                        <Instagram/>
                        <Twitter/>
                    </div>
                </div>
            </div>  
        </div>
        <Container>
        
        </Container>
    </AboutWrapper>
  )
}
export default About;