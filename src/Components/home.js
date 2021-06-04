import React from 'react';
// import '../css/home.css'
require ('../css/home.css');
<style>
@import url('https://fonts.googleapis.com/css2?family=Baloo+Thambi+2:wght@800&display=swap');
</style>


const Home = ()=>{
    return(
        <div className='firstFlex'>
           <div>
               <img className='first-logo' src='OrgLogo.png' alt = 'Logo' />
           </div>
           <div className='SecondFlex'>
               <div>
                   <b className='heading'>யாவரும் கேளீர்</b>
               </div>
               <div>
                    <p className='bluetext'>திறன் வளர் சங்கம்</p>
               </div>
               <div>
                    <p className='bluetext pathivu'>பதிவு எண் : 4 / 2021</p>
               </div>
               <div>
                    <p className='bluetext pathivu'>அத்தனுர், நாமக்கல் மாவட்டம், தமிழ்நாடு - 636301</p>
               </div>
           </div>
           <div>
               <img className='first-logo second-logo' src='OrgLogo2.png' alt = 'Second Logo' />
            </div>
        </div>
    )
}


export default Home;