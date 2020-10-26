A simple react document pulling from a flask sqlite server.

Per button click, it returns one single quote from that server.

The react document works through npm. Set it to npm install after pull to install dependencies.

The flask server runs through pipenv shell. Start it through entering the shell and then python app.py in terminal.

To add a new line to the server the format is as follows:

```js
{
  line: "quote";
}
```
