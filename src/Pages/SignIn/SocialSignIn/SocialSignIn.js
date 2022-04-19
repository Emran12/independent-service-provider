import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const SocialSignIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

  const navigate = useNavigate();
  if (user || user1) {
    navigate("/home");
  }

  return (
    <div>
      <div className="mt-3">
        <button
          onClick={() => signInWithGoogle()}
          className="mt-2 rounded-pill w-75 p-2 bg-success text-light fs-2 border-info "
        >
          Sign in with Google
        </button>
      </div>
      <div>
        <button
          onClick={() => signInWithGithub()}
          className="mt-2 rounded-pill w-75 p-2 bg-success text-light fs-2 border-info font-bold"
        >
          Sign in with Github
        </button>
      </div>
    </div>
  );
};

export default SocialSignIn;
