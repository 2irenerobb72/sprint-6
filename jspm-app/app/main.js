import $ from 'jquery'
import { makeMove, clearBoard } from './tic-tac-toe'

$('#board').on('click', '.board > div', makeMove)

$('#restart').on('click', 'button', clearBoard)
