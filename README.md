# BFFBots
For ITP Understanding Networks


To send messages to someone, use `http://localhost:8080/form.html`. To see those received messages, go to `http://localhost:8080/receive/`. 

In order to make this more robust, we should probably maintain a notion of who is talking and who is receiving. (Right now, only ClientA talks, and anyone who goes to `http://localhost:8080/receive/` can receive.)