import Country from "./country"
import getCountry from "~/lib/get-country"
import getTime from "~/lib/get-time"

interface Props {
  name: string
}

export default async function CountryStatic({ name }: Props) {
  const country = await getCountry(name)
  const time = await getTime({
    lat: country.capitalInfo.latlng[0],
    lon: country.capitalInfo.latlng[1],
  })

  return <Country country={country} time={time} />
}
