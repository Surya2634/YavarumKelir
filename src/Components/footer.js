import React from 'react';
import '../css/footer.css'
import { Container, Row, Col } from 'react-bootstrap';
<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
</style>

const Footer = ()=>{
    return(
        < div className='footer '>
        <Container className='footerContainer'>
            <Row>
                <Col className='xs-2 top' ><a className='a' href='https://www.facebook.com/யாவரும்-கேளீர்-திறன்-மேம்பாட்டு-கழகம்-102121138337560/' target="_blank">
                     <div className='fisrtflex'>
                         <div >
                             <img className='facebookimg' src = 'facebook.png' alt='faceBook Link'/>
                         </div>
                         <div>
                             <p className='text'>&nbsp;&nbsp;FaceBook</p>
                         </div>
                     </div>
                 </a></Col>
                <Col className='top'><a className='a ' href='https://twitter.com/YavarumKelirSda?s=08'  target="_blank">
                     <div className='fisrtflex'>
                         <div>
                             <img className='twitterimg' src='twitter.png' alt="Twitter Link"/>
                         </div>
                         <div>
                                 <p className='text twitterText'>&nbsp;&nbsp;Twitter</p>
                         </div>
                     </div>
                 </a></Col>
                <Col className='top'><a className='a' href='https://b.sharechat.com/m2rO7rZalab' target="_blank">
                     <div className='fisrtflex share'>
                         <div>
                             <img className='sharechat' src= 'sharechat.png' alt = 'Share Chat Link' />
                         </div>
                         <div>
                             <p className='text'>&nbsp;&nbsp;ShareChat</p>
                         </div>
                     </div>
                 </a></Col>
            </Row>
            <Row >
                <Col className='top'>
                    <a className='a' href='https://www.instagram.com/yavarum_kelir_sda?r=nametag' target="_blank">
                        <div className='fisrtflex'>
                            <div>
                                <img className='instaimg' src='instagram.png' alt = 'Instagram Link'/>
                            </div>
                            <div>
                                <p className='text'>&nbsp;&nbsp;Instagram</p>
                            </div>
                        </div>
                    </a>
                </Col>
                <Col className='top'>
                    <a className='a' href='https://www.youtube.com/c/யாவரும்கேளீர்' target="_blank">
                        <div className='fisrtflex'>
                            <div>
                                <img className = 'youtubeimg' src='youtube.png' alt='Youtube Link' />
                            </div>
                            <div>
                                <p className='text youtubeText'>&nbsp;&nbsp;Youtube</p>
                            </div>
                        </div>
                    </a>
                </Col>
                <Col className='top'>
                    <a className='a' href = 'https://t.me/yavarumkelirsda' target="_blank">
                    <div className='fisrtflex'>
                            <div>
                                <img className = 'Telegramimg' src= 'telegram.png' alt='Telegram Link'/>
                            </div>
                            <div>
                                <p className='text'>&nbsp;&nbsp;Telegram</p>
                            </div>
                        </div>
                    </a>
                </Col>
            </Row>
            <Row>
                <Col className='top'>                  
                    <text className='text'>Email Address : yavarumkelirsda@gmail.com</text>
                </Col>
                <Col className='top'><text className='nexux text '>For Technical Support&nbsp;:&nbsp;+91&nbsp;94871&nbsp;90850</text></Col>
            </Row>
            <div>
                <br/><p className='copyright' >Ⓒ2021 All Rights Reserved. Yavarum Kelir</p><br/>
            </div>
        </Container>
        </div>
    )
}

export default Footer;