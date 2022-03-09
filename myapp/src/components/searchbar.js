import { React, useState } from "react";
import '../style.css';
import { FaSearch } from "react-icons/fa";

function Search() {
    const [query, setQuery] = useState("");
    /*let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };*/
    return (
        <div className="mainSearch">
            <div className="searchIcon">
                <FaSearch />
            </div>
            <input
                type="text"
                id="header-search"
                placeholder="Search cocktails..."
                name="s"
                onChange={event => setQuery(event.target.value)}
            />
        </div>
    );
}

export default Search;