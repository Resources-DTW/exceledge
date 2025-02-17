import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { Button, Card } from "antd";
import frame from "../assests/frame.png";
import frame1 from "../assests/frame1.png";
import frame2 from "../assests/frame2.png";
import frame11 from "../assests/frame11.png";
import frame12 from "../assests/frame12.png";
import frame13 from "../assests/frame13.png";
import frame14 from "../assests/frame14.png";
import frame15 from "../assests/frame15.png";
import frame16 from "../assests/frame16.png";
import image11 from "../assests/image11.png";
import image12 from "../assests/image12.png";
import image13 from "../assests/image13.png";
import image14 from "../assests/image14.png";
import cimg from "../assests/cimg.png";
import cimg2 from "../assests/cimg2.png";
import cimg3 from "../assests/cimg3.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import "../styles/about.css";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import CountUp from "react-countup";

const cardData = [
  {
    id: 1,
    image: frame11,
    title: "Hands-On Projects",
    subtitle:
      "We emphasize real-world projects that allow students to apply their knowledge and build a portfolio that stands out.",
  },
  {
    id: 2,
    image: frame12,
    title: "Industry-Driven Curriculum",
    subtitle:
      "Our courses are tailored to meet the demands of the tech industry, ensuring students learn the most relevant and up-to-date skills.",
  },
  {
    id: 3,
    image: frame13,
    title: "Expert Mentorship",
    subtitle:
      "Learn from seasoned professionals who bring years of industry experience and are dedicated to guiding you every step of the way.",
  },
  {
    id: 4,
    image: frame14,
    title: "Collaborative Learning Environment",
    subtitle:
      "We foster teamwork and networking through group activities, discussions, and peer-to-peer learning opportunities.",
  },
  {
    id: 5,
    image: frame15,
    title: "Flexible Learning Options",
    subtitle:
      "Choose from online, in-person, or hybrid classes to fit your schedule and learning preferences.",
  },
  {
    id: 6,
    image: frame16,
    title: "Job Placement Support",
    subtitle:
      "Gain access to career counseling, interview preparation, and placement assistance to launch your dream career in tech.",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Sara",
    image: cimg,
    designation: "Full Stack",
    review:
      "Working with this team was an incredible experience! They provided excellent support, and their attention to detail is unmatched. The project was completed on time, and the final product exceeded our expectations.",
  },
  {
    id: 2,
    name: "Franklin",
    image: cimg2,
    designation: "Data Analysis",
    review:
      "I had the pleasure of working with this team, and I was impressed by their professionalism and expertise. The results were fantastic, and I couldn't be happier with the end product. They really understand how to deliver value.",
  },
  {
    id: 3,
    name: "Annie",
    image: cimg3,
    designation: "Full Stack",
    review:
      "An amazing experience! The lessons were clear, and the hands-on projects made a big difference. I feel more confident in my skills now. Definitely worth it! I feel fully prepared to take the next step in my career.",
  },
  {
    id: 4,
    name: "Sara",
    image: cimg,
    designation: "Full Stack",
    review:
      "This platform is truly revolutionary! It’s not only helped me improve my coding skills but also inspired me to create my own projects from scratch. I feel more confident than ever in my development abilities.",
  },
  {
    id: 5,
    name: "Franklin",
    image: cimg2,
    designation: "Data Analysis",
    review:
      "The resources available here are top-notch! The course material is easy to follow, and the hands-on exercises really helped me solidify my learning. This platform has been a game-changer for my career.",
  },
  {
    id: 6,
    name: "Annie",
    image: cimg3,
    designation: "Full Stack",
    review:
      "I can’t thank this platform enough for helping me boost my skills. The in-depth tutorials and the community of experts have truly accelerated my learning. I feel much more confident in my job now!",
  },
];

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button className="custom-arrow custom-arrow-left" onClick={onClick}>
      <IoIosArrowRoundBack />
    </button>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <button className="custom-arrow custom-arrow-right" onClick={onClick}>
      <IoIosArrowRoundForward />
    </button>
  );
};
export default function About() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [startCount, setStartCount] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCount(true);
          } else {
            setStartCount(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div>
      <Header />

      <div className="aboutus-container">
        <div className="layer1">
          <svg
            width="37"
            height="42"
            viewBox="0 0 37 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="29" cy="8" r="8" fill="#473FE1" />
            <circle cx="16.5" cy="31.5" r="10.5" fill="#473FE1" />
            <circle cx="6" cy="14" r="6" fill="#473FE1" />
          </svg>
        </div>
        <div className="layer2">
          <svg
            width="37"
            height="42"
            viewBox="0 0 37 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="8"
              cy="34"
              r="8"
              transform="rotate(-180 8 34)"
              fill="#473FE1"
            />
            <circle
              cx="20.5"
              cy="10.5"
              r="10.5"
              transform="rotate(-180 20.5 10.5)"
              fill="#473FE1"
            />
            <circle
              cx="31"
              cy="28"
              r="6"
              transform="rotate(-180 31 28)"
              fill="#473FE1"
            />
          </svg>
        </div>
        <div className="a-main-text">
          <p className="a-main-text-title">
            Welcome to <span style={{ color: "#473FE1" }}>ExcelEdge</span>{" "}
          </p>
          <p className="a-main-text-sub-title">
            Learn more about our mission, values, and the team dedicated to
            shaping the next generation of tech leaders.
          </p>
          <Button
            className="enroll-button"
            style={{
              backgroundColor: "#473FE1",
              borderRadius: "100px",
              color: "#FFFFFF",
            }}
          >
            Courses
          </Button>
        </div>

        <div className="customer-image-container">
          <img src={image11} alt="cus" className="customer-image" />
        </div>
      </div>

      <div className="stats-grid" ref={statsRef}>
        <div className="layer3">
          <svg
            width="37"
            height="42"
            viewBox="0 0 37 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="29" cy="8" r="8" fill="#473FE1" />
            <circle cx="16.5" cy="31.5" r="10.5" fill="#473FE1" />
            <circle cx="6" cy="14" r="6" fill="#473FE1" />
          </svg>
        </div>
        <div className="layer4">
          <svg
            width="37"
            height="42"
            viewBox="0 0 37 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="8"
              cy="34"
              r="8"
              transform="rotate(-180 8 34)"
              fill="#473FE1"
            />
            <circle
              cx="20.5"
              cy="10.5"
              r="10.5"
              transform="rotate(-180 20.5 10.5)"
              fill="#473FE1"
            />
            <circle
              cx="31"
              cy="28"
              r="6"
              transform="rotate(-180 31 28)"
              fill="#473FE1"
            />
          </svg>
        </div>
        <div className="stat-item">
          <h4>
            <CountUp start={0} end={startCount ? 10 : 0} duration={2} />+
          </h4>
          <p>Skilled Trainers</p>
        </div>
        <div className="stat-item">
          <h4>
            <CountUp start={0} end={startCount ? 100 : 0} duration={2} />+
          </h4>
          <p>Students Placed</p>
        </div>
        <div className="stat-item">
          <h4>
            <CountUp start={0} end={startCount ? 50 : 0} duration={2} />+
          </h4>
          <p>Students Enrolled</p>
        </div>
        <div className="stat-item">
          <h4>
            <CountUp start={0} end={startCount ? 20 : 0} duration={2} />+
          </h4>
          <p>Workshop Conducted</p>
        </div>
      </div>

      <div className="about-section">
        <div className="Alayer1">
          <svg
            width="37"
            height="42"
            viewBox="0 0 37 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="29" cy="8" r="8" fill="#473FE1" />
            <circle cx="16.5" cy="31.5" r="10.5" fill="#473FE1" />
            <circle cx="6" cy="14" r="6" fill="#473FE1" />
          </svg>
        </div>
        <div className="Alayer2">
          <svg
            width="37"
            height="42"
            viewBox="0 0 37 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="8"
              cy="34"
              r="8"
              transform="rotate(-180 8 34)"
              fill="#473FE1"
            />
            <circle
              cx="20.5"
              cy="10.5"
              r="10.5"
              transform="rotate(-180 20.5 10.5)"
              fill="#473FE1"
            />
            <circle
              cx="31"
              cy="28"
              r="6"
              transform="rotate(-180 31 28)"
              fill="#473FE1"
            />
          </svg>
        </div>
        <div>
          <img src={image12} className="main-image" alt="" />
          <img src={image13} alt="" className="overlay-image" />
        </div>

        <div className="ab-con">
          <p className="about-text">About Us</p>
          <p className="about-sub-text">
            Join a vibrant learning community, gain hands-on experience, and
            take the next step toward a successful career.
          </p>
          <div className="benefits-list">
            <div className="benefit-item">
              <img src={frame} className="benefit-img" alt="" />
              <div>
                <p className="benefit-title" style={{ color: "#1B1B1B" }}>
                  Experienced instructors
                </p>
                <p className="benefit-description" style={{ color: "#1B1B1B" }}>
                  Learn from industry experts with real-world experience and
                  deep knowledge.
                </p>
              </div>
            </div>
            <div className="benefit-item">
              <img src={frame1} className="benefit-img" alt="" />
              <div>
                <p className="benefit-title" style={{ color: "#1B1B1B" }}>
                  Job placement support
                </p>
                <p className="benefit-description" style={{ color: "#1B1B1B" }}>
                  Get career guidance, resume building, and access to job
                  opportunities with our dedicated placement support.
                </p>
              </div>
            </div>
            <div className="benefit-item">
              <img src={frame2} className="benefit-img" alt="" />
              <div>
                <p className="benefit-title" style={{ color: "#1B1B1B" }}>
                  Industry-aligned curriculum
                </p>
                <p className="benefit-description" style={{ color: "#1B1B1B" }}>
                  Stay ahead with courses designed to meet current industry
                  demands and skill requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="a-main-container">
        <div className="Alayer3">
          <svg
            width="37"
            height="42"
            viewBox="0 0 37 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="29" cy="8" r="8" fill="#473FE1" />
            <circle cx="16.5" cy="31.5" r="10.5" fill="#473FE1" />
            <circle cx="6" cy="14" r="6" fill="#473FE1" />
          </svg>
        </div>
        <div className="Alayer4">
          <svg
            width="37"
            height="42"
            viewBox="0 0 37 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="8"
              cy="34"
              r="8"
              transform="rotate(-180 8 34)"
              fill="#473FE1"
            />
            <circle
              cx="20.5"
              cy="10.5"
              r="10.5"
              transform="rotate(-180 20.5 10.5)"
              fill="#473FE1"
            />
            <circle
              cx="31"
              cy="28"
              r="6"
              transform="rotate(-180 31 28)"
              fill="#473FE1"
            />
          </svg>
        </div>
        <div className="main-a-text">
          <p className="a-main-text-title">
            Build your <span style={{ color: "#473FE1" }}>Career</span> And
            Upgrade <span style={{ color: "#473FE1" }}>Your Life</span>
          </p>
          <p className="a-main-text-sub-title">
            Unlock endless possibilities with our comprehensive learning
            solutions. Gain industry-relevant skills, hands-on experience, and
            expert guidance to stay ahead in today's competitive world.
          </p>
          <p className="a-main-text-sub-title">
            Our mission is to empower you with the knowledge and confidence
            needed to achieve your career and personal growth goals.
          </p>
          <Button
            className="enroll-button"
            style={{
              backgroundColor: "#473FE1",
              borderRadius: "100px",
              color: "#FFFFFF",
            }}
          >
            Enroll Now
          </Button>
        </div>

        <div>
          <img src={image14} alt="cus" className="youtube-image" />
        </div>
      </div>

      <div className="academy-container">
        <div className="Alayer5">
          <svg
            width="37"
            height="42"
            viewBox="0 0 37 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="29" cy="8" r="8" fill="#473FE1" />
            <circle cx="16.5" cy="31.5" r="10.5" fill="#473FE1" />
            <circle cx="6" cy="14" r="6" fill="#473FE1" />
          </svg>
        </div>
        <div className="Alayer6">
          <svg
            width="37"
            height="42"
            viewBox="0 0 37 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="8"
              cy="34"
              r="8"
              transform="rotate(-180 8 34)"
              fill="#473FE1"
            />
            <circle
              cx="20.5"
              cy="10.5"
              r="10.5"
              transform="rotate(-180 20.5 10.5)"
              fill="#473FE1"
            />
            <circle
              cx="31"
              cy="28"
              r="6"
              transform="rotate(-180 31 28)"
              fill="#473FE1"
            />
          </svg>
        </div>
        <p className="academy-text">Our Academy Way of Learning</p>
        <p className="academy-sub-text">
          Learn Full Stack Engineering, Business Analysis, and Data Science with
          Industry Experts.
        </p>
        <div className="card-container">
          <div className="card-container-1">
            {cardData.slice(0, 3).map((card) => (
              <Card
                key={card.id}
                style={{
                  width: "100%",
                  border: "2px solid #473FE1",
                  borderRadius: 20,
                }}
              >
                <div className="academy-card">
                  <img
                    className="card-image"
                    src={card.image}
                    alt={card.title}
                  />
                  <p className="card-title">{card.title}</p>
                  <p className="card-subtitle">{card.subtitle}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="card-container-2">
            {cardData.slice(3, 6).map((card) => (
              <Card
                key={card.id}
                style={{
                  width: "100%",
                  border: "2px solid #473FE1",
                  borderRadius: 20,
                }}
              >
                <div className="academy-card">
                  <img
                    className="card-image"
                    src={card.image}
                    alt={card.title}
                  />
                  <p className="card-title">{card.title}</p>
                  <p className="card-subtitle">{card.subtitle}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "4%",
          }}
        >
          <Button
            className="enroll-button"
            style={{
              backgroundColor: "#473FE1",
              borderRadius: "100px",
              color: "#FFFFFF",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Enroll Now
          </Button>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <div className="layer14">
          <svg
            width="37"
            height="42"
            viewBox="0 0 37 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="29" cy="8" r="8" fill="#473FE1" />
            <circle cx="16.5" cy="31.5" r="10.5" fill="#473FE1" />
            <circle cx="6" cy="14" r="6" fill="#473FE1" />
          </svg>
        </div>
        <div className="layer15">
          <svg
            width="37"
            height="42"
            viewBox="0 0 37 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="8"
              cy="34"
              r="8"
              transform="rotate(-180 8 34)"
              fill="#473FE1"
            />
            <circle
              cx="20.5"
              cy="10.5"
              r="10.5"
              transform="rotate(-180 20.5 10.5)"
              fill="#473FE1"
            />
            <circle
              cx="31"
              cy="28"
              r="6"
              transform="rotate(-180 31 28)"
              fill="#473FE1"
            />
          </svg>
        </div>
        <p className="testimonials-heading">Testimonials!</p>
        <div style={{ margin: "-5% 5%" }}>
          <Carousel
            dotListClass="custom-dots"
            showDots={!isDesktop}
            swipeable={true}
            customLeftArrow={isDesktop ? <CustomLeftArrow /> : null}
            customRightArrow={isDesktop ? <CustomRightArrow /> : null}
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass="carousel-item-padding"
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 3,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 768,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 40,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 768,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            sliderClass=""
            slidesToSlide={1}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card1">
                <div className="layer21">
                  <svg
                    width="37"
                    height="42"
                    viewBox="0 0 37 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="8"
                      cy="34"
                      r="8"
                      transform="rotate(-180 8 34)"
                      fill="white"
                    />
                    <circle
                      cx="20.5"
                      cy="10.5"
                      r="10.5"
                      transform="rotate(-180 20.5 10.5)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="28"
                      r="6"
                      transform="rotate(-180 31 28)"
                      fill="white"
                    />
                  </svg>
                </div>
                <p className="testimonial-review">{testimonial.review}</p>
                <div style={{ display: "flex", gap: 10 }}>
                  <img
                    src={testimonial.image}
                    width="46px"
                    height="46px"
                    alt={testimonial.name}
                  />
                  <div>
                    <p className="testimonial-name">{testimonial.name}</p>
                    <p className="testimonial-description">
                      {testimonial.designation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <div className="upcoming-batch">
        <div className="layer16">
          <svg
            width="37"
            height="42"
            viewBox="0 0 37 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="29" cy="8" r="8" fill="#473FE1" />
            <circle cx="16.5" cy="31.5" r="10.5" fill="#473FE1" />
            <circle cx="6" cy="14" r="6" fill="#473FE1" />
          </svg>
        </div>
        <div className="layer17">
          <svg
            width="37"
            height="42"
            viewBox="0 0 37 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="8"
              cy="34"
              r="8"
              transform="rotate(-180 8 34)"
              fill="#473FE1"
            />
            <circle
              cx="20.5"
              cy="10.5"
              r="10.5"
              transform="rotate(-180 20.5 10.5)"
              fill="#473FE1"
            />
            <circle
              cx="31"
              cy="28"
              r="6"
              transform="rotate(-180 31 28)"
              fill="#473FE1"
            />
          </svg>
        </div>
        <div className="services-text">
          <p className="faq-title">FAQ</p>
          <p className="faq-sub-title">
            Find answers to common questions about our courses, enrollment, and
            more.
          </p>
          <Faq />
        </div>
      </div>

      <div className="cta-container">
        <div className="layer20">
          <svg
            width="37"
            height="42"
            viewBox="0 0 37 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="29" cy="8" r="8" fill="white" />
            <circle cx="16.5" cy="31.5" r="10.5" fill="white" />
            <circle cx="6" cy="14" r="6" fill="white" />
          </svg>
        </div>
        <div className="layer21">
          <svg
            width="37"
            height="42"
            viewBox="0 0 37 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="8"
              cy="34"
              r="8"
              transform="rotate(-180 8 34)"
              fill="white"
            />
            <circle
              cx="20.5"
              cy="10.5"
              r="10.5"
              transform="rotate(-180 20.5 10.5)"
              fill="white"
            />
            <circle
              cx="31"
              cy="28"
              r="6"
              transform="rotate(-180 31 28)"
              fill="white"
            />
          </svg>
        </div>
        <p className="cta-title">Kickstart Your Career in Tech Today!</p>
        <p className="cta-subtitle">
          Learn Full Stack Engineering, Business Analysis, and Data Science with
          Industry Experts.
        </p>
        <Button
          className="enroll-button"
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "100px",
            color: "#473FE1",
          }}
        >
          Enrol now
        </Button>
      </div>

      <Footer />
    </div>
  );
}
