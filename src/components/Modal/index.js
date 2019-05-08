import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';

class Popup extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false
		};

		this._onOpenModal = this._onOpenModal.bind(this);
		this._onCloseModal = this._onCloseModal.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.open !== this.props.open) {
			this.setState({open: nextProps.open});
		}
	}

	_onOpenModal() {
		this.setState({ open: true });
	}

	_onCloseModal() {
		this.setState({ open: false });
	}

	render() {
		const { open } = this.state;
		return(
			<Modal open={open} onClose={this._onCloseModal} little>
				<h2>Simple centered modal</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
					pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
					hendrerit risus, sed porttitor quam.
				</p>
			</Modal>
		);
	}
}

Popup.propTypes = {
	open: PropTypes.bool
};

export default Popup;