export interface ICountry {
  name: { common: string }
  cioc: string
  capital: string[]
  flag: string
  flags: {
    png: string
    svg: string
    alt: string
  }
  capitalInfo: {
    latlng: number[]
  }
}

export default async function getCountry(
  name: string,
  options?: RequestInit | undefined
) {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${name}`,
    options
  )
  const [country] = await res.json()
  return country as ICountry
}
