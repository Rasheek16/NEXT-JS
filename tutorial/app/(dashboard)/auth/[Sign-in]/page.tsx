import React from "react";

function SignInPage({ params }: { params: { "sign-in": string[] } }) {
  console.log(params);
  return <div>Sign IN</div>;
}

export default SignInPage;
