

const SocialSignIn = () => {
  return (
    <div className="">
      <div className="mt-3">
        <button
        
          className="mt-2 rounded-pill w-75 p-3 bg-success text-light fs-2 border-info "
        >
          Sign in with Google
        </button>
      </div>
      <div>
        <button className="mt-2 rounded-pill w-75 p-2 bg-success text-light fs-2 border-info font-bold">
          Sign in with Github
        </button>
      </div>
      <div>
        <button className="mt-2 rounded-pill p-2 w-75 bg-success text-light fs-2 border-info font-bold ">
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
};

export default SocialSignIn;
