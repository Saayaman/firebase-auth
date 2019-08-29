import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userSignUp } from '../actions/userLogin';
import SignUp from '../components/SignUp';

class SignUpContainer extends React.Component {
    render() {
        const { userSignUp, userError, authUser } = this.props;
        return(
            <SignUp
                userSignUp={userSignUp}
                userError={userError}
                authUser={authUser}
            />
        );
    }
}

// reading store data
function mapStateToProps(store) {
    console.log('store', store);
    const { error, authUser } = store.userLogin; 
    return {
        userError: error,
        authUser,
    }
}

// getting the actions and connecting to store
function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        { userSignUp }, dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignUpContainer);