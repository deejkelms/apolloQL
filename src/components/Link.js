import React, { Component } from 'react'

class Link extends Component {
  render() {
    console.log('Link props', this.props)
    return (
      <div>
        <div>
          {this.props.link.description} ({this.props.link.url})
        </div>
      </div>
    )
  }

  _voteForLink = async () => {

  }
}

export default Link
