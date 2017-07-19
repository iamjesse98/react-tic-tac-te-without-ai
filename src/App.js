import React, { Component } from 'react'
import './App.css'

import Announcement from './Announcement'
import ResetButton from './ResetButton'
import Tile from './Tile'

let wins = new Map()
wins.set('X', 0)
wins.set('O', 0)

// React Tic Tac Toe
export default class App extends Component {
  constructor(props){
  	super(props)
  	this.state = {
                      gameBoard: [
                                          ' ', ' ', ' ',
                                          ' ', ' ', ' ',
                                          ' ', ' ', ' '
                      ],
                      turn: 'X',
                      winner: null
    }
  }

  updateBoard(loc, player) {
      if ( this.state.gameBoard[loc] === 'X' || this.state.gameBoard[loc] === 'O' || this.state.winner) return // Invalid Move

      let currentGameBoard = this.state.gameBoard
      currentGameBoard.splice(loc, 1, this.state.turn)
      this.setState({
        gameBoard: currentGameBoard
      })

      let topRow = this.state.gameBoard[0] + this.state.gameBoard[1] + this.state.gameBoard[2]
      if ( topRow.match(/XXX|OOO/) ) {
        this.setState({
          winner: this.state.turn
        })
        wins.set(this.state.turn, wins.get(this.state.turn)+1)
        return
      }

      let middleRow = this.state.gameBoard[3] + this.state.gameBoard[4] + this.state.gameBoard[5]
      if ( middleRow.match(/XXX|OOO/) ) {
        this.setState({
          winner: this.state.turn
        })
        wins.set(this.state.turn, wins.get(this.state.turn)+1)
        return
      }

      let bottomRow = this.state.gameBoard[6] + this.state.gameBoard[7] + this.state.gameBoard[8]
      if ( bottomRow.match(/XXX|OOO/) ) {
        this.setState({
          winner: this.state.turn
        })
        wins.set(this.state.turn, wins.get(this.state.turn)+1)
        return
      }

      let leftCol = this.state.gameBoard[0] + this.state.gameBoard[3] + this.state.gameBoard[6]
      if ( leftCol.match(/XXX|OOO/) ) {
        this.setState({
          winner: this.state.turn
        })
        wins.set(this.state.turn, wins.get(this.state.turn)+1)
        return
      }

      let middleCol = this.state.gameBoard[1] + this.state.gameBoard[4] + this.state.gameBoard[7]
      if ( middleCol.match(/XXX|OOO/) ) {
        this.setState({
          winner: this.state.turn
        })
        wins.set(this.state.turn, wins.get(this.state.turn)+1)
        return
      }

      let rightCol = this.state.gameBoard[2] + this.state.gameBoard[4] + this.state.gameBoard[8]
      if ( rightCol.match(/XXX|OOO/) ) {
        this.setState({
          winner: this.state.turn
        })
        wins.set(this.state.turn, wins.get(this.state.turn)+1)
        return
      }

      let leftDiag = this.state.gameBoard[0] + this.state.gameBoard[4] + this.state.gameBoard[8]
      if ( leftDiag.match(/XXX|OOO/) ) {
        this.setState({
          winner: this.state.turn
        })
        wins.set(this.state.turn, wins.get(this.state.turn)+1)
        return
      }

      let rightDiag = this.state.gameBoard[2] + this.state.gameBoard[4] + this.state.gameBoard[6]
      if ( rightDiag.match(/XXX|OOO/) ) {
        this.setState({
          winner: this.state.turn
        })
        wins.set(this.state.turn, wins.get(this.state.turn)+1)
        return
      }

      let moves= this.state.gameBoard.join('').replace(/ /g, '')
      if (moves.length === 9) {
        this.setState({
          winner: 'd'
        })
      }

      this.setState({
        turn: this.state.turn === 'X' ? 'O' : 'X'
      })

  }

  resetBoard() {
    this.setState({
      gameBoard: [
                          ' ', ' ', ' ',
                          ' ', ' ', ' ',
                          ' ', ' ', ' '
      ],
      turn: 'X',
      winner: null
    })
  }

    render() {
        return (
            <div className="container">
                        <p style={{ fontSize: '42px', lineHeight: '1px', color: 'dodgerblue', textShadow: '0 0 9px rgba(0, 0, 0, .3)' }}>React Tic Tac Toe</p>
                        <p>X-wins: {wins.get('X')}, O-wins: {wins.get('O')}</p>
                        <div className="menu">
                                <Announcement winner={this.state.winner} turn={this.state.turn} />
                                <ResetButton reset={this.resetBoard.bind(this)}/>
                        </div>
<div className="container-grid">
                        {this.state.gameBoard.map(function(value, i) {
                                                                                                return <Tile
                                                                                                          key={i}
                                                                                                          loc={i}
                                                                                                          value={value}
                                                                                                          updateBoard={this.updateBoard.bind(this)}
                                                                                                          turn={this.state.turn}
                                                                                                  />
                      }.bind(this))}
</div>
            </div>
        )
    }
}
