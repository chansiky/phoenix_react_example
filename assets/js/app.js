// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import css from "../css/app.css"

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import dependencies
//
import "phoenix_html"
import React from 'react'
import ReactDOM from 'react-dom'

// Import local files
//
// Local files can be imported directly using relative paths, for example:
// import socket from "./socket"

import ReactButton from "./react_button"
const e = React.createElement;
import JSXComponent from "./jsx_component.jsx"

const domContainer = document.querySelector('#react-entry');
ReactDOM.render(e(ReactButton), domContainer);
ReactDOM.render(e(JSXComponent), document.getElementById('jsx-entry'))
