import Country from "./country"
import getCountry from "~/lib/get-country"
import getTime from "~/lib/get-time"

interface Props {
  name: string
}

export default async function CountryDynamic({ name }: Props) {
  const country = await getCountry(name, {
    cache: "no-store",
  })
  const time = await getTime(country, {
    cache: "no-store",
  })

  return <Country country={country} time={time} />
}
