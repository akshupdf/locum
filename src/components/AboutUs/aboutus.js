import React, { useState } from "react";
import about from "../../assets/about.png";
import girl from "../../assets/girl.png";
import dinu from "../../assets/dinu.png";
import jon from "../../assets/jon.jpeg";
import dav from "../../assets/dav.jpeg";
import hand from "../../assets/hand.png";
import vector from "../../assets/vector.png";
import {
  Arrow,
  Choice,
  ExitIcon,
  Hassle,
  StarProfile,
  Trust,
} from "../../reusable/Icons";

export const About = () => {
  const [expandedStates, setExpandedStates] = useState([false, false, false]);

  const toggleExpand = (index) => {
    const newStates = [...expandedStates];
    newStates[index] = !newStates[index];
    setExpandedStates(newStates);
  };

  const leaders = [
    {
      id: 1,
      imgSrc: dinu,
      name: "Deenu...",
      name2: "Deenu Patel",
      title: "CEO",
      intro: "Deenu Patel is Locum Chief Executive Officer and…",
      founder: "CEO",
      description:
        "Deenu Patel is Locum Chief Executive Officer and has been leading the company with a focus on strategic growth and innovation. Under his leadership, Locum has expanded its market presence and developed new service offerings, ensuring the company remains competitive and forward-thinking.",
    },
    {
      id: 2,
      imgSrc: dav,
      name: "David...",
      name2: "David Newton",
      title: "COO",
      founder: "Managing Director",
      intro: "David Newton joined Locum some 15 years ago,…",
      description:
        "David Newton joined Locum some 15 years ago, bringing with him a wealth of experience in operations and management. His keen insights and strategic initiatives have significantly improved operational efficiency and client satisfaction.",
    },
    {
      id: 3,
      imgSrc: jon,
      name: "Jon...",
      name2: "Jon Doe",
      title: "Finance Director",
      founder: "Finance Director",
      intro: "Jon joined Locum as Finance Director in 2019. His…",
      description:
        "Jon joined Locum as Finance Director in 2019. His financial acumen and dedication have been instrumental in steering the company towards sustainable growth and profitability.",
    },
  ];

  const LeaderBoxSmall = ({
    index,
    isExpanded,
    toggleExpand,
    name,
    expanded,
    intro,
    description,
    post,
    imgSrc,
    name2,
    founder
  }) => {
    return (
      <div className="leader-box-small">
        <img src={imgSrc} alt="Deenu Patel" />
        <h1> {isExpanded ? <span>{name2} </span> : <span>{name}</span>}</h1>
        <div className="founder">{founder}</div>
        <h3>{post}</h3>
        <div className="text-box" onClick={() => toggleExpand(index)}>
          <p>
            {isExpanded ? <span>{description}</span> : <span>{intro} </span>}
          </p>
          <svg
            onClick={() => toggleExpand(index)}
            width="50"
            height="50"
            viewBox="0 0 35 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ cursor: "pointer" }}
          >
            <path
              d="M17.5 35.5701C27.165 35.5701 35 27.7351 35 18.0701C35 8.40509 27.165 0.570068 17.5 0.570068C7.83502 0.570068 0 8.40509 0 18.0701C0 27.7351 7.83502 35.5701 17.5 35.5701Z"
              fill="#0866C6"
            />
            <path
              d="M18.2682 17.305V13.8109C18.2728 13.6551 18.246 13.5 18.1896 13.3548C18.1331 13.2095 18.048 13.077 17.9395 12.9652C17.8309 12.8534 17.701 12.7645 17.5574 12.7038C17.4139 12.6431 17.2596 12.6118 17.1037 12.6118C16.9478 12.6118 16.7936 12.6431 16.65 12.7038C16.5065 12.7645 16.3765 12.8534 16.2679 12.9652C16.1594 13.077 16.0744 13.2095 16.0179 13.3548C15.9614 13.5 15.9346 13.6551 15.9392 13.8109V17.305H12.4452C12.2894 17.3004 12.1343 17.3271 11.989 17.3836C11.8437 17.4401 11.7113 17.5251 11.5995 17.6337C11.4877 17.7423 11.3988 17.8722 11.3381 18.0157C11.2774 18.1593 11.2461 18.3136 11.2461 18.4695C11.2461 18.6253 11.2774 18.7796 11.3381 18.9232C11.3988 19.0667 11.4877 19.1966 11.5995 19.3052C11.7113 19.4138 11.8437 19.4988 11.989 19.5553C12.1343 19.6118 12.2894 19.6385 12.4452 19.6339H15.9392V23.128C15.9481 23.4309 16.0747 23.7185 16.2921 23.9296C16.5095 24.1407 16.8006 24.2588 17.1037 24.2588C17.4068 24.2588 17.6979 24.1407 17.9153 23.9296C18.1328 23.7185 18.2593 23.4309 18.2682 23.128V19.6339H21.7592C21.915 19.6385 22.0701 19.6118 22.2154 19.5553C22.3607 19.4988 22.4932 19.4138 22.605 19.3052C22.7168 19.1966 22.8057 19.0667 22.8664 18.9232C22.9271 18.7796 22.9584 18.6253 22.9584 18.4695C22.9584 18.3136 22.9271 18.1593 22.8664 18.0157C22.8057 17.8722 22.7168 17.7423 22.605 17.6337C22.4932 17.5251 22.3607 17.4401 22.2154 17.3836C22.0701 17.3271 21.915 17.3004 21.7592 17.305H18.2682Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    );
  };

  const data = [
    {
      num: "600+",
      text: "Healthcare Specialists here to support",
    },
    {
      num: "8M+",
      text: "Patient care hours filled per annum",
    },
    {
      num: "98%",
      text: "NHS Framework Rating Platinum status",
    },
    {
      num: "95%+",
      text: "Trusts working with us regularly",
    },
  ];

  return (
    <div className="aboutmain">
      <div className="aboutbox">
        <div className="aboutleft">
          <h1>About us</h1>
          <h3>Connecting care</h3>
          <p>
            Make the best locum agencies compete to find your perfect locum
            jobs. Get offered real shifts, matched exactly to your needs, before
            you’ve shared your contact details 🎉
          </p>
          <div className="d-flex">
            <button
              className="regbtn"
              onClick={() => (window.location.href = "/register")}
            >
              Register now
            </button>
            {/* <Arrow /> */}
          </div>
        </div>
        <div className="aboutright">
          <img style={{ width: "100%" }} src={about} alt="about"></img>
        </div>
      </div>

      <div className="aboutbar">
        {data?.map((data) => {
          return (
            <div className="data-div">
              <h1>{data.num}</h1>
              <p> {data.text}</p>
            </div>
          );
        })}
      </div>
      <div className="vectorbox">
        <div className="vectorbox-left">
          <img src={vector} alt="vector"></img>
          {/* <h1>Our mission & vision</h1> */}
        </div>
        <div className="vectorbox-right">
          <p>
            To improve patient outcomes by connecting and supporting{" "}
            <span>Healthcare Professionals</span> and <span>Organisations</span>
            – helping ensure we can all access the right care at the right time
            – worldwide.
          </p>
          <button
            className="aboutreg"
            onClick={() => (window.location.href = "/contactus")}
          >
            Contact us
          </button>
        </div>
      </div>

      <div className="peoplebox">
        <div className="peoplebox-left">
          <h1>People are at the heart of everything we do</h1>
          <p>
            Our expert teams help seek out and support the Healthcare
            Professionals needed to take care of our health every day.
          </p>
          <p>Everything we do centres on connecting people. </p>
          <p>
            We connect with Healthcare Professionals worldwide, connecting them
            with the Healthcare Organisations that need them, who connect them
            with their patients in order to provide excellent patient care.{" "}
          </p>{" "}
          <p>And every single connection matters.</p>
          <button className="peoplebtn"  onClick={() => (window.location.href = "/explore")}>Find out more</button>
        </div>
        <div className="peoplebox-right">
          <img src={girl} alt="girl"></img>
        </div>
      </div>
      <div className="us-box-out">
        <div className="us-box-main">
          <h2>Why Choose Us</h2>

          <div className="us-box">
            <div className="praise-small-box">
              <Choice />
              <h1>Choice of jobs</h1>
              <p>
                Twenty of the best locum agencies compete for you on Messly. You
                see what shifts they have upfront. More choice means higher
                rates, less travel and better rotas.
              </p>
            </div>
            <div className="praise-small-box">
              <Trust />

              <h1>Trusted agencies</h1>
              <p>
                We've selected the best-rated, most reliable agencies. See
                ratings from doctors before you speak to them, so you only work
                with the best.
              </p>
            </div>
            <div className="praise-small-box">
              <Hassle />

              <h1>Hassle-free & Easy</h1>
              <p>
                Manage the process from website or mobile app, and use our Docs
                service to register with agencies quickly. Nifty tech built to
                save you time.
              </p>
            </div>
            <div className="praise-small-box">
              <StarProfile />
              <h1>Personalised to you</h1>
              <p>
                Set your locum wishlist on Messly, and only see jobs matched
                exactly to your needs. No spam, no time- wasting and a
                personalised service for you.
              </p>
            </div>
          </div>
        </div>
        <div className="circle"></div>
      </div>

      <div className="leader-box-main">
        <h1>Our Leadership Team</h1>
        <div className="leader-box">
          {leaders.map((leader, index) => (
            <LeaderBoxSmall
              id={leader.id}
              index={index}
              imgSrc={leader.imgSrc}
              name={leader.name}
              name2={leader.name2}
              founder={leader.founder}
              title={leader.title}
              isExpanded={expandedStates[index]}
              intro={leader.intro}
              description={leader.description}
              onToggle={() => toggleExpand(index)}
              toggleExpand={toggleExpand}
            />
          ))}
        </div>
      </div>

      <div className="join-box-main">
        <div className="circle"></div>
        <div className="join-box">
          <div className="join-box-left">
            <h2>Join our talent</h2>
            <h2>community.</h2>
            <p>
              Join our global talent community to receive alerts when new
              life-changing opportunities become available.
            </p>
            <button className='signup-btn' onClick={() => window.location.href = '/signin'}> <ExitIcon /> Sign In
            </button>
          </div>
          <div className="join-box-right">
            <img src={hand} alt="hand"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
