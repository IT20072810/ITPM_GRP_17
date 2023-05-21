import React from "react";
import {
	NovuProvider,
	PopoverNotificationCenter,
	NotificationBell,
} from "@novu/notification-center";
import { useNavigate } from "react-router-dom";

const Nav = () => {
	const navigate = useNavigate();

	const onNotificationClick = (notification) =>
		navigate(notification.cta.data.url);

	const signOut = () => {
		localStorage.removeItem("_id");
		navigate("/");
	};
	return (

		
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
		<a className="navbar-brand" href="#">Life On Land Community Forum</a>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		  <span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse justify-content-between" id="navbarNav">
		  <ul className="navbar-nav">
			<li className="nav-item">
			  <button className="btn  me-2">Home</button>
			</li>
			<li className="nav-item">
			  <button className="btn  me-2">Projects</button>
			</li>
			<li className="nav-item">
			  <button className="btn  me-2">Donations</button>
			</li>
			{/* <li className="nav-item">
			  <button className="btn  me-2"></button>
			</li> */}
		  </ul>
		  <ul className="navbar-nav">
			<li className="nav-item">
			  <NovuProvider
				subscriberId="on-boarding-subscriber-id-123"
				applicationIdentifier="ABUUXI51_J8z"
			  >
				<PopoverNotificationCenter
				  onNotificationClick={onNotificationClick}
				  colorScheme="light"
				>
				  {({ unseenCount }) => (
					<a className="nav-link" href="#">
					  <NotificationBell unseenCount={unseenCount} />
					</a>
				  )}
				</PopoverNotificationCenter>
			  </NovuProvider>
			</li>
			<li className="nav-item">
			  <button className="btn btn-outline-danger" onClick={signOut}>Sign out</button>
			</li>
		  </ul>
		</div>
	  </nav>
	  

	);
};

export default Nav;
