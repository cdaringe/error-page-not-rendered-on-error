# error page not rendered bug

The failure mode is as follows:

- user implements functionality in `_app.js`
- `_app.js` suffers an unexpected bug
- user expects to get error page, as defined by `_error.js`, but `Internal Server Error`

From a base next.js app, using `yarn create next-app`, the latest commit shows the _minimum_ reproduction to produce the failure.

## expected

`_error.js` to be rendered

## actual

`Internal Server Error`

## reproduction

- install, `yarn`
- build and run, `yarn build && yarn start`
- open the application, observe `Internal Server Error`
