import React from 'react'
import { AppBar, Toolbar, Box, Typography, Avatar, Button, Container, TextField } from '@mui/material'
import Beam from '../assets/profile.jpg'
import See from '../assets/see.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
export default function ProfilePage() {
    return (
        <>
            <Box>
                <AppBar position="static" sx={{ backgroundColor: 'black' }}>
                    <Toolbar>
                        <Typography sx={{ ml: 6, fontSize: '22px', mr: 'auto', fontFamily: "Arial Narrow", fontWeight: 'bold', opacity: 0.8, letterSpacing: '-0.7px', }}>
                            NONTAKORN PRAVATVITHISUK
                        </Typography>
                        <Typography sx={{ fontSize: '16px', opacity: 0.7 }}>
                            Work
                        </Typography >
                        <Typography sx={{ mx: 4, fontSize: '16px', opacity: 0.7 }}>
                            About
                        </Typography>
                        <Typography sx={{ mr: 4, fontSize: '16px', opacity: 0.7 }}>
                            Contact
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box sx={{ justifyContent: 'space-between', display: 'flex', mt: 8, mx: '10%'}}>
                <Box sx={{ display: 'flex', flexDirection: 'column', mt: 14 }}>
                    <Typography sx={{ fontSize: '80px', color: 'white', fontFamily: "Arial Narrow", fontWeight: 'bold', lineHeight: '1' }}>
                        HI, I AM <br />
                        NONTAKORN P.
                    </Typography>
                    <Typography sx={{ fontSize: '18px', color: 'white', opacity: 0.8, mt: 1 }}>
                        นักพัฒนาเว็ปไซต์ฝั่งฟรอนท์เอนท์จากประเทศไทย ที่มีความหลงไหลในการสร้าง <br />
                        เว็ปไซต์ที่เข้าถึงได้และเป็นมิตรกับผู้ใช้
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Button variant="contained" sx={{ mt: 6, backgroundColor: 'yellowgreen', width: 180, height: 50, borderRadius: '30px', color: 'black', fontSize: '18px' }}>CONTACK ME <Typography sx={{ ml: 3, fontSize: '10px', backgroundColor: 'transparent' }}>⚫</Typography></Button>
                        <Avatar sx={{ mx: 2, mt: 'auto', bgcolor: 'rgb(36, 34, 34)', width: 55, height: 55 }}>
                            <Typography sx={{ fontWeight: 'bold', color: 'yellowgreen', fontFamily: 'sans-serif', backgroundColor: 'transparent', fontSize: '20px' }}>
                                in
                            </Typography>
                        </Avatar>
                        <Avatar sx={{ mt: 'auto', bgcolor: 'rgb(36, 34, 34)', width: 55, height: 55 }}>
                            <GitHubIcon sx={{ backgroundColor: 'transparent', color: 'yellowgreen', fontSize: '23px' }} />
                        </Avatar>
                    </Box >
                </Box>
                <Avatar alt='beam' src={Beam} variant='rounded' sx={{ width: 550, height: 600, borderRadius: '20px' }}></Avatar>
            </Box>
            <Box sx={{ mt: 10 }}>
                <hr style={{ borderColor: 'rgb(77, 76, 76)', marginRight: '4%' }} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mx: '10%', mt: 8, color: 'white' }}>
                <Typography sx={{ fontSize: '70px', fontWeight: 'bold', fontFamily: 'Arial Narrow' }}>ABOUT ME</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', mt: 2.5}}>
                    <Typography sx={{ fontSize: '28px', opacity: 0.9 }}>
                        ผมเป็นนักพัฒนาเว็ปไซต์ฝั่งฟรอนท์เอนด์ที่ทำงานอยู่ใน <br />
                        นครปฐม กำลังมองหาโอกาศที่น่าตื่นเต้นในการทำงาน <br />
                        มีพื้นบานการศึกษาด้านวิศวกรรมซอฟแวร์</Typography>
                    <Typography sx={{ mt: 2, fontSize: '16px', opacity: 0.7 }}>
                        ชอบให้ความสำคัญกับการเข้าถึง (accessibility) เมื่อพัฒนาเว็บไซต์ มีความกระตือรือรั้นและอยากรู้<br />
                        อยากเห็นเกี่ยวกัยการแก้ปัญหาต่างๆ ปัจจุบันกำลังศึกษาเรียนรู้เกี่ยวกับ React.js และการออกแบบ<br />
                        เว็บไซต์เล็กน้อยเมื่อไม่ได้เขียนโปรแกรม ดิฉัน/ผมชอบเล่นฟุตบอล ถ่ายภาพ และเล่นเกม LOL<br />
                        กำลังเรียนรู้เพิ่มเติ่มเพื่อพัฒนาทักษะอยู่เสมอ
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Button variant="contained" sx={{ mt: 6, backgroundColor: 'yellowgreen', width: 250, height: 50, borderRadius: '30px', color: 'black', fontSize: '18px' }}>DOWLOAD RESUME<Typography sx={{ ml: 3, fontSize: '10px', backgroundColor: 'transparent' }}>⚫</Typography></Button>
                        <Avatar sx={{ mx: 2, mt: 'auto', bgcolor: 'rgb(36, 34, 34)', width: 55, height: 55 }}>
                            <Typography sx={{ fontWeight: 'bold', color: 'yellowgreen', fontFamily: 'sans-serif', backgroundColor: 'transparent', fontSize: '20px' }}>
                                in
                            </Typography>
                        </Avatar>
                        <Avatar sx={{ mt: 'auto', bgcolor: 'rgb(36, 34, 34)', width: 55, height: 55 }}>
                            <GitHubIcon sx={{ backgroundColor: 'transparent', color: 'yellowgreen', fontSize: '23px' }} />
                        </Avatar>
                    </Box >
                </Box>
            </Box>
            <Box sx={{ justifyContent: 'center', display: 'flex', mt: 6 }}>
                <Avatar alt='see' src={See} variant='rounded' sx={{ width: '90%', height: 700, borderRadius: '20px' }}></Avatar>
            </Box>
            <Box sx={{ mt: 6 }}>
                <hr style={{ borderColor: 'rgb(77, 76, 76)', marginRight: '4%' }} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 8, color: 'white', mx: '10%'}}>
                <Typography sx={{ fontSize: '60px', fontWeight: 'bold', fontFamily: 'Arial Narrow' }}>MY CAPABILITIES</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', mt: 2.5 ,width: '45%'}}>
                    <Typography sx={{ fontSize: '16px', opacity: 0.6 }}>
                        ผมมองหาโอกาศในการเพิ่มทักษะใหม่ อยู่เสมอ ทั้งการพัฒนาฟรอนท์เอนด์ แบล็กเอนต์<br />
                        การออกแบบ UX/UI ฐานข้อมูล
                    </Typography>
                    <Box sx={{ display: 'flex', mt: 4 }}>
                        <Box
                            sx={{
                                border: '1px solid white',
                                width: '100px',
                                height: '50px',
                                borderColor: 'rgb(77, 76, 76)',
                                borderRadius: '100px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                            }}
                        >
                            HTML
                        </Box>
                        <Box
                            sx={{
                                border: '1px solid white',
                                width: '100px',
                                height: '50px',
                                borderColor: 'rgb(77, 76, 76)',
                                borderRadius: '100px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                ml: 2
                            }}
                        >
                            CSS
                        </Box>
                        <Box
                            sx={{
                                border: '1px solid white',
                                width: '140px',
                                height: '50px',
                                borderColor: 'rgb(77, 76, 76)',
                                borderRadius: '100px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                ml: 2,
                                mr: 2
                            }}
                        >
                            JAVASCRIPT
                        </Box>
                        <Box
                            sx={{
                                border: '1px solid white',
                                width: '120px',
                                height: '50px',
                                borderColor: 'rgb(77, 76, 76)',
                                borderRadius: '100px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                            }}
                        >
                            FLUTTER
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', mt: 1 }}>
                        <Box
                            sx={{
                                border: '1px solid white',
                                width: '100px',
                                height: '50px',
                                borderColor: 'rgb(77, 76, 76)',
                                borderRadius: '100px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                            }}
                        >
                            DART
                        </Box>
                        <Box
                            sx={{
                                border: '1px solid white',
                                width: '90px',
                                height: '50px',
                                borderColor: 'rgb(77, 76, 76)',
                                borderRadius: '100px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                ml: 2
                            }}
                        >
                            IoT
                        </Box>
                        <Box
                            sx={{
                                border: '1px solid white',
                                width: '100px',
                                height: '50px',
                                borderColor: 'rgb(77, 76, 76)',
                                borderRadius: '100px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                ml: 2,
                                mr: 2
                            }}
                        >
                            REACT
                        </Box>
                        <Box
                            sx={{
                                border: '1px solid white',
                                width: '120px',
                                height: '50px',
                                borderColor: 'rgb(77, 76, 76)',
                                borderRadius: '100px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                            }}
                        >
                            DATABASE
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ mt: 10 }}>
                <hr style={{ borderColor: 'rgb(77, 76, 76)', marginRight: '4%' }} />
            </Box>
            <Box sx={{ display: 'flex',justifyContent: 'space-between', mt: 8 ,color:'white',mx:'10%'}}>
                <Typography sx={{fontSize: '60px', fontWeight: 'bold', fontFamily: 'Arial Narrow' }}>MY EXPERIENCE</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', mt: 2.5,width:'44%'}}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                        <Typography sx={{ fontSize: '20px', fontWeight: 'bold', fontFamily: 'Arial Narrow' }}>Freelancer Developer</Typography>
                        <Typography sx={{ fontSize: '16px', opacity: 0.7 }}>NOV 2023 - Present</Typography>
                    </Box>
                    <Typography sx={{ mt: 1, fontSize: '16px', opacity: 0.7 }}>
                        พัฒนาและปรับปรุงส่วนติดต่อผู้ใช้งสำหรับเว็ปแอปพลิเคชันโดยใช้ React.js<br />
                        ทำงานร่วมกับทีมออกแบบ UX/UI เพื่อสร้างประสบการณ์ผู้ใช้ที่น่าประทับใจ<br />
                        ปรับปรุงความเร็วในการโหลดเว็ปไซต์ด้วยเทคนิคการเพิ่มประสิทธิภาพต่างๆ<br />
                        ร่วมพัฒนาและดูแลไลบารคอมโพเนนต์ภายในองค์กร
                    </Typography>
                    <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <Typography sx={{ fontSize: '20px', fontWeight: 'bold', fontFamily: 'Arial Narrow' }}>Front-End Intern</Typography>
                        <Typography sx={{ fontSize: '16px', opacity: 0.7 }}>Sep 2023 - Nov 2023</Typography>
                    </Box>
                    <Typography sx={{ mt: 1, fontSize: '16px', opacity: 0.7 }}>
                        พัฒนาเว็บไซต์ลูกค้าโดยใช้ HTML,CSS และ JavaScript<br />
                        ช่วยปรับปรุงการเข้าถึง (Accessibility) ของเว็บไซต์ให้สอดคล้องกับมาตรฐาน<br />
                        WCAG<br />
                        ทำงานร่วมกับทีมแบ็คเอนด์เพื่อเชื่อมต่อ API
                    </Typography>

                </Box>
            </Box>
            <Box sx={{ mt: 10 }}>
                <hr style={{ borderColor: 'rgb(77, 76, 76)', marginRight: '4%' }} />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', mt: 8 ,mx:'10%',color:'white'}}>

                <Box display={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontSize: '70px', fontWeight: 'bold', fontFamily: 'Arial Narrow' }}>
                        LET's CONNECT
                    </Typography>
                    <Typography sx={{ opacity: 0.7 }}>
                        Say hello at <u style={{ textDecorationColor: 'yellowgreen' }}>s6419410001@sau.ac.th</u><br />
                        For more info, here's my <u style={{ textDecorationColor: 'yellowgreen' }}>resume</u><br />
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', mt: 4 }}>
                        <Typography sx={{ fontWeight: 'bold', color: 'yellowgreen', fontFamily: 'sans-serif', backgroundColor: 'transparent', fontSize: '20px' }}>in</Typography>
                        <GitHubIcon sx={{ color: 'yellowgreen', mx: 3 }} />
                        <XIcon sx={{ color: 'yellowgreen', mr: 3 }} />
                        <InstagramIcon sx={{ color: 'yellowgreen' }} />
                    </Box>
                    <Box sx={{ display: 'flex', mt: '86%' }}>
                        <Typography>©️2025 Nontakorn Pravatvithisuk</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mt: 2.5, ml: 16 ,width:'44%'}}>
                    <Typography sx={{ mb: 1 }}>Name</Typography>
                    <TextField sx={{ width: '550px', backgroundColor: 'rgb(47, 47, 47)', borderRadius: '5px' }} />
                    <Typography sx={{ mb: 1, mt: 3 }}>Email</Typography>
                    <TextField sx={{ width: '550px', backgroundColor: 'rgb(47, 47, 47)', borderRadius: '5px' }} />
                    <Typography sx={{ mb: 1, mt: 3 }}>Subject</Typography>
                    <TextField sx={{ width: '550px', backgroundColor: 'rgb(47, 47, 47)', borderRadius: '5px' }} />
                    <Typography sx={{ mb: 1, mt: 3 }}>Message</Typography>
                    <TextField multiline
                        rows={5} sx={{ width: '500px', backgroundColor: 'rgb(47, 47, 47)', borderRadius: '5px' }} />
                    <Button variant="contained" sx={{ mt: 6, backgroundColor: 'yellowgreen', width: 150, height: 50, borderRadius: '30px', color: 'black', fontSize: '18px' }}>SUBMIT</Button>
                </Box>
            </Box>
            <Box sx={{ height: '100px' }} />
        </>
    )
}
