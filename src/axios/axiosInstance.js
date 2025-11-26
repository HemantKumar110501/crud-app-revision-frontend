//for the actual axios mtlb jisse deploy krne pe error na aaye.
//hmlog apna axios bana rhe h jisse hume pura url nhi dena pdega mtlb base url jo hum .env mai rakhe h usko api word k key mai rakhe h aur CreateEmpPage mai hum ye api word se hi axios se data ko send receive kr lenge bss end point pass krke.

import axios from "axios";
export const api = axios.create({
    // baseURL:"http://localhost:4000", //not req now because now we have .env
    baseURL:import.meta.env.VITE_BASE_URL,
    // withCredentials:true  //! for cookies but since here we havent used it , written it just to remember as a concept for learning. 
})















