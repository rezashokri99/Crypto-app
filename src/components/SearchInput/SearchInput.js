import React, { useRef } from "react";
import "./SearchInput.css";
import { MdClear } from "react-icons/md";
// import { useLocation, useNavigate } from "react-router-dom";

const SearchInput = ({search, setSearch}) => {




  var inputFocus = useRef();
  var btnDelete = useRef();
  var inputField = useRef();

  const clearHandler = (e) => {
    e.preventDefault();
    setSearch("");
  };


 
  const changeHandler = (e) => {
    setSearch(e.target.value);
  }


  return (
    <div className="s128">
      <form  autoComplete="off">
        <div className="inner-form">
          <div className="row">
            <div ref={inputField} className="input-field first" id="first">
              <input
                ref={inputFocus}
                value={search}
                onChange={changeHandler}
                className="input isFocus"
                id="inputFocus"
                type="text"
                placeholder="Search"
              />
              <button ref={btnDelete} className="clear" id="clear">
                <MdClear onClick={clearHandler} />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
