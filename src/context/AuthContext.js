import { useContext, useReducer, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from '../utils/storageService';
import {
  CLEAR_ALERT,
  LOGIN,
  LOGIN_BEGIN,
  LOGIN_ERROR,
  LOGOUT,
} from './AuthActions';
import authReducer from './AuthReducer';
// firebase
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const { user, token } = getUserFromLocalStorage();

const initialState = {
  user: user ? JSON.parse(user) : null,
  token: token,
  alertText: '',
  alertType: '',
  isLoading: false,
};

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const loginUser = async (email, password) => {
    dispatch({ type: LOGIN_BEGIN });

    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        addUserToLocalStorage(user.providerData || '', user.accessToken || '');
        dispatch({
          type: LOGIN,
          payload: {
            token: user.accessToken,
            user: user.providerData,
          },
        });
      })
      .catch((error) => {
        if ((error.code = 400)) error.message = 'Wrong Email or Password';
        dispatch({ type: LOGIN_ERROR, payload: error.message });
        // ..
      })
      .finally(clearAlert);
  };

  const logout = () => {
    dispatch({ type: LOGOUT });
    removeUserFromLocalStorage();
  };

  return (
    <AuthContext.Provider value={{ ...state, loginUser, logout, clearAlert }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  return useContext(AuthContext);
};
export { AuthProvider, initialState, useAuthContext };
