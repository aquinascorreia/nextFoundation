import React from 'react';
import Layout from '../components/Layout'
import {withRouter} from 'next/router'

class Post extends React.Component {
	render() {
		debugger;
		console.log(this.props);

		return(
			<Layout>
				<h2>I m a Post page</h2>
				<h1>{this.props.router.query.UniqueMessageId}</h1>
			</Layout>
		)
	}
}

export default withRouter(Post);