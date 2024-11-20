/* eslint-disable react/prop-types */
import "./App.css";

/**02_02b*/
// function App() {

//   return (
//    <h1>Hello React!</h1>
//   );
// }

/**02_03b*/
// let language = "React"
// let moon = "Moon"

// function App() {

//   return (
//    <h1>Hello {language.toUpperCase()} {moon}!</h1>
//   );
// }

/**02_04b - Component*/
// function Header() {
//   return (
//     <header>
//       <h1>Eve&apos;s Kitchen</h1>
//     </header>
//   )
// }

// function App() {
//   return (<div>
//    <Header />
//    <main>
//     <h2>We serve the most delicious food around</h2>
//    </main>
//    </div>
//   );
// }

/**02_05b*/
// function Header(props) {
//   return (
//     <header>
//       <h1>{props.name}'s Kitchen</h1>
//       <p>Copyright {props.year}</p>
//     </header>
//   )
// }

// function App() {
//   return (<div>
//    <Header name="Alex" year={new Date().getFullYear()}/>
//    <main>
//     <h2>We serve the most delicious food around</h2>
//    </main>
//    </div>
//   );
// }

/**02_06b*/
// function Header({name, year}) {
//   return (
//     <header>
//       <h1>{name}&rsquo;s Kitchen</h1>
//       <p>Copyright {year}</p>
//     </header>
//   )
// }

// function App() {
//   return (<div>
//    <Header name="Alex" year={new Date().getFullYear()}/>
//    <main>
//     <h2>We serve the most delicious food around</h2>
//    </main>
//    </div>
//   );
// }

/**03_01b*/
// function Header({name, year}) {
//   return (
//   <header>
//     <h1>{name}&apos;s Kitchen</h1>
//   <p>Copyright {year}</p>
//   </header>
//   );
// }
// const items = [
//   "Macaroni and Cheese",
//   "Salmon with Potatoes",
//   "Tofu with Vegetables"
// ]

// function Main({ dishes }) {
//   return (
//     <ul>
//       {dishes.map((dish, index) => (
//         <li key={index} style={{ listStyleType: "none" }}>
//           {dish}
//         </li>
//       ))}
//     </ul>
//   );
// }

// function App() {
//   return (<div>
//    <Header name="Alex" year={new Date().getFullYear()}/>
//    <Main dishes={items}/>
//    </div>
//   );
// }

/**03_02b*/
// function Header({name, year}) {
//   return (
//   <header>
//     <h1>{name}&apos;s Kitchen</h1>
//   <p>Copyright {year}</p>
//   </header>
//   );
// }
// const items = [
//   "Macaroni and Cheese",
//   "Salmon with Potatoes",
//   "Tofu with Vegetables",
//   "Minestrone Soup"
// ]

// const dishObjects = items.map((dish, i)=>({
//   id: i,
//   title: dish
// }))
// console.log(dishObjects);

// function Main({ dishes }) {
//   return (
//     <ul>
//       {dishes.map((dish) => (
//         <li key={dish.id} style={{ listStyleType: "none" }}>
//           {dish.title}
//         </li>
//       ))}
//     </ul>
//   );
// }

// function App() {
//   return (<div>
//    <Header name="Alex" year={new Date().getFullYear()}/>
//    <Main dishes={dishObjects}/>
//    </div>
//   );
// }

/**03_03b*/
function Header({name, year}) {
  return (
  <header>
    <h1>{name}&apos;s Kitchen</h1>
  <p>Copyright {year}</p>
  </header>
  );
}
const items = [
  "Macaroni and Cheese",
  "Salmon with Potatoes",
  "Tofu with Vegetables",
  "Minestrone Soup"
]

const dishObjects = items.map((dish, i)=>({
  id: i,
  title: dish
}))
console.log(dishObjects);

function Main({ dishes }) {
  return (
    <ul>
      {dishes.map((dish) => (
        <li key={dish.id} style={{ listStyleType: "none" }}>
          {dish.title}
        </li>
      ))}
    </ul>
  );
}

function App() {
  return (<div>
   <Header name="Alex" year={new Date().getFullYear()}/>
   <Main dishes={dishObjects}/>
   </div>
  );
}

export default App;
