import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class SearchBar extends Component {
    state = {
        searchTerm: ""
    }

    handleSearchTermChange = searchTerm => {
        this.setState({ searchTerm });
        this.props.runSearch(searchTerm);
    }

    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="search" hidden>Search</Label>
                    <Input
                        type="text"
                        name="searchTerm"
                        id="search"
                        placeholder="Search for videos"
                        onChange={event => this.handleSearchTermChange(event.target.value)}
                        value={this.state.term}
                    />
                </FormGroup>
            </Form>
        )        
    }
}

export default SearchBar;