/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/desk.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "LinkedIn Clone",
    description:
      "Created a LinkedIn clone using React JS, Redux, Firebase, and Material UI. Users can sign in, post, and like posts.",
    url: "https://github.com/Nadjib4869/Linkedin-Clone",
  },
  {
    title: "Realtime Chat App",
    description:
      "Developed a realtime chat application using React JS, Firebase, and Material UI. Users can sign in, create chat rooms, and send messages.",
    url: "https://github.com/Nadjib4869/Realtime-Chat",
  },
  {
    title: "PromptSphere",
    description:
      "Developed a web application that helps you discover, create and share creative prompts, using Nextjs 13 and Tailwindcss ",
    url: "https://github.com/Nadjib4869/PromptSphere",
  },
  {
    title: "Weather App",
    description:
      "Developed a weather application using React JS, OpenWeather API, and Material UI. Users can search for a city and view the current weather.",
    url: "https://github.com/Nadjib4869/Weather-web-app",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio" style={{ backgroundColor: "#1f2833" }}>
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideInLeft",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
