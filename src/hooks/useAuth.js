import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";

const useAuth = () => {
	// Login user
	const passwordLogin = ({ email, password }) => {
		return signInWithEmailAndPassword(auth, email, password);
	};
	return { passwordLogin };
};

export default useAuth;
