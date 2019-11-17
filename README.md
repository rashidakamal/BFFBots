# BFFBots
For ITP Understanding Networks

Download the repo using `git clone https://github.com/rashidakamal/BFFBots.git`. Once you `cd` into the directory, you should `npm install` on Terminal, and then run the script using `node getPost.js`. 

To send messages to someone, use `http://localhost:8080/form.html`. To see those received messages, go to `http://localhost:8080/receive/`. 

In order to make this more robust, we should probably maintain a notion of who is talking and who is receiving. (Right now, only ClientA talks, and anyone who goes to `http://localhost:8080/receive/` can receive.)