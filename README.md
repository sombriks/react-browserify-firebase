# sample-react-browserify-firebase-example

It expects firebase-tools installed globally:

`sudo npm -g install firebase-tools`

Using browserify instead webpack because it's easier to prototype.

See `"scripts"` section in `package.json` for more details.

_Note_: transforms order is very important. this is why _transform_ section on
`package.json` is a list.
