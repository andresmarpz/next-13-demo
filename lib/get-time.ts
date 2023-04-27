import { ICountry } from "./get-country"

export interface ITime {
  datetime: string
}

export default async function getTime(
  country: ICountry,
  options?: RequestInit | undefined
) {
  const res = await fetch(
    `https://api.api-ninjas.com/v1/worldtime?lat=${country.capitalInfo.latlng[0]}&lon=${country.capitalInfo.latlng[1]}`,
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
