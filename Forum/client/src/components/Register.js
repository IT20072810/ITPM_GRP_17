import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	const signUp = () => {
		fetch("http://localhost:4000/api/register", {
			method: "POST",
			body: JSON.stringify({
				email,
				password,
				username,
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
					alert("Account created successfully!");
					navigate("/");
				}
			})
			.catch((err) => console.error(err));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		signUp();
		setEmail("");
		setUsername("");
		setPassword("");
	};
	return (


		<main className="register">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="register-form-container">
          <h1 className="registerTitle text-white">Create an account</h1>
          <form className="registerForm" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                className="form-control"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
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
            <button type="submit" className="btn btn-primary">REGISTER</button>
            <p>
              Have an account? <Link to="/">Sign in</Link>
            </p>
          </form>
        </div>
      </div>
      <div className="col-md-6">
        <img src="https://images.pexels.com/photos/345522/pexels-photo-345522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Registration Image" className="img-fluid rounded float-end" />
      </div>
    </div>
  </div>
</main>


	);
};

export default Register;
