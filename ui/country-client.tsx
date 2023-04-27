"use client"

import Country from "./country"
import CountryPlaceholder from "./country-placeholder"
import { useEffect } from "react"
import useSWR from "swr"
import getCountry from "~/lib/get-country"

interface Props {
  name: string
}

export default function CountryClient({ name }: Props) {
  const {
    data: country,
    isLoading,
    error,
  } = useSWR(name, (name) => getCountry(name, { cache: "no-store" }))

  if (isLoading) return <CountryPlaceholder />
  if (error || !country) return <div>error</div>

  return <Country country={country} />
}
