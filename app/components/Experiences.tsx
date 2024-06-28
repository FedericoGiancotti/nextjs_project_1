"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const experiencesData = [
  {
    title: "Breakfast",
    location: "Kitchen",
    description: "I like to eat toasted bread with jelly and a cup of coffee.",
    icon: "fas fa-coffee",
    date: "From 8 am to 10 am",
  },
  {
    title: "Lunch",
    location: "Balcony",
    description:
      "For lunch is usually pasta with tomato sauce and a glass of water.",
    icon: "fas fa-utensils",
    date: "From 12 pm to 2 pm",
  },
  {
    title: "Dinner",
    location: "Dining room",
    description: "My favorite dinner is pizza and a glass of soda.",
    icon: "fas fa-pizza-slice",
    date: "From 6 pm to 8 pm",
  },
] as const;

const Experiences = () => {
  return (
    <section id="experience">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-6">
        Should be experiences but I like food
      </h2>
      <VerticalTimeline>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: "#333",
                color: "#fff",
                boxShadow: "none",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{ borderRight: "0.4 rem solid #9ca3af" }}
              date={item.date}
              icon={<i className={item.icon}></i>}
              iconStyle={{
                background: "#333",
                color: "#ADB7BE",
                fontSize: "1.5rem",
                padding: "0.5rem",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                textAlign: "center",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-[#ADB7BE]">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experiences;
