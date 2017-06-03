App name: Collaboration Space

Summary:

This purpose of this app is to provide New York musicians a platform to search for people to collaborate with. When users sign up, they create a brief profile that includes contact 
information, as well as a bio to give an idea of what music they play and the type of 
collaboration work they may be looking for. On the search page, users can search by borough and musician type (i.e vocalist, instrumentalist, and composer). There is also an Edit link on the search page for users to update their profiles.

Documentation of API:

URL_USERS - stores all user profiles.

URL_LOGIN - used for a user to log in and begin a new session.

URL_LOGOUT - used to end a user’s session.

URL_ID - stores profile data by ID.

URL_USERS_EDITS - allows users to access their daved data and make changes.
Technology used:

For this app, Node.js was used to write the API, while Express was used as the web framework. NPM was used as the package manager, and MongoDB for the database manager. For testing, I used the Mocha framework with the chai library and Mongoose schemas to express expected value types.

For my frontend code, I used React, Redux, and Axios with HTML, CSS and Bulma for styling.




