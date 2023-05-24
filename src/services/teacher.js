import axios from 'axios'

export const createdTeacher = async ({ teacher }) => {
  try {
    return (await axios.post('/teachers', teacher)).data
  } catch (error) {
    throw new Error(error.response.data.message)
  }
}
