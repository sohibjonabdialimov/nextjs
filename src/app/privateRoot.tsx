"use client";

import Login from "./(pages)/login/Login";
const PrivateRoot = ({ children }: { children: React.ReactNode }) => {
  let token = localStorage.getItem("token");
  
  return token ? <div>{children}</div> : <Login />;
};

export default PrivateRoot;
