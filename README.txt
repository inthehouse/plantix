
Project Summary:

Technologies Used:

Backend:
	Node.js
	Express.js
	JSON data file

Frontend:
	React 
	TypeScript
	Plain old CSS for styling

Testing:
	Jest & React Testing Library

Other Tools:
	Axios (for API requests)
	Context API (for state management)

Project Setup:
	Backend Setup:
	Initialized a Node.js project.
	Set up Express.js for handling HTTP requests.
	Created API endpoints for managing sensor data.

Frontend Setup:
	Initialized a React.js project.
	Set up TypeScript and other stuff.
	Implemented Context API for managing api service.
	Configured Axios for handling API requests.

Running the Project:

Backend:
	Navigate to the server directory.
	Run npm install and then npm start.

Frontend:
	Navigate to the client directory.
	Run npm install and then npm start

Testing Implementation:
	Unfortunately, could not get the libraries to work. Did my best and still failed. They just would not run due to issues with the setup or something. However, the written tests are still part of the folders. 
	
	Backend: 
		Under folder tests
	Frontend: 
		Under the components individual folder.

Improvements/Future possibilities (unfinished):

Pagination:
	Initially planned to implement pagination for displaying large sets of sensor data.
	Started implementing pagination logic on the frontend but couldn't finish it.
	Planned to get divided data from backend with the assumption that we would get millions of data.

Search/Order/Filter: 
	A search bar to search data and order and filter

Database:
	For now decided to use a JSON file acting as the database but a relational database should be ideal for this scenario.