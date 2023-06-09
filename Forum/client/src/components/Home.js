import React, { useEffect, useState } from "react";
import Likes from "../utils/Likes";
import Comments from "../utils/Comments";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import "./wave.css"


const Home = () => {
	const [thread, setThread] = useState("");
	const [threadList, setThreadList] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const checkUser = () => {
			if (!localStorage.getItem("_id")) {
				navigate("/");
			} else {
				fetch("http://localhost:4000/api/all/threads")
					.then((res) => res.json())
					.then((data) => setThreadList(data.threads))
					.catch((err) => console.error(err));
			}
		};
		checkUser();
	}, [navigate]);

	const createThread = () => {
		fetch("http://localhost:4000/api/create/thread", {
			method: "POST",
			body: JSON.stringify({
				thread,
				id: localStorage.getItem("_id"),
			}),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				alert(data.message);
				setThreadList(data.threads);
			})
			.catch((err) => console.error(err));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		createThread();
		setThread("");
	};
	return (
		<>
			<Nav />
			<main className='home'>
			<div>
     <div class="wave"></div>
     <div class="wave"></div>
     <div class="wave"></div>
  </div>
  <h1 className="homeTitle text-white">Create a Thread</h1>

				<form className='homeForm' onSubmit={handleSubmit}>
					<div className='home__container'>
						<label htmlFor='thread'> Add a Title / Description</label>
						<input
							type='text'
							name='thread'
							required
							value={thread}
							onChange={(e) => setThread(e.target.value)}
						/>
					</div>
					<button type="homeBtn" class="btn btn-success btn-lg">CREATE THREAD</button>
				</form>

				<div className='thread__container' >
					{threadList.map((thread) => (
						<div className='thread__item bg-light rounded' key={thread.id}>
						<p>{thread.title}</p>
						<div className='react__container'>
						  <Likes
							numberOfLikes={thread.likes.length}
							threadId={thread.id}
						  />
						  <Comments
							numberOfComments={thread.replies.length}
							threadId={thread.id}
							title={thread.title}
						  />
						</div>
					  </div>
					  
					))}
				</div>
			</main>

			<Footer/>
		</>
	);
};

export default Home;
