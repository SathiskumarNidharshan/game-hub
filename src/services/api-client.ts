import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'be9d16c307414a48ab8a227f9cf092e8'
    }
})