import axios from "axios";
export default axios.create({
    baseURL: " http://route.showapi.com",
    timeout: 20000,
    headers: {
    }
})