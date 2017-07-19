import React, { Component } from 'react'
import './Announcement.css'

export default class Announcement extends Component {

    render() {
        return (
          <div>
                  <div className={!this.props.winner ? "visible" : 'hidden'}>
                    <p>Turn: {this.props.turn}</p>
                  </div>
                    <div className={this.props.winner ? "visible" : 'hidden'}>
                        <p style={{ lineHeight: '1px' }}>Game Over... and {this.props.winner === 'd' ? `it's a draw` : `the winner is ${this.props.winner}`}</p>
                    </div>
            </div>
        )
    }
}
