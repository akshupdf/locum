import React, { useEffect } from "react";
import kau from "../../assets/kau.png";
import mil from "../../assets/mil.png";
import spec from "../../assets/spec.png";
import lifeline from "../../assets/lifeline.png";
import global from "../../assets/global.png";
import masina from "../../assets/masina.png";
import shalin from "../../assets/shalin.png";
import heart from "../../assets/heart.png";
import brain from "../../assets/brain.png";
import gyn from "../../assets/gyn.png";
import rad from "../../assets/rad.png";
import nurse from "../../assets/nurse.png";
import op from "../../assets/op.png";
import lady from "../../assets/lady.png";
import one from "../../assets/1.png";
import two from "../../assets/2.png";
import three from "../../assets/3.png";
import wave from "../../assets/wave.png";
import map from "../../assets/map.png";
import reg from "../../assets/reg.png";
import {
  Ambulancev2,
  Choice,
  Eye,
  GreenHeart,
  HandNBrain,
  Hassle,
  HeartBeat,
  LeftArrow,
  Lock,
  Nurse,
  People,
  Privacy,
  Profile,
  Radiology,
  Resubmit,
  Review,
  RightTick,
  Saline,
  StarProfile,
  Tick,
  Trust,
  WrongTick,
} from "../../reusable/Icons";
import { InputText } from "primereact/inputtext";
import { useDispatch, useSelector } from "react-redux";
import { getAllDoctors, getCategory, getSpecialties } from "../../redux/apiSlice";
import { Flipcard } from "./FlipCard";
import { Link } from "react-router-dom";

export default function HomePage() {
  const dispatch = useDispatch();

  const imageData = [
    {
      img: kau,
    },
    {
      img: mil,
    },
    {
      img: spec,
    },
    {
      img: lifeline,
    },
    {
      img: global,
    },
    {
      img: masina,
    },
    {
      img: shalin,
    },
  ];

  const Cardiology = [
    {
      title: "Cardiology",
      available: "3 Doctors Available",
      logo: heart,
    },
    {
      title: "Neurology",
      available: "5 Doctors Available",
      logo: brain,
    },
    {
      title: "Gynecology",
      available: "3 Doctors Available",
      logo: gyn,
    },
    {
      title: "Radiology",
      available: "5 Doctors Available",
      logo: rad,
    },
    {
      title: "Nursing",
      available: "3 Doctors Available",
      logo: nurse,
    },
    {
      title: "Critical Care",
      available: "5 Doctors Available",
      logo: op,
    },
  ];


  useEffect(() => {
    dispatch(getAllDoctors());
    dispatch(getSpecialties());
    dispatch(getCategory());
  }, []);

  const specialtiesData = [
    { id: 1, name: "Anesthesiology", icon: <Saline />, url: "anesthesiology" },
    { id: 2, name: "Cardiology", icon: <HeartBeat />, url: "cardiology" },
    { id: 3, name: "Clinical Social Work", icon: <HandNBrain />, url: "clinical-social-work" },
    { id: 4, name: "Dermatology", icon: <Nurse />, url: "dermatology" },
    { id: 5, name: "Emergency medicine", icon: <Ambulancev2 />, url: "emergency-medicine" },
    { id: 6, name: "Endocrinology", icon: <Radiology />, url: "endocrinology" },
  ];


  return (
    <div className="Homepage">
      <div className="landing-box-main">
        <div className="landing-box">
          <div className="landing-box-lext">
            <div className="text-box">
              <span className="soft">
                {" "}
                Making Locum Recruiting And Locum Job Search
              </span>
              <span className="built"> Hassel-Free, Easy and Fast </span>

              <p className="para">
                Make the best locum agencies compete to find your perfect locum
                jobs. Get offered real shifts, matched exactly to your needs,
                before you’ve shared your contact details 🎉
              </p>
            </div>

            <div className="res-btn">
              <div className="btn-box">
                <button
                  className="start-btn"
                  onClick={() => (window.location.href = "/register")}
                >
                  Register now
                </button>
              </div>
              <div className="search-arrow">
                <p onClick={() => (window.location.href = "/search-page")}>Search for Locum</p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                    fill="#033B61"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="landing-box-right">
            <img src={lady} alt="lady" />
          </div>
        </div>
      </div>
      <div className="landing-bar">
        <h1>Trusted Hospitals</h1>
        <div className="landing-bar-logo">
          {imageData.map((data) => (
            <div key={data.id} className="landing-bar-img">
              <img src={data.img} alt="locum"></img>
            </div>
          ))}
        </div>
      </div>

      <div className="explore-box-main">
        <h1>Explore Locum opportunities</h1>
        <p className="para Provide">
          Provide qualified recruitment especially across India
        </p>
        <div className="explore-box">
          <div className="specialties-container">
            {specialtiesData.map((specialty) => (
              <div
                key={specialty.id}
                id={`box-${specialty.id}`}
                className="specialty-box"
              >
                <Link to={`/${specialty.url}`} className="specialty-link">
                  <div className="specialty-icon">{specialty.icon}</div>
                </Link>
                <div className="specialty-name">{specialty.name}</div>
              </div>
            ))}
          </div>
        </div>
        <button className="btn" onClick={() => (window.location.href = "/explore")}>Explore More</button>
      </div>

      <div className="tool-box-main">
        <p className="para1 ">OUR Locum’s</p>
        <h1>Your best sourcing tool for doctors.</h1>
        <p className="para Provide">
          We've hand-picked the best doctors from our network who are actively{" "}
        </p>
        <p className="para Provide"> looking for locum work.</p>
        <div className="tool-box">
          {/* {allUsers?.map((data) => (
            <div key={data.id} className="tool-small-box">
              <img src={two} alt="logo"></img>
              <div className="tool-small-box-text">
                <h4>
                  {data.first_name}
                  {" "}
                  {data.last_name}
                </h4>
                <h3>{data.specialization}</h3>
                <p>{data.location}</p>
                <p>{data.specialization}</p>
                <p>{data.shift}</p>
                <p>{data.hourly_rate}</p>
              </div>
              <button className="tool-box-btn" onClick={() => (window.location.href = `/profile/${data.id}`)}>
                VIEW PROFILE <LeftArrow />
              </button>
            </div>
          ))} */}

          <Flipcard />
        </div>
        <button className="btn" onClick={() => (window.location.href = "/explore")}>Explore More</button>
      </div>

      <div className="compare-box-main">
        <p className="para1">HOW IT WORKS</p>
        <h1>
          The <span>new and better way </span> to
        </h1>
        <h1> find locums</h1>
        <div className="compare-box">
          <div className="compare-box-left">
            <h2>Without Locum</h2>
            <p className="para">
              Take a chance on one or two agencies. Can be slow, inefficient and
              with variable success
            </p>
            {/* <hr></hr> */}
            <ul>
              <li>
                <WrongTick /> No visibility on locum jobs and rates before
                joining
              </li>
              <li>
                <WrongTick /> Limited access to locums depending on your agency
              </li>
              <li>
                <WrongTick /> Unknown quality of recruiters and agencies
              </li>
              <li>
                <WrongTick /> Frequent phone calls, often unsolicited
              </li>
              <li>
                <WrongTick /> Slow registration and paperwork process
              </li>
            </ul>
          </div>
          <div className="compare-box-right">
            <h2>Using Locum to find locums</h2>
            <p className="para">
              Access the whole locum market from one place, with control
              throughout
            </p>

            {/* <hr></hr> */}
            <ul>
              <li>
                <RightTick /> See all locum jobs and rates upfront before
                registering
              </li>
              <li>
                <RightTick /> Access to the whole locum agency market, in one
                place
              </li>
              <li>
                <RightTick /> Only work with trusted agencies, with ratings from
                doctors
              </li>
              <li>
                <RightTick /> Stay anonymous until you're ready to share contact
                details
              </li>
              <li>
                <RightTick /> Store and share all your registration documents
                online
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="praise-box">
        <div className="praise-small-box">
          <Choice />
          <h1>Choice of jobs</h1>
          <p>
            Twenty of the best locum agencies compete for you on Messly. You see
            what shifts they have upfront. More choice means higher rates, less
            travel and better rotas.
          </p>
        </div>
        <div className="praise-small-box">
          <Trust />

          <h1>Trusted agencies</h1>
          <p>
            We've selected the best-rated, most reliable agencies. See ratings
            from doctors before you speak to them, so you only work with the
            best.
          </p>
        </div>
        <div className="praise-small-box">
          <StarProfile />
          <h1>Personalised to you</h1>
          <p>
            Set your locum wishlist on Messly, and only see jobs matched exactly
            to your needs. No spam, no time- wasting and a personalised service
            for you.
          </p>
        </div>
        <div className="praise-small-box">
          <Hassle />

          <h1>Hassle-free & Easy</h1>
          <p>
            Manage the process from website or mobile app, and use our Docs
            service to register with agencies quickly. Nifty tech built to save
            you time.
          </p>
        </div>
      </div>

      <div className="box-group">
        <div className="wave">
          <svg
            viewBox="0 0 1440 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 64L30 74.7C60 85 120 107 180 85.3C240 64 300 0 360 0C420 0 480 64 540 101.3C600 139 660 149 720 133.3C780 117 840 75 900 64C960 53 1020 75 1080 90.7C1140 107 1200 117 1260 117.3C1320 117 1380 107 1410 101.3L1440 96V160H1410C1380 160 1320 160 1260 160C1200 160 1140 160 1080 160C1020 160 960 160 900 160C840 160 780 160 720 160C660 160 600 160 540 160C480 160 420 160 360 160C300 160 240 160 180 160C120 160 60 160 30 160H0V64Z"
              fill="#E6EAFF"
            />
          </svg>

          <div className="wave-box-main">
            <p className="para1">HOW IT WORKS</p>
            <h1 className="head">
              How we <span className="span">find you </span> the perfect
            </h1>
            <h1 className="head">locum</h1>

            <h4 className="para">
              We make finding locum work faster and simpler and give you more
              control.
            </h4>
            <div className="wave-box">
              <div className="wave-left">
                <img src={wave} alt="locum"></img>
              </div>
              <div className="wave-right">
                <p className="para1 step-1">Step 1</p>

                <h2>
                  Tell us what locums you <span>want</span>
                </h2>

                <p className="para-text">
                  Set your locum wishlist on your Messly profile, which states
                  exactly what locums you want. Then only see locum jobs matched
                  exactly to those needs. No spam, no time-wasting and a
                  personalised service for you.
                </p>

                <div className="svg-box mt">
                  <div className="img-box">
                    <Profile />
                  </div>
                  <div>
                    <h3>Your Personalised Profile</h3>
                    <hr style={{ marginTop: "0px" }}></hr>
                    <p>
                      Your profile on Messly includes your minimum hourly rate,
                      how far you'll travel, your start date, preferred
                      specialty and much more. It takes less than 5 minutes and
                      helps you get exactly what you're looking for.
                    </p>
                  </div>
                </div>
                <div className="svg-box">
                  <div className="img-box">
                    <Privacy />
                  </div>
                  <div>
                    <h3>Stay Anonymous</h3>
                    <hr style={{ marginTop: "0px" }}></hr>
                    <p>
                      We only include your first name on your profile. Only
                      share your full name, GMC number or any contact details
                      when you're ready with agencies you've selected.
                    </p>
                  </div>
                </div>
                <div className="svg-box">
                  <div className="img-box">
                    <Lock />
                  </div>
                  <div>
                    <h3>Privacy First</h3>
                    <hr style={{ marginTop: "0px" }}></hr>

                    <p>
                      Only recruiters from agencies that are vetted and approved
                      by Messly can see your profile, so you don't need to worry
                      about your colleagues or current hospital coming across
                      it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="match-box">
          <div className="match-left">
            <p className=" para1 step-2" >Step 2</p>

            <h2>
              Get matched with locums <span>near you</span>
            </h2>

            <p className="para-text">
              Agencies contact you through Messly, offering specific locum jobs
              upfront which are tailored to your locum wishlist. You manage all
              your conversation from your Messly Inbox, and don't share your
              personal details until you're sure that you want to go ahead. You
              can turn off your Messly profile any time, and nobody can contact
              you.
            </p>

            <div className="svg-box">
              <div className="img-box">
                <GreenHeart />
              </div>

              <div>
                <h3>Your Recommended Jobs Feed</h3>
                <hr></hr>
                <p>
                  See a personalised recommendation. We match your jobs based on
                  your grade, specialties, location, pay-rates and grades.
                </p>
              </div>
            </div>
            <div className="svg-box">
              <div className="img-box">
                <Eye />
              </div>
              <div>
                <h3>See Available Locums, Up Front</h3>
                <hr></hr>
                <p>
                  Agencies have to mention specific vacancies they have when
                  they message you. No more vague promises of work that don't
                  materalise. Most doctors will get multiple offers on the day
                  they make their profile.
                </p>
              </div>
            </div>
            <div className="svg-box">
              <div className="img-box">
                <Review />
              </div>
              <div>
                <h3>Reviews & Ratings</h3>
                <hr></hr>
                <p>
                  See reviews and ratings of agencies and recruiters written by
                  verified doctors who have worked with the agency. No more
                  guessing if you've chosen the right agency.
                </p>
              </div>
            </div>
          </div>
          <div className="match-right">
            <img src={map} alt="locum"></img>
          </div>
        </div>

        <div className="reg-box-main">
          <div className="reg-box">
            <div className="reg-left">
              <img src={reg} alt="locum"></img>
            </div>
            <div className="reg-right">
              <p className=" para1 step-2">Step 3</p>

              <h2>
                Register and start working
                <span> quickly </span> and <span>hassle-free</span>
              </h2>

              <p className="para-text">
                Our Docs service helps you save time registering with locum
                agencies, so you can start working quickly and without hassle.
                Learn what registration documents you need to provide, store
                them in one place, complete your references just once and share
                everything with locum agencies in one click. Doctors who used
                Docs registered 70% faster with locum agencies.
              </p>

              <div className="svg-box">
                <div className="img-box">
                  <Tick />
                </div>
                <div>
                  <h3>Get compliant quickly</h3>
                  <hr></hr>
                  <p>
                    Docs gives you a central hub for your registration documents
                    and references. You can learn about what you need, upload
                    your documents to one place, complete your references just
                    once and share them instantly with locum agencies with
                    one-click. References all happen through our
                  </p>
                </div>
              </div>
              <div className="svg-box">
                <div className="img-box">
                  <People />
                </div>
                <div>
                  <h3>Register with multiple agencies</h3>
                  <hr></hr>

                  <p>
                    We've designed Docs to help you quickly register quickly
                    with several locum agencies and avoid you having to repeat
                    the same processes. Once you've added your documents, just
                    hit the share button and they will be instantly sent over to
                    your preferred locum agencies.
                  </p>
                </div>
              </div>
              <div>
                <div className="svg-box">
                  <div className="img-box">
                    <Resubmit />
                  </div>
                  <div>
                    <h3>Your medical document shoebox</h3>
                    <hr></hr>
                    <p>
                      No more digging around email attachments and old folders.
                      All your documents are securely stored in the cloud and
                      can be easily accessed at any time from your computer or
                      phone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <svg
            viewBox="0 0 1440 170"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1440 101.839L1408.44 90.5843C1376.89 79.75 1313.78 56.6087 1250.66 79.4344C1187.55 101.839 1124.44 169.159 1061.33 169.159C998.217 169.159 935.106 101.839 871.994 62.6044C808.882 22.9487 745.77 12.43 682.659 28.9444C619.547 46.09 556.435 90.2688 493.323 101.839C430.211 113.41 367.1 90.2688 303.988 73.7543C240.876 56.6088 177.764 46.09 114.653 45.7744C51.5409 46.09 -11.5709 56.6087 -43.1267 62.6044L-74.6826 68.1794V0.859375H-43.1267C-11.5709 0.859375 51.5409 0.859375 114.653 0.859375C177.764 0.859375 240.876 0.859375 303.988 0.859375C367.1 0.859375 430.211 0.859375 493.323 0.859375C556.435 0.859375 619.547 0.859375 682.659 0.859375C745.77 0.859375 808.882 0.859375 871.994 0.859375C935.106 0.859375 998.217 0.859375 1061.33 0.859375C1124.44 0.859375 1187.55 0.859375 1250.66 0.859375C1313.78 0.859375 1376.89 0.859375 1408.44 0.859375H1440V101.839Z"
              fill="#E6EAFF"
            />
          </svg>
        </div>

        {/* <div className='job-alert-box'>
  <div className='job-alert-text-box'>
  <h1>Locume Job Alert</h1>
    <p>Get latest Job Alerts directly to your inbox </p>
  </div>

<InputText 
                className=" login-input"               
                placeholder="Your Email*"
              /> 
              <InputText 
                className=" login-input"               
                placeholder="Your Phone*"
              /> 
                 <button className='btn'>Subscribe</button>

</div> */}

        {/* <button onClick={scrollToTop} className="arrow"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" ><path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/></svg> </button>
   */}

      </div>
    </div>
  );
}
