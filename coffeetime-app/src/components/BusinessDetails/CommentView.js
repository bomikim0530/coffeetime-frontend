import React from 'react';
import ListOfComments from './ListOfComments.js';

class CommentView extends React.Component {
    
    render() {
        let retrievedObjects = JSON.parse(localStorage.getItem(this.props.pageid));
        return(
            <div>
            <ListOfComments retrievedObjects = {retrievedObjects}/>
            </div>
        )
    }
} 

export default CommentView