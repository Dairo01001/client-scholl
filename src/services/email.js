import axios from 'axios'

export const sendEmail = async ({ message, to, subject }) => {
  try {
    return (await axios.post('/mailing', { message, to, subject })).data
  } catch (error) {
    throw new Error(error.response.data.message)
  }
}
