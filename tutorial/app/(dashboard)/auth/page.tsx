import React from "react";

function AuthPage({ params }: { params: { "sign-in": string } }) {
  console.log(params);

  return <div>Auth IN</div>;
}

export default AuthPage;
