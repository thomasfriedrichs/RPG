//// game board - player turn, movement, dice roll
///  players - health, armor, attack, 
/// items that effect players - health, armor, attack

const storeState = (initialState) => {
  let currentState = initialState; 
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const stateControl = storeState();

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value      
    })
  }
}

const knightAttack = changeState(armor)(-20);
const archerAttack = changeState(armor)(-15);
const mageAttack = changeState(armor)(-50);


const knight = {xp:0, armor: 100, attack:20}
const archer = {xp:0, armor: 30, attack:15}
const mage = {xp:0, armor: 60, attack: 50}
