import Bootsrap from 'bootstrap'
import React from 'react'
import ReactDOM from 'react-dom'
import Author from './components/Author'
import Styles from './index.scss'

ReactDOM.render(
  <div className="container">
    <div className="row">
      <div className="col-lg-4">
        <Author
          name="Rodrigo Díez"
          avatar="https://pbs.twimg.com/profile_images/685450766451126273/J0U7Wsli_400x400.jpg"
          bio="Fullstack developer. Jack of all trades, master of none"
        />
      </div>
      <div className="col-lg-8">
        <h2>Main</h2>
      </div>
    </div>
  </div>,
  document.getElementById('root')
);
