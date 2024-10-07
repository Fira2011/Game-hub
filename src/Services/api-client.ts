import axios from 'axios'

export default axios.create ({
    baseURL :'https://api.rawg.io/api',
    params : {
        key :'64c04d4153b8488ab8f199fdfcf9330f'
    }
})