
import React from "react";

function Header({searchTerm, setSearchTerm}) {
    const handleSearchChange = (e) =>{
        setSearchTerm(e.target.value);

    };

    return(
        <div className="top-bar">
          <h1> JOB-CHASER</h1>
          <div className="search-box">
            <input
            type="text"
            placeholder="Sök"
            value={searchTerm}
            onChange={handleSearchChange}
            />
            <button type="button">Sök</button>
          </div>
        </div>
    )
}

export default Header;

