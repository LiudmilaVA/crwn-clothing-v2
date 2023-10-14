// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import "./authentication.styles.scss";
import {
  // auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  // signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const Authentication = () => {
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);

  //   if (response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //     console.log(userDocRef);
  //   }
  // }, []);

  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   createUserDocumentFromAuth(user);
  // };
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />

      {/* <button onClick={logGoogleUser}>Sign in with google popup</button> */}
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with google redirect
      </button> */}
    </div>
  );
};

export default Authentication;
