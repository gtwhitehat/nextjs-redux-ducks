import axios from 'axios'

export const fetchContentRequest = () => axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')