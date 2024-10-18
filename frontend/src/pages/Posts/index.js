import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaArrowRight, FaRegHeart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const PortfolioSection = () => {
  const [selectedPort, setSelectedPort] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let url = `${process.env.REACT_APP_API_ROOT}/posts`;
    axios.get(url).then((res) => {
      setPosts(res.data);
    });
  }, []);

  const openModal = (port) => {
    setSelectedPort(port);
  };

  const closeModal = () => {
    setSelectedPort(null);
  };

  return (
    <div id="portfolio" className="w-[90%] border-b border-black py-20 mx-auto">
      <h6 className="text-[#ff014f] text-[14px] text-center leading-[24px] md:leading-[14px] tracking-[1px] uppercase">
        Visit my portfolio and keep your feedback
      </h6>
      <h1 className="text-[#c4cfde] text-[34px] md:text-[40px] lg:text-[60px] my-2 text-center font-bold">
        My Portfolio
      </h1>
      <div className="w-full my-8 flex-wrap gap-6 md:flex justify-between">
        {Object.keys(posts).length
          ? posts.map((post) => (
              <div
                key={post.id}
                onClick={() => openModal(post)}
                className="xl:w-[31%] md:w-[48%] mb-7 md:mb-0 w-full home-icon-btn rounded-lg duration-[900] flex justify-center items-center flex-col cursor-pointer px-6 md:px-8 py-8 md:py-8">
                <div className="w-full mb-1 portfolio-img rounded-xl">
                  <img
                    src="https://via.placeholder.com/500"
                    className="w-full"
                    alt={post.title.rendered}
                  />
                </div>
                <div className="w-full flex px-1 my-3 justify-between">
                  <p className="text-[#ff014f] text-[12px] tracking-[1px] uppercase">
                    {post.title.rendered}
                  </p>
                  <p className="flex text-[13px] gap-1 items-center text-[#c4cfde]">
                    <FaRegHeart />
                    <span>{post.likes}</span>
                  </p>
                </div>
                <div className="text-[20px] md:text-[23px] px-1 text-[#c4cfde] font-semibold">
                  {post.excerpt.rendered}
                </div>
              </div>
            ))
          : "Loading...."}
      </div>

      {selectedPort && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#212428] flex items-center justify-center z-[9999]">
          <div className="w-[90%] h-[90vh] md:h-auto relative md:flex-row flex-col justify-center md:gap-[5%] port-click-overlay-bg md:px-8 py-14 items-center flex rounded-xl">
            <div className="xl:w-[45%] w-[90%] sm:w-[60%] md:w-[50%] mb-10 md:mb-0 lg:w-[60%] rounded-xl overflow-hidden">
              <img
                src="https://via.placeholder.com/500"
                alt={selectedPort.title.rendered}
                className="w-full h-full"
              />
            </div>
            <div className="xl:w-[45%] w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%]">
              <h5 className="text-[#878e99] text-[14px] mb-3 xl:mb-0 font-semibold">
                {selectedPort.title.rendered}
              </h5>
              <h1 className="xl:text-[30px] mb-3 lg:mb-5 xl:mb-0 xl:leading-[4.2rem] text-[#c4cfde] font-bold">
                {selectedPort.excerpt.rendered}
              </h1>
              <p className="font-semibold xl:text-[18px] text-[#878e99] text-[14px] mb-4 md:mb-4 lg:mb-3 xl:mb-8">
                {selectedPort.content.rendered}
              </p>
              <button className="flex home-icon-btn text-[14px] xl:text-[16px] duration-700 lg:px-6 px-3 py-3 lg:py-4 gap-1 items-center text-[#ff014f]">
                <span>View Project</span>
                <FaArrowRight />
              </button>
            </div>

            <div
              onClick={closeModal}
              className="p-3 port-click-overlay-bg cursor-pointer rounded-full text-white absolute right-[1%] text-[20px] md:text-[25px] top-[1%] md:top-[2%]">
              <IoMdClose />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioSection;
