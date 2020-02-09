import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  squares: string[];
  xIsNext: boolean;
  winner: string;

  constructor() { }

  ngOnInit() {
    this.newGame();
  }

  newGame(){
    this.squares = Array(9).fill(null);
    console.log(Array(9).fill("1"));
    this.winner = null;
    this.xIsNext = true;

  }

  insertValue(i){
    console.log(i);
    this.xIsNext = !this.xIsNext;
    this.squares[i] = this.player;
    this.winner = this.checkForWinner();

  }

  checkForWinner(){
    // winning sequences
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      console.log(this.squares[a], this.squares[b], this.squares[c]);
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];

      }
    }

    return null;
  }
  get player(){
    console.log(this.xIsNext?'X':'O');
    return this.xIsNext?'X':'O';
  }



}
