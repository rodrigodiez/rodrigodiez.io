import React from 'react'

class Author extends React.Component {
  render() {
    return (
      <div className="author">
        <img src={this.props.avatar} className="rounded-circle avatar" alt="{this.props.name}" />
        <h1 className="name">{this.props.name} <i className="fa fa-camera-retro"></i></h1>
        <p className="bio">{this.props.bio}</p>
      </div>
    );
  }
}

export default Author
