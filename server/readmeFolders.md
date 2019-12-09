# SERVER ROADMAP

## FOLDERS

- routes – files with endpoints. Setup what function should run the server after entering target link. exported and imported by server.js ("Routing Table")
- controllers – files with functions used with endpoints. Endpoints in routes dir will be simplified (f.e. router.get('/api/posts', PostsController.getPosts) ). they will connect to DB and handle server requests.
- models – to keep models = schemes from Mongoose.
  oraz plików:

## FILES

- config.js – exported configuration variables (server port, mongo address)
- server.js – Initiating server, connection with DB, offering endpoints imported from routes.
