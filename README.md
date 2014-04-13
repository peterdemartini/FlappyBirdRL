FlappyBirdRL
============

Flappy Bird hack using Reinforcement Learning

--------------------

Trying to get several browsers to contribute to and draw from a single "master" Q-matrix on a local server.

Backup data is being stored in `data.txt` for now so the model isn't completely lost when the process restarts.

The server generates this backup every 15 seconds or so.

Each browser submits a set of changes to its own Q-matrix every 10 seconds. The server, in return, sends back a new copy of the Q-matrix to the browser with which it replaces its own.

The further apart these updates are, the more likely the browsers' submitted changes will clober each other. However, more frequent ajax requests can cause all my browser tabs to become sluggish. This, obviously, wouldn't be as much of a problem for multiple contributing machines.

Clone this baby, `npm install` if you need to, and point your browser to `localhost:8080`.

Note: `data.txt` holds the information for my trained model. Feel free to replace it with an empty `data.txt` to start training your own model!
