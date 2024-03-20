import React from "react";
import AboutPage from "../components/pages/AboutPage";
import DoctorsPage from "../components/pages/DoctorsPage";
import HomePage from "../components/pages/HomePage";
import Skit from "../components/skit/Skit";

const skits = [
  {
    id: 0,
    title: "Our Exceptional Team of Global Specialists",
    description:
      "Our specialists possess the highest level of qualification and experience, ensuring you access to premium-class global medical expertise. Regardless of your needs, we have a team of experts ready to provide you with outstanding and personalized medical care.",
    image: "doctor-specialists.jpg",
  },
  {
    id: 1,
    title: "One-Click Healthcare Access: Seamless Appointments with Ease",
    description:
      "We offer the convenience of scheduling doctor appointments with just one click, ensuring swift and easy access to medical care. Our innovative technologies streamline the appointment process, allowing you to focus on what matters most - your well-being.",
    image: "doctor-oneclick.jpg",
  },
  {
    id: 2,
    title: "Take the First Step to Wellness with Us",
    description:
      "We aim to be your partner in caring for your health, offering individual solutions and an exceptional level of medical service. Start your journey to health with us, and we will provide you with support and high quality healthcare at every stage.",
    image: "doctor-wellness",
  },
];

export default function Home() {
  return (
    <div>
      <HomePage />
      <AboutPage />
      {skits.map((item, i) => {
        return (
          <React.Fragment key={item.id}>
            <Skit
              id={item.id}
              description={item.description}
              title={item.title}
              background={item.image}
            />
            {i === 1 && <DoctorsPage />}
          </React.Fragment>
        );
      })}
    </div>
  );
}
