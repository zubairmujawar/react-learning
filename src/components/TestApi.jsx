import React from 'react'

const TestApi = () => {

  // Api handel using try catch method:
    // async function allUsers(){
    //     try{
    //         const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    //         const data = await response.json()
    //         console.log(data)
    //         console.log(data.completed)
    //         console.log(data.title)
    //     }catch(error){
    //         console.log("Error ")
    //     }
    // }
    // allUsers();


    // Api handel using .then method:
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log(data);
    }).catch((error)=>console.log(error));




  return (
    <div style={{backgroundColor:"gray"}}>
      <h1>Hello</h1>
    </div>
  )
}

export default TestApi;
