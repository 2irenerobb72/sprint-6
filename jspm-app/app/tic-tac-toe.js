import { indexOf, append, contains, map, addIndex } from 'ramda'
import $ from 'jquery'

const checkForWin = function (cells, player) {
  const isAWin = function (board, player, win) {
    return filter((i) => board[i] === player, win).length === 3
}

const playerWins = function(board, player) {
  const wins = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
    [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
  ]
  return filter((win) => isAWin(board, player, win), wins).length > 0
}
  var board = []
  cells.each( function () {
    board.push($(this).text())
  }
  if (playerWins(board, player)) {
    alert('Player ' + player + ' wins')
  }

  return filter((win) => isAWin(board, player, win), wins).length > 0
}

const played = function (el) {
  return $(el).html() !== ''
}

const makeMove = function (e) {
  const el = $(e.target)

  if(!played(e.target)) {
    const cells = $('.board > div')
    const player = whoMovesNow(cells)

    el.removeClass('empty')
    el.addClass('player-' + player)
    el html(player)
    checkForWin(cells, player)
  }
}

const move = function (cells) {
  const n = cells.filter((idx, el) => played(el)).length
  return (n % 2 === 0) ? 'x' : 'o'
}

const clearboard = function () {
  $('.board > div').html('').removeClass().addClass('empty')
}
export { makeMove , clearBoard }
