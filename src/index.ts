import axios from "axios"

import Dotenv from "dotenv"

Dotenv.config()

import Bearer from "@bearer/node-agent"

const { BEARER_SECRET_KEY } = process.env

const body = async () => {
  await Bearer.init({ secretKey: BEARER_SECRET_KEY })

  console.log("-- Waiting for initialization --")
  await sleep(10000)

  // Postman-Echo
  console.log("-- Sending API Calls to Postman-echo --")
  try {
    await axios.get("https://postman-echo.com/status/404", {
      headers: {
        password: "h4x0r",
        secret: "secret key",
      },
    })
  } catch {}

  try {
    await axios.get("https://postman-echo.com/status/403", {
      headers: {
        password: "h4x0r",
        secret: "secret key",
      },
    })
  } catch {}

  try {
    await axios.get("https://postman-echo.com/status/429", {
      headers: {
        password: "h4x0r",
        secret: "secret key",
      },
    })
  } catch {}

  try {
    await axios.get(
      "https://postman-echo.com/status/501?email=pii@example.com",
      {
        headers: {
          password: "h4x0r",
          secret: "secret key",
        },
      }
    )
  } catch {}

  await axios.post(
    "https://postman-echo.com/post",
    {
      foo: "Bar",
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
  await axios.get("https://postman-echo.com/status/200")

  // NASA API
  console.log("-- Sending API Calls to NASA API --")
  await axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")

  // Star Wars API
  console.log("-- Sending API Calls to SWAPI --")
  await axios.get("https://swapi.dev/api/people/1/")
  await axios.get("https://swapi.dev/api/people/9/")
  await axios.get("https://swapi.dev/api/starships/9/")

  // Foo Bar -> Non Existing API
  console.log("-- Sending API Calls to non existing API --")
  try {
    await axios.get("https://foo.bar/status/200")
  } catch {}
}

const sleep = (msec: number) => new Promise(resolve => { setTimeout(resolve, msec) })

body()
