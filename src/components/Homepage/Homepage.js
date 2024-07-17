import React from 'react'
import kau from '../../assets/kau.png'
import mil from '../../assets/mil.png'
import spec from '../../assets/spec.png'
import lifeline from '../../assets/lifeline.png'
import global from '../../assets/global.png'
import masina from '../../assets/masina.png'
import shalin from '../../assets/shalin.png'
import heart from '../../assets/heart.png'
import brain from '../../assets/brain.png'
import gyn from '../../assets/gyn.png'
import rad from '../../assets/rad.png'
import nurse from '../../assets/nurse.png'
import op from '../../assets/op.png'
import lady from '../../assets/lady.png'
import one from '../../assets/1.png'
import two from '../../assets/2.png'
import three from '../../assets/3.png'
import wave from '../../assets/wave.png'
import map from '../../assets/map.png'
import reg from '../../assets/reg.png'
import { Eye, GreenHeart, Lock, People, Privacy, Profile, Resubmit, Review, RightTick, Tick, WrongTick } from '../../reusable/Icons'


export default function HomePage() {

  const imageData = [
    {
      img: kau
  },
  {
    img: mil
},
{
  img: spec
},
{
  img: lifeline
},
{
  img: global
},
{
  img: masina
},
{
  img: shalin
}

]

const oppData = [
  {
    title : "Cardiology",
    available: "3 Vacancies Available",
    logo: heart
  },
  {
    title : "Neurology",
    available: "3 Vacancies Available",
    logo: brain
    
  },
  {
    title : "Gynecology",
    available: "3 Vacancies Available",
    logo: gyn
  },
  {
    title : "Radiology",
    available: "3 Vacancies Available",
    logo: rad
  },
  {
    title : "Nursing",
    available: "3 Vacancies Available",
    logo: nurse
  },
  {
    title : "Critical Care",
    available: "3 Vacancies Available",
    logo: op
  }
]

const drData = [
  {
    title : "Dr Kiran S.",
    role: "Consultant - Anaesthetics",
    logo: one,
    location: "📍   Mumbai",
    available: "✅    Available Now",
    shift:"🕓    20 shifts / month",
    pay:"💰   $100 / hour"

  },
  {
    title : "Dr Jamie M.",
    role: "Registrar - Acute Medicine",
    logo: two,
    location: "📍   Mumbai",
    available: "✅    Available Now",
    shift:"🕓    20 shifts / month",
    pay:"💰   $100 / hour"
    
  },
  {
    title : "Dr Maria C.",
    role: "SHO - Emergency Medicine",
    logo: three,
    location: "📍   Mumbai",
    available: "✅    Available Now",
    shift:"🕓    20 shifts / month",
    pay:"💰   $100 / hour"
  }
]

 return(
  <div className='Homepage'>
   

    <div className='landing-box-main' >
      <div className='landing-box'>
      <div className='landing-box-lext'>
        <div className='text-box'>
         <span className='soft'> Making Locum Recruiting And Locum Job Search</span> 
        <span className='built'> Hassel-Free, Easy and Fast  </span> 

        <p className='para'>Make the best locum agencies compete to find your perfect locum
jobs. Get offered real shifts, matched exactly to your needs, before
you’ve shared your contact details 🎉</p>
        </div>
        
          <div className='btn-box' >
           <button className='start-btn'>Register now</button>
      
          </div>
          <div className='search-arrow'>
          <p>Search for Locum</p> 
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="#033B61"/>
</svg>

          </div>
      
       </div>
       <div className='landing-box-right'>
        <img src={lady} alt='lady' />
        
       </div>
      </div>
      </div>
       <div className='landing-bar'>
  <h1>Trusted Hospitals</h1>
<div className='landing-bar-logo'>

{

  imageData.map((data) =>(

    <div key={data.id} className='landing-bar-img'>
      <img src={data.img} alt="locum"></img>
    
    </div>

  ))
}

 

    </div>
    </div>
   
    <div className='explore-box-main'>
      
    <h1>Explore Locum opportunities</h1>
      <p className='para'>Provide qualified recruitment especially across India</p>
      <div className='explore-box'>
      {
oppData.map((data) =>( 
  <div key={data.id} className='explore-small-box'>
     <img src={data.logo} alt="logo"></img>
    <div className='explore-small-box-text'>
    <h4>{data.title}</h4>
    <div style={{display : "flex" , marginTop : "10px"}}>
     <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.44727 14.6797C4.95508 15.2266 5.69727 15.5 6.43945 15.5C6.94727 15.5 7.41602 15.3828 7.8457 15.1484L5.77539 20.1484C5.61914 20.5391 5.07227 20.6562 4.75977 20.3047L3.35352 18.8203L1.2832 18.8984C0.853516 18.9375 0.501953 18.4688 0.697266 18.0391L2.45508 13.7031C2.76758 13.9375 3.08008 14.1328 3.4707 14.2109C4.25195 14.4453 4.0957 14.3281 4.44727 14.6797ZM15.5801 18.0391C15.7754 18.4688 15.4238 18.9375 14.9941 18.8984L12.9238 18.8203L11.5176 20.3047C11.2051 20.6562 10.6582 20.5391 10.502 20.1484L8.43164 15.1484C8.86133 15.3828 9.33008 15.5 9.83789 15.5C10.5801 15.5 11.3223 15.2266 11.8301 14.6797C12.1816 14.3281 11.9863 14.4453 12.8457 14.2109C13.1973 14.1328 13.5098 13.9375 13.8223 13.7031L15.5801 18.0391ZM10.9316 13.7812C10.3848 14.3281 9.60352 14.4062 8.97852 14.0156C8.74414 13.8594 8.43164 13.7812 8.11914 13.7812C7.8457 13.7812 7.5332 13.8594 7.29883 14.0156C6.67383 14.4062 5.89258 14.3281 5.38477 13.7812C4.79883 13.1953 4.7207 13.2344 3.86133 13C3.31445 12.8828 2.88477 12.4531 2.72852 11.8672C2.45508 10.7734 2.5332 10.8906 1.71289 10.1094C1.32227 9.67969 1.16602 9.09375 1.32227 8.54688C1.5957 7.45312 1.5957 7.60938 1.32227 6.47656C1.16602 5.92969 1.32227 5.34375 1.71289 4.95312C2.5332 4.13281 2.45508 4.25 2.72852 3.15625C2.88477 2.60938 3.31445 2.17969 3.86133 2.02344C4.95508 1.71094 4.79883 1.78906 5.61914 0.96875C6.00977 0.578125 6.5957 0.421875 7.14258 0.578125C8.19727 0.851562 8.08008 0.851562 9.13477 0.578125C9.68164 0.421875 10.2676 0.578125 10.6582 0.96875C11.4785 1.78906 11.3223 1.71094 12.416 2.02344C12.9629 2.17969 13.3926 2.60938 13.5488 3.15625C13.8223 4.25 13.7441 4.13281 14.5645 4.95312C14.9551 5.34375 15.1113 5.92969 14.9551 6.47656C14.6816 7.60938 14.6816 7.45312 14.9551 8.54688C15.1113 9.09375 14.9551 9.67969 14.5645 10.1094C13.7441 10.8906 13.8223 10.7734 13.5488 11.8672C13.3926 12.4531 12.9629 12.8828 12.416 13C11.5957 13.2344 11.5176 13.1953 10.9316 13.7812ZM4.44727 7.375C4.44727 9.44531 6.08789 11.125 8.1582 11.125C10.1895 11.125 11.8301 9.44531 11.8301 7.375C11.8301 5.30469 10.1895 3.625 8.1582 3.625C6.08789 3.625 4.44727 5.30469 4.44727 7.375Z" fill="black"/>
</svg> 
<p>{data.available}</p>
      </div>
   
      </div>

   
    </div>

))}


      </div>
      <button className='btn'>More</button>
 
    </div>

    <div className='tool-box-main'>
        <p>OUR Locum’s</p>
      <h1>Your best sourcing tool for doctors.</h1>
        <p className='para'>We've hand-picked the best doctors from our network who are actively </p>
       <p className='para'> looking for locum work.</p>
        <div className='tool-box'>
        {
  drData.map((data) =>( 
    <div key={data.id} className='tool-small-box'>
       <img src={data.logo} alt="logo"></img>
      <div className='tool-small-box-text'>
      <h4>{data.title}</h4>
      <h3>{data.role}</h3>
      <p>{data.location}</p>
  <p>{data.available}</p>
  <p>{data.shift}</p>
  <p>{data.pay}</p>
        </div>
        <button className='tool-box-btn'>VIEW PROFILE <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.7762 5.18994L9.48332 1.89705C9.0928 1.50652 9.0928 0.873359 9.48332 0.482835C9.87385 0.0923103 10.507 0.0923103 10.8975 0.482835L15.8975 5.48283C16.2881 5.87336 16.2881 6.50652 15.8975 6.89705L10.8975 11.897C10.507 12.2876 9.87385 12.2876 9.48332 11.897C9.0928 11.5065 9.0928 10.8734 9.48332 10.4828L12.7762 7.18994H1.19043C0.638145 7.18994 0.19043 6.74223 0.19043 6.18994C0.19043 5.63766 0.638145 5.18994 1.19043 5.18994H12.7762Z" fill="#2A8DF3"/>
<path d="M12.7762 5.18994L9.48332 1.89705C9.0928 1.50652 9.0928 0.873359 9.48332 0.482835C9.87385 0.0923103 10.507 0.0923103 10.8975 0.482835L15.8975 5.48283C16.2881 5.87336 16.2881 6.50652 15.8975 6.89705L10.8975 11.897C10.507 12.2876 9.87385 12.2876 9.48332 11.897C9.0928 11.5065 9.0928 10.8734 9.48332 10.4828L12.7762 7.18994H1.19043C0.638145 7.18994 0.19043 6.74223 0.19043 6.18994C0.19043 5.63766 0.638145 5.18994 1.19043 5.18994H12.7762Z" fill="#968DF5"/>
<path d="M12.7762 5.18994L9.48332 1.89705C9.0928 1.50652 9.0928 0.873359 9.48332 0.482835C9.87385 0.0923103 10.507 0.0923103 10.8975 0.482835L15.8975 5.48283C16.2881 5.87336 16.2881 6.50652 15.8975 6.89705L10.8975 11.897C10.507 12.2876 9.87385 12.2876 9.48332 11.897C9.0928 11.5065 9.0928 10.8734 9.48332 10.4828L12.7762 7.18994H1.19043C0.638145 7.18994 0.19043 6.74223 0.19043 6.18994C0.19043 5.63766 0.638145 5.18994 1.19043 5.18994H12.7762Z" fill="#0866C6"/>
</svg>
</button>
     
      </div>
  
  ))}
  
  
        </div>
        <button className='btn'>Explore More</button>
   
      </div>

      <div className='compare-box-main'>
      <p className='para'>HOW IT WORKS</p>
      <h1>The <span>new and better way </span> to
     </h1>
      <h1> find locums</h1>
       <div className='compare-box'>
       <div className='compare-box-left'>
        <h2>Without Locum</h2>
        <p>Take a chance on one or two agencies. Can be slow, inefficient and
        with variable success</p>
        <hr></hr>
     <ul>
      <li><WrongTick/>  No visibility on locum jobs and rates before joining</li>
      <li><WrongTick/>  Limited access to locums depending on your agency</li>
      <li><WrongTick/>  Unknown quality of recruiters and agencies</li>
      <li><WrongTick/>  Frequent phone calls, often unsolicited</li>
      <li><WrongTick/>  Slow registration and paperwork process</li>
     </ul>
  
  
     </div>
     <div className='compare-box-right'>
     <h2>Using Locum to find locums</h2>
        <p>Access the whole locum market from one place, with control</p>
        <p>throughout</p>

        <hr></hr>
     <ul>
      <li><RightTick /> See all locum jobs and rates upfront before registering</li>
      <li><RightTick /> Access to the whole locum agency market, in one place</li>
      <li><RightTick /> Only work with trusted agencies, with ratings from doctors</li>
      <li><RightTick /> Stay anonymous until you're ready to share contact details</li>
      <li><RightTick /> Store and share all your registration documents online</li>
     </ul>


  </div>
       </div>
       
   
      </div>

      <div  className='praise-box'>
      <div  className='praise-small-box'>
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="80" height="80" rx="5" fill="#E2F8F8"/>
<path d="M53.75 30.75H26.25C25.5596 30.75 25 31.3096 25 32V52C25 52.6904 25.5596 53.25 26.25 53.25H53.75C54.4404 53.25 55 52.6904 55 52V32C55 31.3096 54.4404 30.75 53.75 30.75Z" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M46.25 30.75V28.25C46.25 27.587 45.9866 26.9511 45.5177 26.4822C45.0489 26.0134 44.413 25.75 43.75 25.75H36.25C35.587 25.75 34.9511 26.0134 34.4823 26.4822C34.0134 26.9511 33.75 27.587 33.75 28.25V30.75" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M40 37.625V46.375" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M44.375 42H35.625" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    <h1>Choice of jobs</h1>
    <p>Twenty of the best locum agencies
compete for you on Messly. You
see what shifts they have upfront.
More choice means higher rates,
less travel and better rotas.</p>
      </div>
      <div className='praise-small-box'>
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="80" height="80" rx="5" fill="#E9E7FF"/>
<path d="M40.6877 49.2969L48.5627 54.2969C49.5784 54.9376 50.8284 53.9844 50.5315 52.8126L48.2502 43.8438C48.1885 43.5952 48.1984 43.3342 48.2785 43.0909C48.3587 42.8477 48.506 42.6319 48.7034 42.4688L55.7659 36.5782C56.6877 35.8126 56.219 34.2657 55.0159 34.1876L45.7971 33.5938C45.5456 33.5792 45.3037 33.4916 45.1012 33.3417C44.8986 33.1918 44.7441 32.9863 44.6565 32.7501L41.219 24.0938C41.128 23.8436 40.9622 23.6275 40.7442 23.4748C40.5261 23.3221 40.2664 23.2402 40.0003 23.2402C39.734 23.2402 39.4744 23.3221 39.2563 23.4748C39.0383 23.6275 38.8725 23.8436 38.7815 24.0938L35.344 32.7501C35.2564 32.9863 35.1019 33.1918 34.8993 33.3417C34.6968 33.4916 34.4549 33.5792 34.2034 33.5938L24.9846 34.1876C23.7815 34.2657 23.3127 35.8126 24.2346 36.5782L31.2971 42.4688C31.4945 42.6319 31.6418 42.8477 31.722 43.0909C31.8021 43.3342 31.8119 43.5952 31.7502 43.8438L29.6409 52.1563C29.2815 53.5626 30.7815 54.7032 31.9846 53.9376L39.3127 49.2969C39.5182 49.1662 39.7568 49.0968 40.0003 49.0968C40.2438 49.0968 40.4822 49.1662 40.6877 49.2969Z" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          <h1>Trusted agencies</h1>
          <p>We've selected the best-rated, most
reliable agencies. See ratings from
doctors before you speak to them,
so you only work with the best.</p>
      </div>
      <div className='praise-small-box'>
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="80" height="80" rx="5" fill="#F3EBE3"/>
<path d="M40 44.5C43.4517 44.5 46.25 41.7017 46.25 38.25C46.25 34.7983 43.4517 32 40 32C36.5483 32 33.75 34.7983 33.75 38.25C33.75 41.7017 36.5483 44.5 40 44.5Z" stroke="black" stroke-width="2.5" stroke-miterlimit="10"/>
<path d="M29.9688 50.6561C30.9092 48.8038 32.3443 47.2479 34.1149 46.161C35.8855 45.0743 37.9225 44.499 40 44.499C42.0775 44.499 44.1145 45.0743 45.8851 46.161C47.6556 47.2479 49.0908 48.8038 50.0313 50.6561" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M51.25 30.75C52.6307 30.75 53.75 29.6307 53.75 28.25C53.75 26.8693 52.6307 25.75 51.25 25.75C49.8693 25.75 48.75 26.8693 48.75 28.25C48.75 29.6307 49.8693 30.75 51.25 30.75Z" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M51.25 25.75V23.875" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49.0781 27L47.4688 26.0625" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49.0781 29.5L47.4688 30.4375" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M51.25 30.75V32.625" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M53.4219 29.5L55.0313 30.4375" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M53.4219 27L55.0313 26.0625" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M54.8906 37.7029C54.9664 38.2988 55.003 38.8991 55 39.4998C55 42.4664 54.1203 45.3666 52.472 47.8333C50.8239 50.3001 48.4811 52.2227 45.7402 53.3579C42.9994 54.4933 39.9834 54.7903 37.0736 54.2116C34.164 53.6328 31.4912 52.2042 29.3934 50.1064C27.2956 48.0086 25.867 45.3358 25.2882 42.4262C24.7095 39.5164 25.0065 36.5004 26.1418 33.7596C27.2771 31.0186 29.1997 28.676 31.6665 27.0277C34.1333 25.3795 37.0333 24.4998 40 24.4998C40.4642 24.4969 40.9285 24.5177 41.3906 24.5623" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          <h1>Personalised to you</h1>
          <p>Set your locum wishlist on Messly,
and only see jobs matched exactly
to your needs. No spam, no time-
wasting and a personalised service
for you.</p>
      </div>
      <div className='praise-small-box'>
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="80" height="80" rx="5" fill="#E3F3E4"/>
<path d="M28.0934 38.5468C27.9087 38.2267 27.6628 37.9462 27.3697 37.7211C27.0766 37.4961 26.742 37.331 26.3851 37.2352C26.0281 37.1395 25.6558 37.1148 25.2894 37.163C24.923 37.2111 24.5697 37.331 24.2496 37.5156C23.9295 37.7003 23.6489 37.9462 23.4239 38.2393C23.1988 38.5325 23.0337 38.867 22.9379 39.224C22.8422 39.5808 22.8176 39.9531 22.8658 40.3196C22.9139 40.686 23.0337 41.0392 23.2184 41.3593L28.9996 51.375C30.5067 53.9283 32.9609 55.7835 35.8286 56.5371C38.6962 57.2906 41.7453 56.8817 44.3131 55.3991C46.8808 53.9166 48.7594 51.4803 49.5404 48.6201C50.3216 45.7597 49.9418 42.7068 48.4839 40.125L45.8277 35.5156C45.4319 34.9186 44.8232 34.4951 44.1257 34.3316C43.4283 34.1681 42.6948 34.2768 42.0748 34.6357C41.4548 34.9945 40.9952 35.5763 40.7896 36.2626C40.5839 36.9487 40.6479 37.6875 40.9683 38.3281" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M36.7184 42.2344L30.7809 31.9532C30.5962 31.6331 30.3503 31.3525 30.0572 31.1275C29.7641 30.9024 29.4295 30.7373 29.0726 30.6415C28.7156 30.5458 28.3433 30.5212 27.9769 30.5694C27.6105 30.6175 27.2572 30.7373 26.9371 30.922C26.617 31.1066 26.3364 31.3526 26.1114 31.6457C25.8863 31.9388 25.7212 32.2733 25.6254 32.6303C25.5297 32.9872 25.5051 33.3594 25.5532 33.7259C25.6014 34.0923 25.7212 34.4457 25.9059 34.7657L31.8434 45.0469" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M43.4684 42.6719L36.9059 31.297C36.5329 30.6505 35.9184 30.1787 35.1975 29.9853C34.4768 29.7919 33.7086 29.8928 33.0621 30.2657C32.4156 30.6387 31.9438 31.2532 31.7504 31.974C31.557 32.6948 31.6579 33.4631 32.0309 34.1094" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M35.4684 30.0777L33.859 27.2809C33.486 26.6344 32.8715 26.1626 32.1507 25.9692C31.4298 25.7758 30.6617 25.8767 30.0152 26.2496C29.3688 26.6226 28.8969 27.2371 28.7035 27.9579C28.5101 28.6788 28.611 29.4469 28.984 30.0934L29.359 30.734" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49.3746 49.4219C51.2816 47.6952 52.5402 45.3676 52.9409 42.8263C53.3418 40.2851 52.8607 37.6832 51.5777 35.4532L48.9214 30.8595C48.7368 30.5394 48.4909 30.2588 48.1978 30.0337C47.9047 29.8087 47.5701 29.6435 47.2132 29.5478C46.8563 29.452 46.4839 29.4275 46.1176 29.4756C45.7512 29.5237 45.3978 29.6435 45.0777 29.8282C44.7577 30.0129 44.4771 30.2588 44.2519 30.5519C44.0269 30.845 43.8618 31.1796 43.7661 31.5365C43.6703 31.8934 43.6458 32.2657 43.6938 32.6322C43.7419 32.9986 43.8618 33.3519 44.0464 33.6719" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M44.4059 34.2969L39.984 26.6407C39.611 25.9943 38.9965 25.5224 38.2758 25.329C37.5549 25.1356 36.7868 25.2365 36.1403 25.6095C35.4938 25.9824 35.022 26.5969 34.8285 27.3178C34.6352 28.0386 34.736 28.8068 35.109 29.4532" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M47.625 21.2656L46.9844 23.6719" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M52.3595 23.4688L50.9219 25.5156" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M56.0313 27.1406L53.9844 28.5781" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        <h1>Hassle-free & Easy</h1>
        <p>Manage the process from website
or mobile app, and use our Docs
service to register with agencies
quickly. Nifty tech built to save you
time.</p>
      </div>
      </div>

   
<div className='box-group'>



<div className='wave'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#E6EAFF" fill-opacity="1" d="M0,64L48,96C96,128,192,192,288,192C384,192,480,128,576,117.3C672,107,768,149,864,149.3C960,149,1056,107,1152,101.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
</svg>

<div className='wave-box-main'>
<p className='para'>HOW IT WORKS</p>
<h1 className='head'>How we <span className='span'>find you </span> the perfect</h1>
<h1 className='head'>locum</h1>

<h4>We make finding locum work faster and simpler and give you more control.</h4>
  <div className='wave-box'>


  <div className='wave-left'>
  <img src={wave} alt="locum"></img>
  </div>
  <div className='wave-right'>
    <p>Step 1</p>

    <h2>Tell us what locums you <span>want</span></h2>

    <p>Set your locum wishlist on your Messly profile, which states exactly what
locums you want. Then only see locum jobs matched exactly to those
needs. No spam, no time-wasting and a personalised service for you.</p>

<div className='svg-box'>
<Profile />
    <div >

 <h3>Your Personalised Profile</h3>
 <hr></hr>
      <p>Your profile on Messly includes your minimum hourly rate, how far
you'll travel, your start date, preferred specialty and much more. It
takes less than 5 minutes and helps you get exactly what you're
looking for.</p>
    </div>
  </div>
  <div className='svg-box'>
  <Privacy />
    <div >


   <h3>Stay Anonymous</h3>
    <hr></hr>
      <p>We only include your first name on your profile. Only share your
full name, GMC number or any contact details when you're ready
with agencies you've selected.</p>
    </div>
  </div>
  <div className='svg-box'>
  <Lock />
    <div >

   <h3>Privacy First</h3>
   <hr></hr>

      <p>Only recruiters from agencies that are vetted and approved by
Messly can see your profile, so you don't need to worry about
your colleagues or current hospital coming across it.</p>
    </div>
  </div>
  </div>

 
  </div>
  
</div>

</div>

<div className='match-box'>



<div className='match-left'>
  <p>Step 2</p>

  <h2>Get matched with locums <span>near you</span></h2>

  <p>Agencies contact you through Messly, offering specific locum jobs upfront which are
tailored to your locum wishlist. You manage all your conversation from your Messly Inbox,
and don't share your personal details until you're sure that you want to go ahead. You can
turn off your Messly profile any time, and nobody can contact you.</p>

<div className='svg-box'>
<GreenHeart />
  <div >

 <h3>Your Recommended Jobs Feed</h3>
 <hr></hr>
    <p>See a personalised recommendation. We match your jobs based on your grade,
    specialties, location, pay-rates and grades.</p>
  </div>
</div>
<div className='svg-box'>
<Eye />
  <div>

 <h3>See Available Locums, Up Front</h3>
  <hr></hr>
    <p>Agencies have to mention specific vacancies they have when they message you.
No more vague promises of work that don't materalise. Most doctors will get
multiple offers on the day they make their profile.</p>
  </div>
</div>
<div className='svg-box'>
<Review />
  <div >

 <h3>Reviews & Ratings</h3>
 <hr></hr>
    <p>See reviews and ratings of agencies and recruiters written by verified doctors
who have worked with the agency. No more guessing if you've chosen the right
agency.</p>
  </div>
</div>
</div>
<div className='match-right'>
<img src={map} alt="locum"></img>
</div>

</div>

<div className='reg-box-main'>
<div className='reg-box'>
<div className='reg-left'>
<img src={reg} alt="locum"></img>
</div>
<div className='reg-right'>
  <p>Step 3</p>

  <h2>Register and start working
 <span> quickly </span>  and  <span>hassle-free</span></h2>

  <p>Our Docs service helps you save time registering with locum agencies, so
you can start working quickly and without hassle. Learn what registration
documents you need to provide, store them in one place, complete your
references just once and share everything with locum agencies in one click.
Doctors who used Docs registered 70% faster with locum agencies.</p>

<div className='svg-box'>
<Tick />
  <div >
 
  <h3>Get compliant quickly</h3>
  <hr></hr>
    <p>Docs gives you a central hub for your registration documents and
references. You can learn about what you need, upload your
documents to one place, complete your references just once and
share them instantly with locum agencies with one-click.
References all happen through our</p>
  </div>
</div>
<div className='svg-box'>
<People />
  <div >
 
 <h3>Register with multiple agencies</h3>
  <hr></hr>

    <p>We've designed Docs to help you quickly register quickly with
several locum agencies and avoid you having to repeat the same
processes. Once you've added your documents, just hit the share
button and they will be instantly sent over to your preferred locum
agencies.</p>
  </div>
</div>
<div>



  <div className='svg-box'>
 <Resubmit />
  <div>
  <h3>Your medical document shoebox</h3>
  <hr></hr>
  <p>No more digging around email attachments and old folders. All
your documents are securely stored in the cloud and can be easily
accessed at any time from your computer or phone.</p>
  </div>

  </div>
</div>
</div>



</div>

<svg  viewBox="0 0 1440 170" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1440 101.839L1408.44 90.5843C1376.89 79.75 1313.78 56.6087 1250.66 79.4344C1187.55 101.839 1124.44 169.159 1061.33 169.159C998.217 169.159 935.106 101.839 871.994 62.6044C808.882 22.9487 745.77 12.43 682.659 28.9444C619.547 46.09 556.435 90.2688 493.323 101.839C430.211 113.41 367.1 90.2688 303.988 73.7543C240.876 56.6088 177.764 46.09 114.653 45.7744C51.5409 46.09 -11.5709 56.6087 -43.1267 62.6044L-74.6826 68.1794V0.859375H-43.1267C-11.5709 0.859375 51.5409 0.859375 114.653 0.859375C177.764 0.859375 240.876 0.859375 303.988 0.859375C367.1 0.859375 430.211 0.859375 493.323 0.859375C556.435 0.859375 619.547 0.859375 682.659 0.859375C745.77 0.859375 808.882 0.859375 871.994 0.859375C935.106 0.859375 998.217 0.859375 1061.33 0.859375C1124.44 0.859375 1187.55 0.859375 1250.66 0.859375C1313.78 0.859375 1376.89 0.859375 1408.44 0.859375H1440V101.839Z" fill="#E6EAFF"/>
</svg>


</div>
  
</div>
    </div>
  )

}


