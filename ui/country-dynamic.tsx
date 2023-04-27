import Country from "./country"
import getCountry from "~/lib/get-country"

interface Props {
  name: string
}

export default async function CountryDynamic({ name }: Props) {
  const country = await getCountry(name, {
    cache: "no-store",
  })

  return <Country country={country} />
}
