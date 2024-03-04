import React from "react";
import youtubeImage from "../assets/stack overflow/youtube1.png";
import stackoverflow from "../assets/stack overflow/stack1.png";
import goldengate from "../assets/stack overflow/golden1.png";
import notes from "../assets/stack overflow/note1.png";

const Project = () => {
  return (
    <>
      <div
        id="project"
        className="min-h-screen flex flex-col p-8 sm:p-16 md:p-24 justify-center bg-white"
      >
        {/* Themes: blue, purple and teal */}
        <div data-theme="teal" className="mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold px-4 md:px-0 text-center text-blue-600 animate__animated animate__fadeIn">
            Personal Projects
          </h2>
          <br />
          <p className="text-2xl text-center text-gray-800 mt-4">
            Check out some of the projects I worked on in my spare time.
            <br /> Each project showcases my skills and passion for development.
          </p>
          <br />
          <br />
          <br />
          {/* project 1 */}
          <section className="font-sans text-black transform transition duration-300 hover:scale-105">
            <div className="border border-blue-500 rounded-lg overflow-hidden">
              <div className="flex lg:flex-row flex-col lg:items-center">
                <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60 transform transition duration-300 hover:scale-105">
                  <div className="h-full">
                    <article className="h-full">
                      <div className="h-full flex items-center justify-center">
                        <div
                          className="w-733 h-612"
                          style={{ maxWidth: "533px", maxHeight: "512px" }}
                        >
                          <img
                            className="h-full w-full object-cover transform transition duration-300 hover:scale-105"
                            src={youtubeImage}
                            alt=""
                          />
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="p-4 bg-gray-100 font-semibold">
                  <div className="leading-relaxed">
                    <h2 className="leading-tight text-3xl font-bold text-blue-700">
                      YouTube Clone Using MERN
                    </h2>
                    <br />
                    <div className="text-gray-700 mb-4">
                      <ul className="list-disc ml-4">
                        <li>
                          The YouTube Clone is to replicate the core
                          functionalities of the YouTube.
                        </li>
                        <li>
                          Developed full-stack application for users to view,
                          upload, and interact with videos, using React.js,
                          Node.js, Express.js, MongoDB for Database Management &
                          Cloudinary for image, Video Storage.
                        </li>
                        <li>
                          Learned building scalable web applications and
                          understand how to handle media content in a web
                          environment.
                        </li>
                      </ul>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Technologies Used :
                      <br />
                      Frontend : JavaScript | React.js | Tailwind CSS
                      <br />
                      Backend : Node.js | Express.js | MongoDB | JWT
                      <br />
                      Additional : Cloudinary for video storage
                    </p>
                    <br />
                    <div className="flex justify-between ">
                      <a
                        className="mt-4 button button--secondary text-gray-700 flex items-center px-4 py-2 transform transition duration-300 hover:scale-105"
                        href="https://github.com/sanjaikannang/youtube-clone-FrontEnd.git"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://www.svgrepo.com/show/361181/github.svg"
                          alt="Frontend"
                          className="w-6 h-6 mr-2 "
                        />
                        Frontend
                      </a>
                      <a
                        className="mt-4 button button--secondary text-gray-700 flex items-center px-4 py-2 transform transition duration-300 hover:scale-105"
                        href="https://github.com/sanjaikannang/YouTube-Clone-BackEnd.git"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png?20180806170715 "
                          alt="Backend"
                          className="w-6 h-6 mr-2"
                        />
                        Backend
                      </a>
                      <a
                        className="mt-4 button button--secondary text-gray-700 flex items-center px-4 py-2 transform transition duration-300 hover:scale-105"
                        href="https://beautiful-gumdrop-645ef4.netlify.app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://www.svgrepo.com/show/457005/arrow-up-from-square.svg"
                          alt="View Project"
                          className="w-6 h-6 mr-2"
                        />
                        LiveSite
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <br />
          <br />
          <br />
          <br />
          {/* project 2 */}
          <section className="font-sans text-black transform transition duration-300 hover:scale-105">
            <div className="border border-blue-500 rounded-lg overflow-hidden">
              <div className="flex lg:flex-row flex-col lg:items-center">
                <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
                  <div className="h-full">
                    <article className="h-full">
                      <div className="h-full flex items-center justify-center">
                        <div
                          className="w-733 h-612"
                          style={{ maxWidth: "533px", maxHeight: "512px" }}
                        >
                          <img
                            className="h-full w-full object-cover transform transition duration-300 hover:scale-105"
                            src={stackoverflow}
                            alt=""
                          />
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="p-4 bg-gray-100 font-semibold">
                  <div className="leading-relaxed">
                    <h2 className="leading-tight text-3xl font-bold text-blue-700">
                      Stack Over Flow Clone using MERN
                    </h2>
                    <br />
                    <div className="text-gray-700 mb-4">
                      <ul className="list-disc ml-4">
                        <li>
                          The Stack Overflow Clone provide robust platform for
                          programming-related discussions and knowledge sharing.
                        </li>
                        <li>
                          Built a full-stack application enabling users to ask
                          questions, provide answers Using React.js
                          ,Node.js,Express.js & MongoDB.
                        </li>
                        <li>
                          Mastered building complex web applications and Learned
                          implementing user authentication.
                        </li>
                      </ul>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Technologies Used:
                      <br />
                      Frontend: JavaScript | React.js | Tailwind CSS
                      <br />
                      Backend: Node.js | Express.js | MongoDB | JWT
                    </p>
                    <br />
                    <div className="flex justify-between">
                      <a
                        className="mt-4 button button--secondary text-gray-700 flex items-center px-4 py-2 transform transition duration-300 hover:scale-105"
                        href="https://github.com/sanjaikannang/StackOverFlow-FrontEnd.git"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://www.svgrepo.com/show/361181/github.svg"
                          alt="Frontend"
                          className="w-6 h-6 mr-2 "
                        />
                        Frontend
                      </a>
                      <a
                        className="mt-4 button button--secondary text-gray-700 flex items-center px-4 py-2 transform transition duration-300 hover:scale-105"
                        href="https://github.com/sanjaikannang/StackOverFlow-Clone-BackEnd.git"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png?20180806170715 "
                          alt="Backend"
                          className="w-6 h-6 mr-2"
                        />
                        Backend
                      </a>
                      <a
                        className="mt-4 button button--secondary text-gray-700 flex items-center px-4 py-2 transform transition duration-300 hover:scale-105"
                        href=" https://tangerine-smakager-a47add.netlify.app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://www.svgrepo.com/show/457005/arrow-up-from-square.svg"
                          alt="View Project"
                          className="w-6 h-6 mr-2"
                        />
                        LiveSite
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <br />
          <br />
          <br />
          <br />
          {/* project 3 */}
          <section className="font-sans text-black transform transition duration-300 hover:scale-105">
            <div className="border border-blue-500 rounded-lg overflow-hidden">
              <div className="flex lg:flex-row flex-col lg:items-center">
                <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
                  <div className="h-full">
                    <article className="h-full">
                      <div className="h-full flex items-center justify-center">
                        <div
                          className="w-733 h-612"
                          style={{ maxWidth: "533px", maxHeight: "512px" }}
                        >
                          <img
                            className="h-full w-full object-cover transform transition duration-300 hover:scale-105"
                            src={goldengate}
                            alt=""
                          />
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="p-4 bg-gray-100 font-semibold">
                  <div className="leading-relaxed">
                    <h2 className="leading-tight text-3xl font-bold text-blue-700">
                      Golden Gate - Real Estate Application
                    </h2>
                    <br />
                    <div className="text-gray-700 mb-4">
                      <ul className="list-disc ml-4">
                        <li>
                          The Golden Gate Real Estate fulfills the need for a
                          platform enabling property exploration, buying, and
                          selling.
                        </li>
                        <li>
                          Developed a web application for effortless property
                          exploration, purchase, and listing in the real estate
                          market.
                        </li>
                        <li>
                          Gained practical experience in building complex
                          applications and integrating third-party services like
                          Cloudinary.
                        </li>
                      </ul>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Technologies Used :
                      <br />
                      Frontend : JavaScript | React.js | Tailwind CSS
                      <br />
                      Backend : Node.js | Express.js | MongoDB | JWT
                      <br />
                      Additional : Cloudinary for image storage
                    </p>
                    <br />
                    <div className="flex justify-between">
                      <a
                        className="mt-4 button button--secondary text-gray-700 flex items-center px-4 py-2 transform transition duration-300 hover:scale-105"
                        href="https://github.com/sanjaikannang/Golden-Gate-FrontEnd.git"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://www.svgrepo.com/show/361181/github.svg"
                          alt="Frontend"
                          className="w-6 h-6 mr-2"
                        />
                        Frontend
                      </a>
                      <a
                        className="mt-4 button button--secondary text-gray-700 flex items-center px-4 py-2 transform transition duration-300 hover:scale-105"
                        href="https://github.com/sanjaikannang/Golden-Gate-BackEnd.git"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png?20180806170715 "
                          alt="Backend"
                          className="w-6 h-6 mr-2"
                        />
                        Backend
                      </a>
                      <a
                        className="mt-4 button button--secondary text-gray-700 flex items-center px-4 py-2 transform transition duration-300 hover:scale-105"
                        href="https://dapper-tartufo-1bfe71.netlify.app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://www.svgrepo.com/show/457005/arrow-up-from-square.svg"
                          alt="View Project"
                          className="w-6 h-6 mr-2"
                        />
                        LiveSite
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <br />
          <br />
          <br />
          <br />
          {/* project 4 */}
          <section className="font-sans text-black transform transition duration-300 hover:scale-105">
            <div className="border border-blue-500 rounded-lg overflow-hidden">
              <div className="flex lg:flex-row flex-col lg:items-center">
                <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
                  <div className="h-full">
                    <article className="h-full">
                      <div className="h-full flex items-center justify-center">
                        <div
                          className="w-733 h-612"
                          style={{ maxWidth: "533px", maxHeight: "512px" }}
                        >
                          <img
                            className="h-full w-full object-cover transform transition duration-300 hover:scale-105"
                            src={notes}
                            alt=""
                          />
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="p-4 bg-gray-100 font-semibold">
                  <div className="leading-relaxed">
                    <h2 className="leading-tight text-3xl font-bold text-blue-700">
                      NoteWind - Note-Making Application
                    </h2>
                    <br />
                    <div className="text-gray-700 mb-4">
                      <ul className="list-disc ml-4">
                        <li>
                          I have Created Note Wind to offer users an intuitive
                          platform for efficient note creation, organization,
                          and management.
                        </li>
                        <li>
                          Developed Note Wind, a note-making application.
                          Seamlessly enables users to create, organize, and
                          manage notes.
                        </li>
                        <li>
                          Proficiency in designing and implementing complex web
                          applications using the MERN stack.
                        </li>
                      </ul>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Technologies Used:
                      <br />
                      Frontend: JavaScript | React.js | Tailwind CSS
                      <br />
                      Backend: Node.js | Express.js | MongoDB | JWT
                    </p>
                    <br />
                    <div className="flex justify-between">
                      <a
                        className="mt-4 button button--secondary text-gray-700 flex items-center px-4 py-2 transform transition duration-300 hover:scale-105"
                        href="https://github.com/sanjaikannang/NoteWind-Frontend.git"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://www.svgrepo.com/show/361181/github.svg"
                          alt="Frontend"
                          className="w-6 h-6 mr-2"
                        />
                        Frontend
                      </a>
                      <a
                        className="mt-4 button button--secondary text-gray-700 flex items-center px-4 py-2 transform transition duration-300 hover:scale-105"
                        href="https://github.com/sanjaikannang/backend.git"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png?20180806170715 "
                          alt="Backend"
                          className="w-6 h-6 mr-2"
                        />
                        Backend
                      </a>
                      <a
                        className="mt-4 button button--secondary text-gray-700 flex items-center px-4 py-2 transform transition duration-300 hover:scale-105"
                        href="https://shimmering-cobbler-b07423.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://www.svgrepo.com/show/457005/arrow-up-from-square.svg"
                          alt="View Project"
                          className="w-6 h-6 mr-2"
                        />
                        LiveSite
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <br />
        <br />
        <h2 className="text-2xl font-bold px-0 text-center text-blue-600 ">
          - Student Management System -
          <br /> - Note App with Email Remainder -
          <br /> - Cross Platform Application Launcher -
          <br />
          <br /> And Many More..
        </h2>
        <br />
      </div>
    </>
  );
};

export default Project;
