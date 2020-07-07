import axios from 'axios';

export const getUserList = (query) => {
  return axios.get(`https://5efd90b7dd373900160b3297.mockapi.io/users${query}`)
    .then(res => res.data)
    .catch(err => console.log(err))
}

export const addUser = (data) => {
  return axios.post("https://5efd90b7dd373900160b3297.mockapi.io/users",data)
  .then(res => res.data)
  .catch(err => console.log(err))

}

export const deleteUser = (userId) => {
  return axios.delete(`https://5efd90b7dd373900160b3297.mockapi.io/users/${userId}`)
    .then(res => res.data)
    .catch(err => console.log(err))
}

export const editUser = (data,id) => {
  return axios.put(`https://5efd90b7dd373900160b3297.mockapi.io/users/${id}`,data)
    .then(res => res.data)
    .catch(err => console.log(err))
}

export const viewUser = (id) => {
  return axios.get(`https://5efd90b7dd373900160b3297.mockapi.io/users/${id}`)
    .then(res => res.data)
    .catch(err => console.log(err))
} 