import React from 'react';


//context
export const FirebaseContext = React.createContext(null);

//HOC: simply made a consumer component for reusability
export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
)