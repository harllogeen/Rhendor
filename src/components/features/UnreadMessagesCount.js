import axios from 'axios';
import { Component } from 'react'
import { CallParentMethod } from 'des-utilities';
import HttpRequest from 'des-http-processor';
import { BindThis } from 'des-utilities';

export class UnreadMessagesCount extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0
		}
		// set this
		let self = this;

		// fetch count from database
		const token = sessionStorage.getItem('token');
		axios.get('https://backend.myrhenda.com/api/v1/count-unread-messages', {
			headers: { "Authorization": `Bearer ${token}` }
		})
			.then(function (response) {
				self.setState({
					count: response.data.data.message_count
				})
			})
			.catch(function (error) {
			});

		// bind this
		BindThis(this, ['processResponse', 'refreshCount', 'passCount']);
	}

	componentDidMount() {
		this.refreshInterval = setInterval(() => {
			this.refreshCount();
		}, 5000);
	}

	componentWillUnmount() {
		clearInterval(this.refreshInterval);
	}

	refreshCount() {
		const token = sessionStorage.getItem('token');
		axios.get('https://backend.myrhenda.com/api/v1/count-unread-messages', {
			headers: { "Authorization": `Bearer ${token}` }
		})
			.then(function (response) {
				this.setState({
					count: response.data.data.message_count
				})
			})
			.catch(function (error) { });
	}

	// pass count to parent
	passCount() {
		CallParentMethod('unreadCount', { count: this.state.count });
	}

	// process response
	processResponse(response) {
		console.log('im inside process response');
		console.log(response);
		// set count in state
	}

	render() {
		const style = this.style ? this.style : 'text-sm text-white dark:text-gray-300 bg-orange-400 dark:bg-gray-600 p-1.5';
		return (
			<>
				{
				this.state.count > 1 &&
					(
						this.props.transparent
						? <span>({this.state.count})</span>
						: <span className={style}>{this.state.count}</span>
					)
				}
						{/* {
						} */}
				{/* pass count to parent */}
				{this.passCount}
			</>
		)
	}
}
