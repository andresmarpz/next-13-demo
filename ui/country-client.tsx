"use client"

import Country from "./country"
import CountryPlaceholder from "./country-placeholder"
import { useEffect, useState } from "react"
import useSWR from "swr"
import getCountry from "~/lib/get-country"
import getTime from "~/lib/get-time"

interface Props {
  name: string
}

export default function CountryClient({ name }: Props) {
  const {
    data: country,
    isLoading,
    error,
  } = useSWR(name, (name) => getCountry(name, { cache: "no-store" }))

  const {
    data: time,
    isLoading: isLoadingTime,
    error: errorTime,
  } = useSWR(country ? country.name.common : null, () =>
    getTime(country!, {
      cache: "no-store",
    })
  )

  if (isLoading || isLoadingTime) return <CountryPlaceholder />
  if (error || errorTime || !country || !time) return <div>error</div>

  return <Country country={country} time={time} />
}
