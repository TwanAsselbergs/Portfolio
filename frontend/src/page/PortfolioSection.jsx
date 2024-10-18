import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const PortfolioSection = () => {
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
    <div id="portfolio" className="w-[90%] border-b border-black py-20 mx-auto">
      <h1 className="text-[#c4cfde] text-[34px] md:text-[40px] lg:text-[60px] my-2 text-center font-bold">
        Portfolio
      </h1>
      <div className="w-full my-8 flex gap-6 overflow-x-auto">
        {Object.keys(posts).length
          ? posts.map((post) => (
              <div
                key={post.id}
                onClick={() => openModal(post)}
                className="min-w-[60%] md:min-w-[30%] mb-7 md:mb-0 w-full home-icon-btn rounded-lg flex justify-center items-center flex-col cursor-pointer px-6 md:px-8 py-4 hover:bg-[#2e3136] duration-500">
                <div className="w-full mb-1 portfolio-img rounded-xl pt-4">
                  <img
                    src={
                      post.featured_image_url ||
                      "https://via.placeholder.com/500"
                    }
                    alt={post.title.rendered}
                    className="w-full h-40 md:h-96 rounded-lg object-cover"
                  />
                </div>
                <div className="w-full flex px-1 my-3 justify-between">
                  <p className="text-[#c4cfde] text-[24px] font-bold">
                    {post.title.rendered}
                  </p>
                </div>
              </div>
            ))
          : "Loading...."}
      </div>

      {selectedPort && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-center justify-center z-[9999]">
          <div ref={modalRef} className="bg-[#212428] w-5/6 rounded-lg">
            <div className="w-[90%] h-[90vh] md:h-auto relative md:flex-row flex-col justify-center md:gap-[5%] port-click-overlay-bg md:px-8 py-14 items-center flex rounded-xl">
              <div className="xl:w-[45%] w[90%] sm:w-[60%] md:w-[50] mb-10 md:mb-0 lg:w-[60%] rounded-xl overflow-hidden">
                <img
                  src={
                    selectedPort.featured_image_url ||
                    "https://via.placeholder.com/500"
                  }
                  alt={selectedPort.title.rendered}
                  className="w-full h-full"
                />
              </div>
              <div className="xl:w-[45%] w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%]">
                <h5 className="text-[#c4cfde] text-[14px] mb-3 xl:mb-0 font-semibold">
                  {selectedPort.title.rendered}
                </h5>
                <h1 className="xl:text-[30px] mb-3 lg:mb-5 xl:mb-0 xl:leading-[4.2rem] text[#c4cfde] font-bold">
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

export default PortfolioSection;
