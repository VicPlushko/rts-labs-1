import React, { Component } from "react";
import { connect } from "react-redux";
import SearchForm from "./SearchForm";
import store from "../js/store/index";
import API from "../utils/API";

const mapStateToProps = state => {
    return { searchTerms: state.searchTerms };
};

const state = store.getState();

class ArticleSearch extends Component {

    state = {
        articles: [],
        searched: false
    }

    componentDidMount = () => {
        console.log("Console logging state", state);  // This logs my redux state object
        console.log("Console log - this.props.searchTerm", this.props.searchTerms); // this.props.searchTerm is undefined
        // console.log("Console log - props.searchTerm", props.searchTerm);
        // console.log("Console log - this.state.searchTerm", this.state.searchTerm);
        console.log("state.searchTerm", state.searchTerms);
        
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.searchTerms !== prevProps.searchTerms) {
            // console.log("Console logging state in componentDidUpdate", this.props.searchTerms);

            API.search(this.props.searchTerms).then(res => {
                console.log(res.data);
                this.setState({
                    articles: res.data.hits,
                    searched: true
                });
            });
        }
        else {
            return
        }
    }
    

    render() {

        if (!this.state.searched) {
            return (
                <>
                    <h1>Search for articles!</h1>
                </>
            )
        }

        else if (this.state.searched) {
            return (
                <>
                    {this.state.articles.map((article, index) => {
                        return (
                            <div className="card">
                                <div className="card-body" key={index}>
                                    <h5 className="card-title">{article.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{article.author}</h6>
                                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="card-link">Link to Article</a>
                                </div>
                            </div>
                        )
                    })}
                </>
            )
        }
    }
}

const Article = connect(mapStateToProps)(ArticleSearch);
export default Article;