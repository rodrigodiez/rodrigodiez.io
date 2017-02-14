import Bootsrap from 'bootstrap'
import React from 'react'
import ReactDOM from 'react-dom'
import Styles from './index.scss'
import Author from './components/Author'

var avatarUrl = require('../assets/img/avatar.jpg')

ReactDOM.render(
  <div className="container">
    <div className="row">
      <div className="col-md-4 bg-faded">
        <Author
          name="Rodrigo Díez"
          avatar={avatarUrl}
          bio="Fullstack developer. Long distance runner. Jack of all trades, master of none"
        />
      </div>
      <div className="col-md-8">
        <h2>Main</h2>
      </div>
    </div>
  </div>,
  document.getElementById('root')
);
