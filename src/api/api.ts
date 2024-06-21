import axios from "axios"

const DEV_URL = 'http://127.0.0.1:8000/'
// const TEST_URL = ''
// const PROD_URL = ''
const URL = DEV_URL

// POSTS END-POINT

export const getPosts = async () => axios.get(`${URL}api/posts/`)
                                    .then(res => res.data)

// export const getAssignaturesByInstructor = data => axios.get(`${URL}api/assignatures/?clase=&Instructor=${data.instructorId}&school=` ,{
//     headers: { Authorization: `JWT ${data.token}` }
// })
// .then(res => res.data)