import axios from 'axios'

export async function getCnodeTopics() {
  const { data } = await axios('https://cnodejs.org/api/v1/topics')
  return data
}
