import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SignInContainer extends React.Component {
    render() {
        return(
            <div>Sign in</div>
        );
    }
}

// reading store data
function mapStateToProps(store) {
    
}

// getting the actions and connecting to store
function mapDispatchToProps(dispatch) {

}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignInContainer);