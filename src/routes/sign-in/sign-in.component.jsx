import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import { signInWithGithubPopup } from "../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const Signin = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    //console.log(response);
    const userDoc = await createUserDocumentFromAuth(user);
  };

  const logGithubUser = async () => {
    const response = await signInWithGithubPopup();
    console.log(response);
  };

  return (
    <div>
      <h1>I am on sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <button onClick={logGithubUser}>Sign in with Github Popup</button>
    </div>
  );
};
export default Signin;
