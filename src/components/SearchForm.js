import React, { Component } from "react";
import { connect } from "react-redux";
import { addSearch } from "../js/actions/index";

function mapDispatchToProps(dispatch) {
    return {
        addSearch: search => dispatch(addSearch(search))
    };
}

class ConnectedSearchForm extends Component {
    state = {
        searchTerms: ""
    };

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.addSearch(this.state.searchTerms);

        this.setState({
            searchTerms: ""
        });

    }

    handleChange = (event) => {
        this.setState({
            searchTerms: event.target.value
        });
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col col-sm-12 col-md-8 col-lg-6">
                            <form className="form-inline" 
                                onSubmit={this.handleSubmit}
                            >
                                <input className="form-control" type="search" id="formInput" placeholder="Search for articles" aria-label="Search"
                                    value={this.state.title}
                                    onChange={this.handleChange}
                                />
                                <button className="btn btn-outline-info" id="formBtn" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const SearchForm = connect(
    null,
    mapDispatchToProps
)(ConnectedSearchForm);

export default SearchForm;