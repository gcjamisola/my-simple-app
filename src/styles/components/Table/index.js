import styled from 'styled-components';

const Table = styled.div`
	width: 100%;
	padding-left: 15px;
	padding-right: 15px;
	border-bottom: 2px solid #e0e0e0;
	border-collapse: collapse;
	padding-top: 5px;

	background-color: ${props => props.header ? '#FFEEDB' : 'initial'};
	font-weight: ${props => props.header ? 'bold' : 'initial'};
	padding-top: ${props => props.header ? '8px' : 'initial'};
	padding-bottom: ${props => props.header ? '8px' : 'initial'};

	.text-4, .text-2, .text {
		flex-grow: 1;
	}

	.text {
		width: 180px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		padding-right: 20px;
	}

	.wrapper {
		display: flex;
		flex-direction: row;
		flex-grow: 0;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		text-align: ${props => props.header ? 'center' : 'initial'};
		height: 50px;
	}
`;

export { Table };
