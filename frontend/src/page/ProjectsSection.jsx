import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const ProjectsSection = () => {
  const [selectedPort, setSelectedPort] = useState(null);
  const [posts, setPosts] = useState([]);
  const modalRef = useRef(null);

  useEffect(() => {
    let url = `${process.env.REACT_APP_API_ROOT}/posts`;
    axios.get(url).then((res) => {
      setPosts(res.data);
    });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (selectedPort) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedPort]);

  const openModal = (port) => {
    setSelectedPort(port);
  };

  const closeModal = () => {
    setSelectedPort(null);
  };

  return (
    <div id="projects" className="w-[90%] py-20 mx-auto">
      <h1 className="text-[#c4cfde] text-[34px] md:text-[40px] lg:text-[60px] my-2 text-center font-bold">
        Projects
      </h1>
      <div className="w-full my-8 flex gap-2 md:gap-6 overflow-x-auto md:pb-8">
        {posts.map((post) => (
          <div
            key={post.id}
            onClick={() => openModal(post)}
            className="min-w-[80%] md:min-w-[45%] mb-7 md:mb-0 w-full home-icon-btn rounded-lg flex justify-center items-center flex-col cursor-pointer px-6 md:px-8 py-4 hover:bg-[#2e3136] drop-shadow-2xl hover:drop-shadow-md duration-500">
            <div className="w-full mb-1 pt-4">
              <img
                src={post.featured_image_url}
                alt={post.title.rendered}
                className="w-full h-40 md:h-96 rounded-lg object-cover shadow-2xl"
              />
            </div>
            <div className="w-full flex px-1 my-3 justify-between">
              <p className="text-[#c4cfde] text-[24px] font-bold max-h-12 overflow-hidden text-ellipsis whitespace-nowrap">
                {post.title.rendered}
              </p>
            </div>
          </div>
        ))}
      </div>
      {selectedPort && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-center justify-center z-[9999]">
          <div ref={modalRef} className="bg-[#212428] w-5/6 rounded-lg">
            <div className="w-[100%] h-[450px] md:h-auto relative md:flex-row flex-col justify-center md:gap-[5%] port-click-overlay-bg md:px-8 py-8 md:py-14 items-center flex rounded-lg">
              <div className="xl:w-[45%] w[90%] sm:w-[60%] md:w-[50] md:mb-0 lg:w-[60%] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={selectedPort.featured_image_url}
                  alt={selectedPort.title.rendered}
                  className="w-64 h-96 md:w-full md:h-96 object-cover"
                />
              </div>
              <div className="xl:w-[45%] w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] h-96 overflow-hidden flex flex-col justify-center">
                <h5 className="text-[#c4cfde] text-[34px] mt-4 md:mt-12 font-semibold text-center md:text-left whitespace-nowrap overflow-x-auto min-h-14">
                  {selectedPort.title.rendered}
                </h5>
                <h1 className="h-80 mt-4 text-[15px] md:text-[18px] text-[#c4cfde] text-center md:text-left pl-2 pr-2 md:pl-0 md:pr-0 overflow-y-auto">
                  {selectedPort.excerpt.rendered}
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;
