import styled from 'styled-components';

const Form = styled.form`
	max-width:400px;
	margin:50px auto;
	background:#fff;
	border-radius:2px;
	padding:20px;

	ul{
		list-style:none;
		padding:0;
		margin:0;
	}

	li {
		display: block;
		padding: 9px;
		border:1px solid #DDDDDD;
		margin-bottom: 30px;
		border-radius: 3px;

		&:last-child{
			border:none;
			margin-bottom: 0px;
			text-align: center;
		}

		& > label{
			display: block;
			float: left;
			margin-top: -19px;
			background: #FFFFFF;
			height: 20px;
			padding: 2px 5px 2px 5px;
			color: #9e9e9e;
			font-size: 14px;
			overflow: hidden;
		}

		& > span{
			background: #ffe5bd;
			display: block;
			padding: 3px;
			margin: 0 -9px -9px -9px;
			text-align: center;
			color: #ff9400;
			font-size: 11px;
		}
	}


	input[type="text"],
	input[type="date"],
	input[type="datetime"],
	input[type="email"],
	input[type="number"],
	input[type="search"],
	input[type="time"],
	input[type="url"],
	input[type="password"],
	textarea,
	select
	{
		box-sizing: border-box;
		width: 100%;
		display: block;
		outline: none;
		border: none;
		height: 25px;
		line-height: 25px;
		font-size: 16px;
		padding: 0;
	}

	input[type="text"][name="street"],
	input[type="text"][name="city"],
	input[type="text"][name="zipcode"] {
		border-bottom: 1px solid rgba(0,0,0,.25);
		margin-bottom: 10px;
	}

	input[type="text"]::placeholder {
		font-size: 10px;
		color: rgba(0,0,0,.5);
	}
`;

export {Form};