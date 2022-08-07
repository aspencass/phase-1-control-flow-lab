
function scuberGreetingForFeet(rideFeet) {
  if (rideFeet <= 400) {
      return 'This one is on me!'
  } else if (rideFeet > 400 && rideFeet <= 2000) {
      return 'That will be twenty bucks.'
  } else if (rideFeet > 2000 && rideFeet <= 2500) {
      return 'I will gladly take your thirty bucks.'
  } else (rideFeet > 2500 )
    return 'No can do.'
}

function ternaryCheckCity(city){
  if (city === 'NYC') {
      return 'Ok, sounds good.'
  } else {
      return 'No go.'
  }
}

function switchOnCharmFromTip(tipEvent){
  if (tipEvent === 'generous') {
      return 'Thank you so much.'
  } else if (tipEvent === 'not as generous') {
      return 'Thank you.'
  } else (tipEvent === 'thanks for everything')
      return 'Bye.'
}
