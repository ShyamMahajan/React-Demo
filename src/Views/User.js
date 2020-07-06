import React from 'react';
import PageTitle from '../Components/PageTitle/PageTitle';
import StyleWrapper from './users.style';
import UserTable from '../Components/Users/UserTable'

const User = (props) => {
    return <StyleWrapper>
        <PageTitle title="Users"></PageTitle>
        <UserTable {...props} />
    </StyleWrapper>
}

export default User