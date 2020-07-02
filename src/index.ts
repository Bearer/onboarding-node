import axios from 'axios'

import Bearer from '@bearer/node-agent'
import { ConfigOptions } from '@bearer/node-agent/lib/config'
import Dotenv from 'dotenv'

Dotenv.config()
const { BEARER_SECRET_KEY, NODE_ENV } = process.env

const body = async () => {
  await Bearer.init({
    secretKey: BEARER_SECRET_KEY,
    environment: NODE_ENV
  } as ConfigOptions)

  // Postman-Echo
  try {
    await axios.get('https://postman-echo.com/status/404', {
      headers: {
        password: 'h4x0r',
        secret: 'secret key',
      },
    })
  } catch {}

  try {
    await axios.get('https://postman-echo.com/status/403', {
      headers: {
        password: 'h4x0r',
        secret: 'secret key',
      },
    })
  } catch {}

  try {
    await axios.get('https://postman-echo.com/status/429', {
      headers: {
        password: 'h4x0r',
        secret: 'secret key',
      },
    })
  } catch {}

  try {
    await axios.get(
      'https://postman-echo.com/status/501?email=pii@example.com',
      {
        headers: {
          password: 'h4x0r',
          secret: 'secret key',
        },
      }
    )
  } catch {}

  await axios.post(
    'https://postman-echo.com/post',
    {
      foo: 'Bar',
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  await axios.get('https://postman-echo.com/status/200')

  // NASA API
  await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')

  // Star Wars API
  await axios.get('https://swapi.dev/api/people/1/')
  await axios.get('https://swapi.dev/api/people/9/')
  await axios.get('https://swapi.dev/api/starships/9/')

  // Foo Bar -> Non Existing API
  try {
    await axios.get('https://foo.bar/status/200')
  } catch {}
}

body()
