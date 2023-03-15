# THM Task Manager API ![Version][version-image]
## Project Overview

The Node API that manage the user tasks. The application allows to:

-   Create a new task
-   Edit title, description of a task
-   Update the completion status of task
-   Delete a specifi task

## Setting up the project
 - Clone the repository
	  `$ git clone https://github.com/Awais914/thm-task-manager.git`

- Change into the project directory
		 `$ cd thm-task-manager`

- Install packages
	`$ npm install`

- Create .env and set following values:

	```sh
	PORT=5000
	MONGO_URI=mongodb+srv://admin:admin@cluster0.bo2r3sq.mongodb.net/?retryWrites=true&w=majority
	NODE_ENV=
	```

- Start the server:
	```sh
	npm start
	```

- Server logs:
	```sh
	npm run logs
	```

- Stop Server:
	```sh
	npm stop
	```

[version-image]: https://img.shields.io/badge/Version-1.0.0-orange.svg
