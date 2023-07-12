import { createContext, useContext } from 'react';
import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

export const AuthContext = createContext({ user: '', setUser: () => {} });

export const useAuth = () => {
    const { user, setUser } = useContext(AuthContext);

    const logGoogleUser = async () => {
        const { user: _user } = await signInWithGooglePopup();
        setUser(_user.uid);
        localStorage.setItem("user", _user.uid);
        createUserDocumentFromAuth(user);
    }

    return { logGoogleUser }
}