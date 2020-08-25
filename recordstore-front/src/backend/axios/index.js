import "axios" from 'axios'

const API_URL = 'http://localhost:3000'

const securedAxiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})

const plainAxiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})

securedAxiosInstance.interceptors.request.use(config => {
  const method = config.method.toUpperCase();
  if (method !== 'OPTIONS' && method !== 'GET') {
    config.headers = {
      ...config.headers,
      'X-CSRF-TOKEN': localStorage.csrf
    }
  }

  return config
});

// If there is a response that isn't correct (401, cookies, etc) get refresh instance and pass in token saved in localStorage. Check if the response of CSRF token and signedIn = response
securedAxiosInstance.interceptors.response.use(null, error => {
  if ( error.response && error.response.config && error.response.status == 401) {
    return plainAxiosInstance.post('/refresh', {}, { headers: {'X-CSRF-TOKEN': localStorage.csrf }})
    .then(response => {
      localStorage.csrf = response.data.csrf
      localStorage.signedIn = true

      let retryConfig = error.response.config
      retryConfig.headers['X-CSRF-TOKEN'] = localStorage.csrf
    }).catch(error => {
      delete localStorage.csrf
      delete localStorage.signedIn

      localation.replace('/')
      return Promise.reject(error)
    })
  } else {
    return Promise.reject(error)
  }
})

export { securedAxiosInstance, plainAxiosInstance }