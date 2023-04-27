import Country from "./country"
import getCountry from "~/lib/get-country"

interface Props {
  name: string
}

export default async function CountryStatic({ name }: Props) {
  const country = await getCountry(name)

  return <Country country={country} />
}
