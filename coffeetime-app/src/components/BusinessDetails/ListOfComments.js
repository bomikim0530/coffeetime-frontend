import React from 'react';

class Comment extends React.Component {
	render() {
		const name = this.props.username
		const message = this.props.message
		return (
			<div><b>{name}</b>{"  \xa0\xa0|\xa0\xa0" + message}</div>
		);
	}
}

class ListOfComments extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
			latestComments: [],
			yelpComments: []
		}
		this.setComments = this.setComments.bind(this);
    }

    componentWillMount() {
		this.setComments();
    }

    componentWillReceiveProps() {
		this.setComments();
	}

	setComments() {
		let latestComments = this.props.getLatestComments();
		let yelpComments = this.props.getYelpComments();
		this.setState({latestComments: latestComments})
        this.setState({yelpComments: yelpComments})
	}

	render() {
		const yelpComments = this.state.yelpComments
		const platformComments = this.state.latestComments;
		const latestComments = yelpComments.concat(platformComments);
		if (latestComments != null) {
			const listItems = latestComments.map((ro, key) =>
				<Comment username={ro.name} key={key} name={ro.name} message={ro.message} />
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