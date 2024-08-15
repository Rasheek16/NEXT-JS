"use client";

import React from "react";

function error({ error }: { error: Error }) {
  console.log(error);

  return <div>Error...</div>;
}

export default error;
