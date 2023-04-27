import { ICountry } from "./get-country"

export interface ITime {
  datetime: string
}

export default async function getTime(
  { lat, lon }: { lat: number; lon: number },
  options?: RequestInit | undefined
) {
  const res = await fetch(
    `https://api.api-ninjas.com/v1/worldtime?lat=${lat}&lon=${lon}`,
    {
      ...options,
      headers: {
        "X-Api-Key": process.env.NEXT_PUBLIC_API_KEY || "",
      },
    }
  )
  const time = await res.json()
  return time as ITime
}
