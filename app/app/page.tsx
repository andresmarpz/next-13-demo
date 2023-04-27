import { Suspense } from "react"
import CountryClient from "~/ui/country-client"
import CountryClientBackend from "~/ui/country-client-backend"
import CountryDynamic from "~/ui/country-dynamic"
import CountryISR from "~/ui/country-isr"
import CountryPlaceholder from "~/ui/country-placeholder"
import CountryStatic from "~/ui/country-static"

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center p-5">
      <div className="flex flex-wrap gap-4">
        <div>
          <h2>Static Site Generation</h2>
          {/* @ts-expect-error RSC */}
          <CountryStatic name="uruguay" />
        </div>

        <div>
          <h2>ISR (30min)</h2>
          {/* @ts-expect-error RSC */}
          <CountryISR name="uruguay" />
        </div>

        <div>
          <h2>SSR (Streaming)</h2>
          <Suspense fallback={<CountryPlaceholder />}>
            {/* @ts-expect-error RSC */}
            <CountryDynamic name="germany" />
          </Suspense>
        </div>

        <div>
          <h2>Client Side Rendering</h2>
          <CountryClient name="argentina" />
        </div>

        <div>
          <h2>Client Side Rendering (API)</h2>
          <CountryClientBackend name="argentina" />
        </div>

        <div>
          <h2>Placeholder</h2>
          <CountryPlaceholder />
        </div>
      </div>
    </main>
  )
}
