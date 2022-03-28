import axios from "axios";
const instance = axios.create({
  // The API URL
  baseURL: 'https://us-central1-lhl-final-82e6c.cloudfunctions.net/api'
  // 'http://localhost:5001/lhl-final-82e6c/us-central1/api'
});

export default instance;