import { Container } from '@mui/material';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import InputField from './../../components/Input';
import ContactInput from '../../components/ContactInput';
import ButtonComponents from '../../components/Button';

function Contact(props) {
  return (
    <Container className ='mt-[100px]' >
        <div className='pt-[100px] '>
            <p className='font-semibold text-4xl flex justify-center items-center lg:block '>Get In Touch</p>
            <p className='font-semibold mt-10 flex justify-center items-center lg:block'>We'd love to talk about how we can help you.</p>
        </div>
        <div className='mt-[100px] flex gap-10 flex-col lg:flex-row justify-center items-center lg:items-start lg:justify-start'>
            <div className='flex flex-col justify-center items-center lg:block'>
                <p className='text-primary'>Email</p>
                <p className='cursor-pointer mt-4'><a>hello@example.com</a></p>
            </div>
            <div className='flex flex-col justify-center items-center lg:block'>
                <p className='text-primary'>Phone</p>
                <p className='mt-4'><a>(907) 555-0101</a></p>
            </div>
            <div className='flex flex-col justify-center items-center lg:block'>
                <p className='text-primary'>Address</p>
                <p className='mt-4'><a>3891 Ranchview Dr. Richardson, California 62639</a></p>
            </div>
            <div className='flex flex-col justify-center items-center lg:block'>
                <p className='text-primary'>Follow Us</p>
                <div className='mt-2'>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <IconButton >
                            <Facebook className='text-black' />
                        </IconButton>
                        <IconButton >
                            <Instagram className='text-black'/>
                        </IconButton>
                        <IconButton >
                            <Instagram className='text-black'/>
                        </IconButton>
                        <IconButton >
                            <Twitter className='text-black'/>
                        </IconButton>
                    </Stack>
                </div>
            </div>
        </div>
        <div className='mt-[100px] flex flex-col justify-center items-center'>
            <div className='text-center'>
                <p className='text-4xl font-semibold'>Drop Us A Line</p>
                <p className='text-footerText mt-6'>We normally respond within 2 business days</p>
            </div>
            <div className='w-2/3 gap-6 mt-10'>
               <ContactInput />
               <div className='flex justify-center items-center mt-10'>
                   <ButtonComponents text= 'Send Messages' />
               </div>
            </div>
        </div>
    </Container>
  )
}
export default Contact;
