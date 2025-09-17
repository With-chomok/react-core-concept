import "./App.css";
import Batsman from "./bat";
import HandleBall from "./Ball";
import Ball from "./Ball";
import Users from "./User";
import { Suspense } from "react";
import Friends from "./Friends";
import Posts from "./Post";
// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())

// const fetchFriends = async() => {
// const res = await fetch("https://jsonplaceholder.typicode.com/users")
// return res.json();

// }

const fetchPosts = async() =>{
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  return res.json();

}

// const fetchFriends =fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
function App() {
  // function handleClick() {
  //   alert("i am clicked");
  // }
  // const handleClick3 = () => {
  //   alert("clicked 3");
  // };
  // const hendleAdd5 = (num) => {
  //   const newNum = num + 5;
  //   alert(newNum);
  // };
  // const handleSubs6 = (num) => {
  //   const newNum = num - 10;
  //   alert(newNum);
  // }
  const postsPromise = fetchPosts()
  return (
    <>



      <h3>HI Bangladesh</h3>


    <Suspense fallback={<h4>post are comming soon....</h4>}>
    <Posts postsPromise={postsPromise}>
    
    </Posts>
    
    </Suspense>

      {/* {
        <HandleBall></HandleBall>
      } */}
      
        {/* <Suspense fallback={<h3>Loadimg .... </h3>}>
          <Users fetchUsers = {fetchUsers}></Users>
        </Suspense>
        <Suspense fallback={<h3>friends are comming....</h3>}>

        <Friends fetchFriends={fetchFriends}></Friends>

        </Suspense> */}
      
      {/* <Batsman></Batsman>
      <button onClick={handleClick}>click me</button>
      <button onClick={handleClick3}>click me</button>
      <button onClick={() => handleSubs6(150)}>click me</button>
      <button onClick={() => hendleAdd5(30)}>click me</button>
      <button onClick={() => alert("clicked 4")}>click me</button> */}
    </>
  );
}

export default App;
