"use client"

import Country from "./country"
import CountryPlaceholder from "./country-placeholder"
import useSWR from "swr"
import getCountry from "~/lib/get-country"

interface Props {
  name: string
}

export default function CountryClientBackend({ name }: Props) {
  const {
    data: country,
    isLoading,
    error,
  } = useSWR(name, (name) => getCountry(name, { cache: "no-store" }))

  const {
    data: time,
    isLoading: isLoadingTime,
    error: errorTime,
  } = useSWR(country ? ["backend", country.name.common] : null, () =>
    fetch(
      `/api/time?lat=${country!.capitalInfo.latlng[0]}&lon=${
        country!.capitalInfo.latlng[1]
      }`
    ).then((res) => res.json())
  )

  if (isLoading || isLoadingTime) return <CountryPlaceholder />
  if (error || errorTime || !country || !time) return <div>error</div>

  return <Country country={country} time={time} />
}
