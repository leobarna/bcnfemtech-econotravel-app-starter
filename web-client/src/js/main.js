import '../scss/main.scss'
import React from 'react'
import ReactDOM from 'react-dom'

import {Hello} from './components/Hello'

ReactDOM.render(
    React.createElement(Hello),
    document.getElementById("app")
)