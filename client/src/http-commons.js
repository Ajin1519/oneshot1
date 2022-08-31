import axios from "axios";

export default axios.create({
  baseURL: "https://oneshot-ch.herokuapp.com/api/v1/oneshot",
  headers: {
    "Content-type": "application/json"
  }
});