import React from "react";
import { connect } from "react-redux";
// import API from "../utils/API";

const mapStateToProps = state => {
    return { searchArticles: state.searchArticles };
};

function ArticleSearch({ searchArticles }) {


    return (
        <>
            <h1>Search bar here...</h1>
            <h1>Search results here...</h1>
        </>
    )

}

const Search = connect(mapStateToProps)(ArticleSearch);
export default Search;