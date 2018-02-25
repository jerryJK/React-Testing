import React, { Component } from 'react';

export default class CommentBox extends Component {

    constructor(props) {
      super(props);
      this.state = {
        text: ''
      }
    }

    handleTextInput = (event) => {
        this.setState({
          text: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
          text: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="commentBox form-group col-sm-5 mt-2">
                <textarea onChange={this.handleTextInput} value={this.state.text} className="form-control"/>
                <button action="submit" className="btn btn-success mt-2">Add comment</button>
            </form>

        );
    }
}
