import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// const animals = ["giraffe", "zebra", "baer"]
// console.log(animals[0])

// const [firstAnimal, second, third] = ["giraffe", "zebra", "bear"];
// console.log(firstAnimal, second, third);

createRoot(document.getElementById("root")).render(<App />);
