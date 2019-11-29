import React from 'react';
import ListOfComments from './ListOfComments.js';

class CommentView extends React.Component {

    render() {
        return (
            <ListOfComments getLatestComments={this.props.getLatestComments} username={this.props.username} getYelpComments={this.props.getYelpComments}/>
        )
    }
}

export default CommentView