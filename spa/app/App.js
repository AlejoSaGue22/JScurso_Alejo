
import { Loader } from "../app/components/Loader.js";
import { headers } from "./components/headers.js";
import { Posts } from "./components/Posts.js";
import { Router } from "./components/router.js";

export function App(){
  let root = document.getElementById("root");
      root.innerHTML = null

     root.appendChild(headers())
     root.appendChild(Posts())
     root.appendChild(Loader())
     Router()
}
