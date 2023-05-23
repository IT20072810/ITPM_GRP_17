const express = require("express");
const { Novu } = require("@novu/node");
const novu = new Novu("d792b97a4d0c6316661cc3e75107cfcb");
const cors = require("cors");
const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const users = [];
const threadList = [];

const generateID = () => Math.random().toString(36).substring(2, 10);

app.post("/api/login", (req, res) => {
	const { email, password } = req.body;
	let result = users.filter(
		(user) => user.email === email && user.password === password
	);

	if (result.length !== 1) {
		return res.json({
			error_message: "Incorrect credentials",
		});
	}

	res.json({
		message: "Welcome!",
		id: result[0].id,
	});
});

app.post("/api/register", async (req, res) => {
	const { email, password, username } = req.body;
	const id = generateID();
	const result = users.filter(
		(user) => user.email === email && user.password === password
	);

	if (result.length === 0) {
		const newUser = { id, email, password, username };
		await novu.subscribers.identify(id, { email });

		users.push(newUser);
		return res.json({
			message: "Signed Up!",
		});
	}
	res.json({
		error_message: "User already exists",
	});
});

app.post("/api/create/thread", async (req, res) => {
	const { thread, userId } = req.body;
	let threadId = generateID();
	threadList.unshift({
		id: threadId,
		title: thread,
		userId,
		replies: [],
		likes: [],
	});

	await novu.topics.create({
		key: threadId,
		name: thread,
	 });

	await novu.topics.addSubscribers(threadId, {
	 	subscribers: [userId],
	 	//replace with your subscriber ID to test run
		// subscribers: ["<YOUR_SUBSCRIBER_ID>"],
	 });

	res.json({
		message: "Thread created!",
		threads: threadList,
	});
});

app.get("/api/all/threads", (req, res) => {
	res.json({
		threads: threadList,
	});
});

app.post("/api/thread/like", (req, res) => {
	const { threadId, userId } = req.body;
	const result = threadList.filter((thread) => thread.id === threadId);
	const threadLikes = result[0].likes;

	const authenticateReaction = threadLikes.filter((user) => user === userId);

	if (authenticateReaction.length === 0) {
		threadLikes.push(userId);
		return res.json({
			message: "You've reacted to the post!",
		});
	}
	res.json({
		error_message: "You can only react once!",
	});
});

app.post("/api/thread/replies", (req, res) => {
    //👇🏻 The post ID
    const { id } = req.body;
    //👇🏻 searches for the post
    const result = threadList.filter((thread) => thread.id === id);
    //👇🏻 return the title and replies
    res.json({
        replies: result[0].replies,
        title: result[0].title,
    });
});

app.post("/api/create/reply", async (req, res) => {
    //👇🏻 accepts the post id, user id, and reply
    const { id, userId, reply } = req.body;
    //👇🏻 search for the exact post that was replied to
    const result = threadList.filter((thread) => thread.id === id);
    //👇🏻 search for the user via its id
    const user = users.filter((user) => user.id === userId);
    //👇🏻 saves the user name and reply
    result[0].replies.unshift({
        userId: user[0].id,
        name: user[0].username,
        text: reply,
    });
	

    res.json({
        message: "Response added successfully!",
    });
});


app.delete("/api/delete/thread/:id", async (req, res) => {
	const { id } = req.params;
  
	// Find the index of the thread with the specified ID in the threadList array
	const threadIndex = threadList.findIndex((thread) => thread.id === id);
  
	if (threadIndex === -1) {
	  // If the thread doesn't exist, return an error response
	  return res.status(404).json({ error: "Thread not found." });
	}
  
	// Remove the thread from the threadList array
	threadList.splice(threadIndex, 1);
  
	// Delete the thread from the Novu API
	try {
	  await novu.topics.delete({ key: id });
	} catch (error) {
	  console.error("Error deleting thread from Novu API:", error);
	  return res.status(500).json({ error: "Internal server error." });
	}
  
	res.json({
	  message: "Thread deleted successfully!",
	  threads: threadList,
	});
  });

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
