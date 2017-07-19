import React, { Component } from 'react'

export default class Tile extends Component {

  tileClick(props) {
    props.updateBoard(props.loc, props.value)
  }

    render() {
        return (
            <div className={"tile p-"+ this.props.loc} onClick={() => this.tileClick(this.props)}>
                <p>
                  {
                    this.props.value
                  }
                </p>
            </div>
        )
    }
}
