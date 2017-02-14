import React from 'react'

class Author extends React.Component {
  render() {
    return (
      <div className="author">
        <img src={this.props.avatar} className="avatar mx-auto d-block rounded-circle" alt="{this.props.name}" />
        <h1 className="name text-center">{this.props.name}</h1>
        <p className="bio">{this.props.bio}</p>
      </div>
    );
  }
}

export default Author
