import React, { Component } from "react";
import { connect } from "react-redux";
import API from "../utils/API";

const mapStateToProps = state => {
    return { searchTerms: state.searchTerms };
};


class ArticleSearch extends Component {

    state = {
        articles: [],
        searched: false
    }

    componentDidUpdate = (prevProps) => {
        // Checking if the store's state has changed
        if (this.props.searchTerms !== prevProps.searchTerms) {

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

        // If the user has not searched for an article, render this
        if (!this.state.searched) {
            return (
                <div className="container">
                    <div className="jumbotron">
                        <h1 className="display-4">Hello, RTS Labs!</h1>
                        <hr className="my-4"/>
                        <p>Please use the search bar above to search the Hacker News API</p>
                    </div>
                </div>
            )
        }

        else if (this.state.searched) {
            return (
                <div className="container">
                    <div className="row">
                        {this.state.articles.map((article, index) => {
                            return (
                                <div className="col col-sm-12 col-md-6 col-lg-4" key={index}>
                                    <div className="card cardStyle">
                                        <div className="card-body">
                                            <h5 className="card-title">{article.title}</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">{article.author}</h6>
                                            <a href={article.url} target="_blank" rel="noopener noreferrer" className="card-link">Link to Article</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        }
    }
}

const Article = connect(mapStateToProps)(ArticleSearch);
export default Article;