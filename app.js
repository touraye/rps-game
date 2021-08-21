// initial values of user & com
let userScores = 0
let compScores = 0

const userScore = document.getElementById( 'user-score' )
const comScore = document.getElementById( 'com-score' )
const scoreBoard = document.getElementById( 'score-board' )//Todo
const resultMsg = document.getElementById('result-msg')
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissor = document.getElementById( 'scissor' )
const actionMsg = document.getElementById( 'action-msg' )


const getComputerChoice = () => {
    let choices = [ 'r', 'p', 's' ]
    const randomNumber = ~~( Math.random() * 3 )
    return choices[randomNumber]
}

const toLetter = ( letter ) => {
    if ( letter === 'r' ) return 'Rock'
    if ( letter === 'p' ) return 'Paper'
    return 'Scissors'
}

const win = (user, computer) => {
    userScores++
    userScore.innerHTML = userScores
    comScore.innerHTML = compScores
    console.log( `USER scores  ${userScores}` );
    const smallUserWords = 'user'.fontsize( 3 ).sup()
    const smallCompWords = 'comp'.fontsize(3).sub()    
    resultMsg.innerHTML = `${toLetter( user )}${smallUserWords} beats ${toLetter( computer )}${smallCompWords}. You win!`    
}

const lose = (user, computer) => {
    compScores++
    userScore.innerHTML = userScores
    comScore.innerHTML = compScores
    console.log( `USER scores  ${userScores}` );
    const smallUserWords = 'user'.fontsize( 3 ).sub()
    const smallCompWords = 'comp'.fontsize(3).sup()    
    resultMsg.innerHTML = `${toLetter( user )}${smallUserWords} loses to ${toLetter( computer )}${smallCompWords}. You lost!`    
}

const draw = (user, computer) => {    
    const smallUserWords = 'user'.fontsize( 3 ).sub()
    const smallCompWords = 'comp'.fontsize(3).sub()    
    resultMsg.innerHTML = `${toLetter( user )}${smallUserWords} equals ${toLetter( computer )}${smallCompWords}. It's a draw`      
}


const game = ( userChoice ) => {
    const computerChoice = getComputerChoice()
    
    switch ( userChoice + computerChoice ) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice)
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice)
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice)
    }
}


/*
Todo
 win for USER r-s[rock beats scissor], p-r[paper beats rook], s-p[scissor beats paper]
 !
 loss for USER r-p[paper beats rock], p-s[scissor beats paper], s-r[rock beats scissor]
draw for r-r, p-p, s-s

*/

const main = () => {    
    rock.addEventListener( 'click', () => {
        game('r')
    } )
    paper.addEventListener( 'click', () => {
        game('p')
    } )
    scissor.addEventListener( 'click', () => {
        game('s')
    })
}

main()





