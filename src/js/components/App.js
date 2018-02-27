import React, { Component } from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

export default class App extends Component {
    render() {
      let comments = ['aaaaa','bbbbb']
        return (
            <div className="app">
                <CommentBox />
                <CommentList comm={comments}/>
            </div>

        );
    }
}
