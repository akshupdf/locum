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
  Choice,
  Eye,
  GreenHeart,
  Hassle,
  LeftArrow,
  Lock,
  People,
  Privacy,
  Profile,
  Resubmit,
  Review,
  RightTick,
  StarProfile,
  Tick,
  Trust,
  WrongTick,
} from "../../reusable/Icons";
import { InputText } from "primereact/inputtext";
import { useDispatch, useSelector } from "react-redux";
import { getAllDoctors } from "../../redux/apiSlice";

export default function HomePage() {
  const dispatch = useDispatch();
  const { allUsers } = useSelector((state) => state.user);

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

  const oppData = [
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

  const drData = [
    {
      title: "Dr Kiran S.",
      role: "Consultant - Anaesthetics",
      logo: one,
      location: "📍   Mumbai",
      available: "✅    Available Now",
      shift: "🕓    20 shifts / month",
      pay: "💰   $100 / hour",
    },
    {
      title: "Dr Jamie M.",
      role: "Registrar - Acute Medicine",
      logo: two,
      location: "📍   Mumbai",
      available: "✅    Available Now",
      shift: "🕓    20 shifts / month",
      pay: "💰   $100 / hour",
    },
    {
      title: "Dr Maria C.",
      role: "SHO - Emergency Medicine",
      logo: three,
      location: "📍   Mumbai",
      available: "✅    Available Now",
      shift: "🕓    20 shifts / month",
      pay: "💰   $100 / hour",
    },
  ];

  useEffect(() => {
    dispatch(getAllDoctors());
  }, []);
  

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  // console.log(allUsers);

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

            <div className="btn-box">
              <button
                className="start-btn"
                onClick={() => (window.location.href = "/register")}
              >
                Register now
              </button>
            </div>
            <div className="search-arrow">
              <p>Search for Locum</p>
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
        <p className="para">
          Provide qualified recruitment especially across India
        </p>
        <div className="explore-box">
          {oppData.map((data) => (
            <div key={data.id} className="explore-small-box">
              <img src={data.logo} alt="logo"></img>
              <div className="explore-small-box-text">
                <h4>{data.title}</h4>
                <div style={{ display: "flex", marginTop: "10px" }}>
                  <svg
                    width="16"
                    height="21"
                    viewBox="0 0 16 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.44727 14.6797C4.95508 15.2266 5.69727 15.5 6.43945 15.5C6.94727 15.5 7.41602 15.3828 7.8457 15.1484L5.77539 20.1484C5.61914 20.5391 5.07227 20.6562 4.75977 20.3047L3.35352 18.8203L1.2832 18.8984C0.853516 18.9375 0.501953 18.4688 0.697266 18.0391L2.45508 13.7031C2.76758 13.9375 3.08008 14.1328 3.4707 14.2109C4.25195 14.4453 4.0957 14.3281 4.44727 14.6797ZM15.5801 18.0391C15.7754 18.4688 15.4238 18.9375 14.9941 18.8984L12.9238 18.8203L11.5176 20.3047C11.2051 20.6562 10.6582 20.5391 10.502 20.1484L8.43164 15.1484C8.86133 15.3828 9.33008 15.5 9.83789 15.5C10.5801 15.5 11.3223 15.2266 11.8301 14.6797C12.1816 14.3281 11.9863 14.4453 12.8457 14.2109C13.1973 14.1328 13.5098 13.9375 13.8223 13.7031L15.5801 18.0391ZM10.9316 13.7812C10.3848 14.3281 9.60352 14.4062 8.97852 14.0156C8.74414 13.8594 8.43164 13.7812 8.11914 13.7812C7.8457 13.7812 7.5332 13.8594 7.29883 14.0156C6.67383 14.4062 5.89258 14.3281 5.38477 13.7812C4.79883 13.1953 4.7207 13.2344 3.86133 13C3.31445 12.8828 2.88477 12.4531 2.72852 11.8672C2.45508 10.7734 2.5332 10.8906 1.71289 10.1094C1.32227 9.67969 1.16602 9.09375 1.32227 8.54688C1.5957 7.45312 1.5957 7.60938 1.32227 6.47656C1.16602 5.92969 1.32227 5.34375 1.71289 4.95312C2.5332 4.13281 2.45508 4.25 2.72852 3.15625C2.88477 2.60938 3.31445 2.17969 3.86133 2.02344C4.95508 1.71094 4.79883 1.78906 5.61914 0.96875C6.00977 0.578125 6.5957 0.421875 7.14258 0.578125C8.19727 0.851562 8.08008 0.851562 9.13477 0.578125C9.68164 0.421875 10.2676 0.578125 10.6582 0.96875C11.4785 1.78906 11.3223 1.71094 12.416 2.02344C12.9629 2.17969 13.3926 2.60938 13.5488 3.15625C13.8223 4.25 13.7441 4.13281 14.5645 4.95312C14.9551 5.34375 15.1113 5.92969 14.9551 6.47656C14.6816 7.60938 14.6816 7.45312 14.9551 8.54688C15.1113 9.09375 14.9551 9.67969 14.5645 10.1094C13.7441 10.8906 13.8223 10.7734 13.5488 11.8672C13.3926 12.4531 12.9629 12.8828 12.416 13C11.5957 13.2344 11.5176 13.1953 10.9316 13.7812ZM4.44727 7.375C4.44727 9.44531 6.08789 11.125 8.1582 11.125C10.1895 11.125 11.8301 9.44531 11.8301 7.375C11.8301 5.30469 10.1895 3.625 8.1582 3.625C6.08789 3.625 4.44727 5.30469 4.44727 7.375Z"
                      fill="black"
                    />
                  </svg>
                  <p>{data.available}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="btn">More</button>
      </div>

      <div className="tool-box-main">
        <p className="para1">OUR Locum’s</p>
        <h1>Your best sourcing tool for doctors.</h1>
        <p className="para">
          We've hand-picked the best doctors from our network who are actively{" "}
        </p>
        <p className="para"> looking for locum work.</p>
        <div className="tool-box">
          {allUsers?.map((data) => (
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
                {/* <p>{data.specialization}</p> */}
                {/* <p>{data.shift}</p> */}
                <p>{data.hourly_rate}</p>
              </div>
              <button className="tool-box-btn"  onClick={() => (window.location.href = `/profile/${data.id}`)}>
                VIEW PROFILE <LeftArrow />
              </button>
            </div>
          ))}
        </div>
        <button className="btn">Explore More</button>
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
            <hr></hr>
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

            <hr></hr>
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
                <p className="para1">Step 1</p>

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
                    <hr></hr>
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
                    <hr></hr>
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
                    <hr></hr>

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
            <p className=" para1">Step 2</p>

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
              <p className=" para1">Step 3</p>

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

<button onClick={scrollToTop}>Test</button>
      </div>
    </div>
  );
}
