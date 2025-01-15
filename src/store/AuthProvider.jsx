import {createContext, useCallback, useReducer} from 'react';
import PropTypes from 'prop-types';
export const AuthContext = createContext({
  user: undefined
});

const reducer = (state, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        user: action.payload
      };
    case 'USER_SIGNOUT':
      return {
        user: undefined
      };
    default:
      return state;
  }
};

export default function AuthProvider({children}) {
  const [authState, dispatch] = useReducer(reducer, {
    user: undefined
  });

  const userLogin = useCallback((user) => {
    dispatch({
      type: 'USER_LOGIN',
      payload: user
    });
  }, []);
  const userSignOut = useCallback(() => {
    dispatch({
      type: 'USER_SIGNOUT'
    });
  }, []);
  const returns = {
    userLogin,
    userSignOut,
    authData: authState
  };
  return <AuthContext.Provider value={returns}>{children}</AuthContext.Provider>;
}
AuthProvider.propTypes = {
  children: PropTypes.node
};
