"use client"

import Image from "next/image"
import type { ICountry } from "~/lib/get-country"

interface Props {
  country: ICountry
}

export default function Country({ country }: Props) {
  return (
    <div className="flex w-48 flex-col items-center gap-4 rounded border border-gray-700 p-3">
      <Image
        className="h-[80px] w-[120px] rounded"
        src={country.flags.svg}
        alt={country.flags.alt}
        width={120}
        height={80}
      />
      <div>
        <h1>
          {country.name.common} ({country.cioc})
        </h1>
      </div>
    </div>
  )
}
