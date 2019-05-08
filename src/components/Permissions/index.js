import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Radio } from 'antd';
import { changePermission } from '../../redux/Permission/actions';
import styled from 'styled-components';

require('antd/dist/antd.less');

const RadioGroup = Radio.Group;

const Permissions = props => {
    return (
        <PermissionContainer>
            <RadioGroup onChange={e => props.changePermission(e.target.value)} value={props.roleID}>
                <Radio style={radioStyle} value={1}>Admin</Radio>
                <Radio style={radioStyle} value={2}>User</Radio>
                <Radio style={radioStyle} value={3}>Staff</Radio>
            </RadioGroup>
        </PermissionContainer>
    );
};


Permissions.propTypes = {
    changePermission: PropTypes.func,
    roleID: PropTypes.number
};

export default connect(
    state => ({
        roleID: state.permission.roleID
    }), 
    dispatch => ({
        changePermission: roleID => dispatch(changePermission(roleID))
    })
)(Permissions);

const PermissionContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
};