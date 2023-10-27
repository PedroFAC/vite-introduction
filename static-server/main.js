import classes from "./style.module.css";

console.log("Hello World!");
console.log("Server is running in " + import.meta.env.MODE);
console.log(import.meta.env);
if (import.meta.env.DEV) {
  console.log("This is Dev Server");
}

document.querySelector("h1").className = classes.title;
