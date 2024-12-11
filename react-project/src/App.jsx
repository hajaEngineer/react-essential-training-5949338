import { useState, useReducer } from "react";
import "./App.css";
import chef from "./images/chef.jpg";

/**03_03b*/
// function Header({ name, year }) {
//   return (
//     <header>
//       <h1>{name}'s Kitchen</h1>
//       <p>Copyright {year}</p>
//     </header>
//   );
// }
// const items = [
//   "Macaroni and Cheese",
//   "Salmon with Potatoes",
//   "Tofu with Vegetables",
//   "Minestrone Soup",
// ];

// const dishObjects = items.map((dish, i) => ({
//   id: i,
//   title: dish,
// }));

// function Main({ dishes }) {
//   return (
//     <main>
//       <img src={chef} height={200} alt="A photo of a smiling chef owner" />
//       <ul>
//         {dishes.map((dish) => (
//           <li key={dish.id} style={{ listStyleType: "none" }}>
//             {dish.title}
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Header name="Alex" year={new Date().getFullYear()} />
//       <Main dishes={dishObjects} />
//     </div>
//   );
// }

/**03-04b */
// function Header({ name, year }) {
//   return (
//     <header>
//       <h1>{name}'s Kitchen</h1>
//       <p>Copyright {year}</p>
//     </header>
//   );
// }
// const items = [
//   "Macaroni and Cheese",
//   "Salmon with Potatoes",
//   "Tofu with Vegetables",
//   "Minestrone Soup",
// ];

// const dishObjects = items.map((dish, i) => ({
//   id: i,
//   title: dish,
// }));

// function Main({ dishes }) {
//   return (
//     <>
//       <div>
//         <h2>Welcome to this beautiful restaurant!</h2>
//       </div>
//       <main>
//         <img src={chef} height={200} alt="A photo of a smiling chef owner" />
//         <ul>
//           {dishes.map((dish) => (
//             <li key={dish.id} style={{ listStyleType: "none" }}>
//               {dish.title}
//             </li>
//           ))}
//         </ul>
//       </main>
//     </>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Header name="Alex" year={new Date().getFullYear()} />
//       <Main dishes={dishObjects} />
//     </div>
//   );
// }

/**04-01b */
// function Header({ name, year }) {
//   return (
//     <header>
//       <h1>{name}'s Kitchen</h1>
//       <p>Copyright {year}</p>
//     </header>
//   );
// }
// const items = [
//   "Macaroni and Cheese",
//   "Salmon with Potatoes",
//   "Tofu with Vegetables",
//   "Minestrone Soup",
// ];

// const dishObjects = items.map((dish, i) => ({
//   id: i,
//   title: dish,
// }));

// function Main({ dishes }) {
//   return (
//     <>
//       <div>
//         <h2>Welcome to this beautiful restaurant!</h2>
//       </div>
//       <main>
//         <img src={chef} height={200} alt="A photo of a smiling chef owner" />
//         <ul>
//           {dishes.map((dish) => (
//             <li key={dish.id} style={{ listStyleType: "none" }}>
//               {dish.title}
//             </li>
//           ))}
//         </ul>
//       </main>
//     </>
//   );
// }
// function App() {
//   return (
//     <div>
//       <Header name="Alex" year={new Date().getFullYear()} />
//       <Main dishes={dishObjects} />
//     </div>
//   );
// }

/**04_02b*/
// function Header({ name, year }) {
//   return (
//     <header>
//       <h1>{name}'s Kitchen</h1>
//       <p>Copyright {year}</p>
//     </header>
//   );
// }
// const items = [
//   "Macaroni and Cheese",
//   "Salmon with Potatoes",
//   "Tofu with Vegetables",
//   "Minestrone Soup",
// ];

// const dishObjects = items.map((dish, i) => ({
//   id: i,
//   title: dish,
// }));

// function Main({ dishes }) {
//   return (
//     <>
//       <div>
//         <h2>Welcome to this beautiful restaurant!</h2>
//       </div>
//       <main>
//         <img src={chef} height={200} alt="A photo of a smiling chef owner" />
//         <ul>
//           {dishes.map((dish) => (
//             <li key={dish.id} style={{ listStyleType: "none" }}>
//               {dish.title}
//             </li>
//           ))}
//         </ul>
//       </main>
//     </>
//   );
// }
// function App() {
//   const [status, setStatus ] = useState("Open")
//   // console.log(status)
//   return (
//     <div>
//       <h1>The restaurant is currently {status}.</h1>
//       <button onClick={() => setStatus("Closed")}>Close Restaurant</button>
//       <Header name="Alex" year={new Date().getFullYear()} />
//       <Main dishes={dishObjects} />
//     </div>
//   );
// }

/**04_03b*/
// function Header({ name, year }) {
//   return (
//     <header>
//       <h1>{name}'s Kitchen</h1>
//       <p>Copyright {year}</p>
//     </header>
//   );
// }
// const items = [
//   "Macaroni and Cheese",
//   "Salmon with Potatoes",
//   "Tofu with Vegetables",
//   "Minestrone Soup",
// ];

// const dishObjects = items.map((dish, i) => ({
//   id: i,
//   title: dish,
// }));

// function Main({ dishes }) {
//   return (
//     <>
//       <div>
//         <h2>Welcome to this beautiful restaurant!</h2>
//       </div>
//       <main>
//         <img src={chef} height={200} alt="A photo of a smiling chef owner" />
//         <ul>
//           {dishes.map((dish) => (
//             <li key={dish.id} style={{ listStyleType: "none" }}>
//               {dish.title}
//             </li>
//           ))}
//         </ul>
//       </main>
//     </>
//   );
// }

// // function App() {
// //   const [status, setStatus] = useState("Open");
// //   // console.log(status)
// //   return (
// //     <div>
// //       <h1>The restaurant is currently {status}.</h1>
// //       <button onClick={() => setStatus("Open")}>Open Restaurant</button>
// //       <button onClick={() => setStatus("Closed")}>Close Restaurant</button>
// //       <Header name="Alex" year={new Date().getFullYear()} />
// //       <Main dishes={dishObjects} />
// //     </div>
// //   );
// // }

// function App() {
//   const [status, setStatus] = useState(true);
//   // console.log(status)
//   return (
//     <div>
//       <h1>The restaurant is currently {status ? "open" : "closed" }.</h1>
//       <button onClick={() => setStatus(!status)}>{status ? "Close" : "Open"} Restaurant</button>
//       <Header name="Alex" year={new Date().getFullYear()} />
//       <Main dishes={dishObjects} />
//     </div>
//   );
// }

/**04_04b*/
// function Header({ name, year }) {
//   return (
//     <header>
//       <h1>{name}'s Kitchen</h1>
//       <p>Copyright {year}</p>
//     </header>
//   );
// }
// const items = [
//   "Macaroni and Cheese",
//   "Salmon with Potatoes",
//   "Tofu with Vegetables",
//   "Minestrone Soup",
// ];

// const dishObjects = items.map((dish, i) => ({
//   id: i,
//   title: dish,
// }));

// function Main({ dishes, openStatus, onStatus }) {
//   return (
//     <>
//       <div>
//         <button onClick={()=> onStatus(true)}>I want to be open</button>
//         <h2>Welcome to this beautiful restaurant! {openStatus ? "Open" : "Closed"}</h2>
//       </div>
//       <main>
//         <img src={chef} height={200} alt="A photo of a smiling chef owner" />
//         <ul>
//           {dishes.map((dish) => (
//             <li key={dish.id} style={{ listStyleType: "none" }}>
//               {dish.title}
//             </li>
//           ))}
//         </ul>
//       </main>
//     </>
//   );
// }

// function App() {
//   const [status, setStatus] = useState(true);
//   // console.log(status)
//   return (
//     <div>
//       <h1>The restaurant is currently {status ? "open" : "closed"}.</h1>
//       <button onClick={() => setStatus(!status)}>
//         {status ? "Close" : "Open"} Restaurant
//       </button>
//       <Header name="Alex" year={new Date().getFullYear()} />
//       <Main dishes={dishObjects} openStatus={status} onStatus={setStatus}/>
//     </div>
//   );
// }

/**04_05b*/
function Header({ name, year }) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  );
}
const items = [
  "Macaroni and Cheese",
  "Salmon with Potatoes",
  "Tofu with Vegetables",
  "Minestrone Soup",
];

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish,
}));

function Main({ dishes, openStatus, onStatus }) {
  return (
    <>
      <div>
        <button onClick={() => onStatus(true)}>I want to be open</button>
        <h2>
          Welcome to this beautiful restaurant! {openStatus ? "Open" : "Closed"}
        </h2>
      </div>
      <main>
        <img src={chef} height={200} alt="A photo of a smiling chef owner" />
        <ul>
          {dishes.map((dish) => (
            <li key={dish.id} style={{ listStyleType: "none" }}>
              {dish.title}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

function App() {
  // const [status, setStatus] = useState(true);
  const [status, toggle] = useReducer((status) => !status, true)

  return (
    <div>
      <h1>The restaurant is currently {status ? "open" : "closed"}.</h1>
      <button onClick={toggle}>
        {status ? "Close" : "Open"} Restaurant
      </button>
      <Header name="Alex" year={new Date().getFullYear()} />
      <Main dishes={dishObjects} openStatus={status} onStatus={toggle} />
    </div>
  );
}

export default App;
