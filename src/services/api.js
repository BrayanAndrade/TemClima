import axios from 'axios';

// https://api.hgbrasil.com/weather?key=705d265d&lat=-23.682&lon=-46.875

export const key = '705d265d';

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com'
})

export default api;