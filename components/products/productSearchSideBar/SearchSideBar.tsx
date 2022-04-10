import { useDispatch } from "react-redux";
import { closeSearch } from "../../../redux/uiSlice";
import { motion } from "framer-motion";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/router';

const cartVariants = {
  hidden: { x: 600 },
  visible: { x: 0 },
  exit: { x: 600 },
};
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0 } },
  exit: { opacity: 0, transition: { duration: 0 } },
};



export const SearchSideBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return;

    router.push(`/search/${searchTerm}`); 
    dispatch(closeSearch());
  };

  return (
    <>
      <motion.div
        className="overlay-search"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      ></motion.div>
      <div className="search__container">
        <motion.div
          className="search__wrapper"
          variants={cartVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="search__main-header">
            <button
              className="btn-search-close"
              onClick={() => dispatch(closeSearch())}
            >
              {"<"}
            </button>
            <h2>Search</h2>
            <div></div>
          </div>

          <div className="search-form">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => (e.key === "Enter" ? onSearchTerm() : null)}
            />
            <button className="search-btn" onClick={() => onSearchTerm()}>
              <Image
                src={"/icons/search.svg"}
                alt="bag"
                width={20}
                height={20}
              />
            </button> 
          </div>

         
        </motion.div>
      </div>
    </>
  );
};
