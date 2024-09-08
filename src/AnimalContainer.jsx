import React, { useState } from "react";

function AnimalContainer() {
  const [animals, setAnimals] = useState([{id: 1, name: "Ron", species: "Lion", hungry: true}, {id: 2, name: "Leslie", species: "Rabbit", hungry: false}, {id: 3, name: "Ann", species: "Koala", hungry: false}, {id: 4, name: "April", species: "Hyena", hungry: true}])
  const [buttonState, setButtonState] = useState('hungry')  ///creating state for button
  
//need function to handle which is clicked. if hungry is clicked, then it can't be full and vice versa
//first we'll create a function for hungry

const hungryHandle = () => {
    setButtonState('hungry')
}
//then we'll create a function for full
const fullHandle = () => {
    setButtonState('full')
}


const displayHungryAnimals = animals.filter(animal =>{
    return animal.hungry === true 
})



const displayFullAnimals = animals.filter(animal =>{
    return animal.hungry === false 
})

const mapHungryAnimals = displayHungryAnimals.map(animal =>{
    return (<li>{`${animal.name} is hungry`}</li>)
})
console.log(mapHungryAnimals)

const mapFullAnimals = displayFullAnimals.map(animal =>{
    console.log(animal.name)
    return (<li>{`${animal.name} is full`}</li>)
})

//then we need to create a function to handle animals to display


  return (
    <div>
      <button onClick = {hungryHandle}>Hungry Animals</button>
      <button onClick = {fullHandle}>Full Animals</button>
      <h3>Animals go below:</h3>
       <ul>
       {buttonState === 'hungry'? mapHungryAnimals: mapFullAnimals}
      </ul>
    </div>
  );
}

export default AnimalContainer