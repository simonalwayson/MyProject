import axios from 'axios'


// const IP = 'http://128.160.187.0:8080'

export default (url, objParams = {}, type = 'get') => {
    switch (type) {
        case 'get':
            return axios.get(url, { params: objParams });
        case 'post':
            return axios.post(`${IP}${api}`, objParams);
    }
}