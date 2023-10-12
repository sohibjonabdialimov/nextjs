"use client";
// import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

const Login = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  let router = useRouter();

  const logIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (emailRef?.current?.value && passwordRef?.current?.value) {
      console.log(emailRef.current.value, passwordRef.current.value);

      fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailRef?.current?.value,
          password: passwordRef?.current?.value,
        }),
      })
        .then((res) => {
          if (res.status === 200) {
            console.log(res);
            console.log("ketdi");
            
            return res.json();
          }
        })
        .then((res) => {
          localStorage.setItem("token", JSON.stringify(res.token));
          console.log(res);
          console.log("keldi");
          
          router.push("/home");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="login_page">
      <form onSubmit={(e) => logIn(e)}>
        <input ref={emailRef} type="email" placeholder="Enter your email" />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Enter your password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
// eve.holt@reqres.in
