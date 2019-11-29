import React from 'react';

class Comment extends React.Component {
	render() {
	  const name = this.props.name
	  const message = this.props.message
	  return (
		  <div>{name + "\xa0\xa0|\xa0\xa0" + message}</div> 
	  );
	}
  }

class ListOfComments extends React.Component {
	render() {
		const retrievedObjects = this.props.retrievedObjects;
		if (retrievedObjects != null) {
			const listItems = retrievedObjects.map(ro =>
			<Comment name={ro.name} message={ro.message} />
			)
			return (
				<div align="left">{listItems}</div>
			);
		}
		else {
			return (
				<div>There is no comment!</div>
				);
		}
	}
}

export default ListOfComments