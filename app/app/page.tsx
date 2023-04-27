import { Suspense } from "react"
import CountryClient from "~/ui/country-client"
import CountryDynamic from "~/ui/country-dynamic"
import CountryPlaceholder from "~/ui/country-placeholder"
import CountryStatic from "~/ui/country-static"

export default function Home() {
  return (
    <main className="relative min-h-screen p-24">
      <div className="before:bg-gradient-radial after:bg-gradient-conic absolute left-1/2 top-1/2 mt-36 flex place-items-center before:absolute before:h-[300px] before:w-[880px] before:-translate-x-1/2 before:rounded-full before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[390px] after:-translate-x-1/2 after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]" />

      <div className="flex gap-4">
        <div>
          <h2>Static Site Generation</h2>
          {/* @ts-expect-error RSC */}
          <CountryStatic name="uruguay" />
        </div>

        <div>
          <h2>Server Side Rendering</h2>
          <Suspense fallback={<CountryPlaceholder />}>
            {/* @ts-expect-error RSC */}
            <CountryDynamic name="france" />
          </Suspense>
        </div>

        <div>
          <h2>Client Side Rendering</h2>
          <CountryClient name="argentina" />
        </div>

        {/* <div>
          <h2>Placeholder</h2>
          <CountryPlaceholder />
        </div> */}
      </div>
    </main>
  )
}
