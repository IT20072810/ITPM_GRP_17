import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./wrapper.css"


const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const loginUser = () => {
		fetch("http://localhost:4000/api/login", {
			method: "POST",
			body: JSON.stringify({
				email,
				password,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.error_message) {
					alert(data.error_message);
				} else {
					alert(data.message);
					navigate("/dashboard");
					localStorage.setItem("_id", data.id);
				}
			})
			.catch((err) => console.error(err));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		loginUser();
		setEmail("");
		setPassword("");
	};

	return (
<main className="login">

<div class="wrapper">
      
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
    </div>

  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <img src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Login Image" className="img-fluid rounded" />
      </div>
      <div className="col-md-6">
        <div className="d-flex justify-content-around h-100">
          <div className="login-form-container">
            <h1 className="loginTitle text-white">Log into your account</h1>
            <form className="loginForm" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="form-control"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">SIGN IN</button>
              <p>
                Don't have an account? <Link to="/register">Create one</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>


	);
};

export default Login;
