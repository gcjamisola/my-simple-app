import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import {NavContainer} from '../../../../styles';

const Navigation = props => {
	const { roleID } = props;

	return (
		<NavContainer>
			<StyledNavLink to="/" activeClassName="selected">Home</StyledNavLink>
			<StyledNavLink to="/register" activeClassName="selected">Register</StyledNavLink>
			{
				roleID !== 2 && 
				<StyledNavLink to="/email" activeClassName="selected">Email</StyledNavLink>
			}
			{
				roleID !== 3 && 
				<StyledNavLink to="/permissions" activeClassName="selected">Permissions</StyledNavLink>
			}
		</NavContainer>
	); 
}

export default connect(state => ({
	roleID: state.permission.roleID
}))(Navigation);

const BaseNavLink = styled(NavLink)`
	padding: 5px 10px;
	margin-right: 2em;
	text-align: center;
	text-decoration: none;
	color: orange;
	border-bottom: none;
	transition: border-bottom 0.2s ease;

	&:hover {
		border-bottom: 2px solid #f7bf6a;
	}
`;

const StyledNavLink = styled(({className, ...props}) => <BaseNavLink {...props} activeClassName={className} />)`
	color: #ff9b00;
	font-weight: bolder;
	border-bottom: 2px solid #f7bf6a;
`;