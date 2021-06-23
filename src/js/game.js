export {storeState,changeState,knightAttack,archerAttack,mageAttack}

const storeState = (initialState) => {
  let currentState = initialState; 
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const knight = {lvl:1, xp:0, armor: 100, attack:20}
const archer = {lvl:1, xp:0, armor: 30, attack:15}
const mage = {lvl:1, xp:0, armor: 60, attack: 50}

//const stateControl = storeState({});
const newMage = storeState(mage); //<= James did something like this in the demo
const newMage2 = storeState(mage);

console.log(newMage());  // {lvl: 1, xp: 0, armor: 60, attack: 50}

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value      
    })
  }
}

const knightAttack = changeState("armor")(-20);
const archerAttack = changeState("armor")(-15);
const mageAttack = changeState("armor")(-50);

const knightAttackKnight = knightAttack(knight);
const knightAttackMage = knightAttack(newMage);
const knightAttackArcher = knightAttack(archer);
const archerAttackKnight = archerAttack(knight);
const archerAttackMage = archerAttack(mage);
const mageAttackKnight = mageAttack(knight);
const mageAttackArcher =  mageAttack(archer);
const mageAttackMage = mageAttack(mage);

console.log(newMage);  // {lvl: 1, xp: 0, armor: 60, attack: 50}
const newMageAttacked = mageAttack(newMage());
console.log(newMageAttacked); // {lvl: 1, xp: 0, armor: 10, attack: 50}
console.log(mageAttackMage);

knightAttack(newMage);