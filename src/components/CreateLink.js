import React, { Component } from 'react'

class CreateLink extends Component {
  constructor (props) {
    super(props)
    this.state = {
      description: '',
      url: ''
    }
  }

  render () {
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            classNAme="mb2"
            value={this.state.desccription}
            onChange={e => this.setState({ description: e.target.value })}
            type="text"
            placeholder="A description for the link"
          />
          <input
            classNAme="mb2"
            value={this.state.url}
            onChange={e => this.setState({ url: e.target.value })}
            type="text"
            placeholder="The Url for the link"
          />
        </div>
        <button onClick={() => this._createLink()}>Submit</button>
      </div>
    )
  }

  _createLink = async () => {
    // mmmmm whats the lodash do?
  }
}

export default CreateLink