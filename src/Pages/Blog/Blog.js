import React from "react";

const Blog = () => {
  return (
    <div className="container mt-3">
      <h1 className="fs-1 text-info font-bold">
        Difference between authorization and authentication
      </h1>
      <p className="font-bold fs-5">
        Authentication confirms your identity to grant access to the system. It
        is the process of validating user credentials to gain user access. It
        determines whether user is what he claims to be. Authentication is the
        first step of authorization so always comes first. For example, students
        of a particular university are required to authenticate themselves
        before accessing the student link of the university’s official website.
        This is called authentication. Authorization determines whether you are
        authorized to access the resources. It is the process of verifying
        whether access is allowed or not.It determines what user can and cannot
        access.Authentication usually requires a username and a password.
        Authentication factors required for authorization may vary, depending on
        the security level. Authorization is done after successful
        authentication.For example, authorization determines exactly what
        information the students are authorized to access on the university
        website after successful authentication.
      </p>
      <h1 className="fs-1 text-info font-bold">Reasons for using firebase</h1>
      <p className="font-bold fs-5">
        Google Firebase is a platform that now offers active backend as a
        service (BaaS) for building dynamic web and mobile apps. It is a less
        technical and time-saving alternative to writing full-fledged backend
        code for dynamic apps.Google Firebase can turn this into a serverless
        app in no time. It also removes the need to manage databases yourself,
        as it does that for you.With Firebase,it's pretty simple to connect and
        use built-in third-party authentication providers, including Google,
        Facebook, Twitter, among others.
      </p>
      <h1 className="fs-1 text-info font-bold">
        Other services firebase provide other than authentication
      </h1>
      <p className="font-bold fs-5">
        <ul className="list-unstyled">
          <li>Cloud Firestore.</li>
          <li> Hosting.</li>
          <li>Cloud Storage.</li>
          <li>Cloud Functions.</li>
          <li> Google Analytics.</li>
          <li>Predictions.</li>
          <li>Cloud Messaging.</li>
        </ul>
      </p>
    </div>
  );
};

export default Blog;
