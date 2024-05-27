'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import CarouselIllustration from '@/public/images/carousel-illustration-01.jpg'
import FeatureIllustration from '@/public/images/features-illustration.png'

export default function Features03() {

  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])

  return (
    <section className="relative bg-zinc-800 after:absolute after:top-0 after:right-0 after:h-full after:w-96 after:pointer-events-none after:bg-gradient-to-l after:from-zinc-800 max-lg:after:hidden">
      <div className="py-12 md:py-20">

        {/* Carousel */}
        <div className="max-w-xl lg:max-w-6xl mx-auto px-4 sm:px-6">
          <div className="lg:flex space-y-12 lg:space-y-0 lg:space-x-12 xl:space-x-24">

            {/* Content */}
            <div className="lg:max-w-none lg:min-w-[524px]">
              <div className="mb-8">
                <div className="inline-flex text-sm font-medium text-zinc-400 px-4 py-0.5 border border-transparent [background:linear-gradient(theme(colors.zinc.800),theme(colors.zinc.800))_padding-box,linear-gradient(120deg,theme(colors.zinc.700),theme(colors.zinc.700/0),theme(colors.zinc.700))_border-box] rounded-full mb-4">Scale Your Team</div>
                <h3 className="font-inter-tight text-3xl font-bold text-zinc-200 mb-4">Design-powered workflows for teams of any size</h3>
                <p className="text-lg text-zinc-500">Gray can understand what you are designing, learn from your feedback to take your creativity further, and turn it instantly into beautiful images.</p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0 space-y-2">
                <button
                  className={`text-left flex items-center px-6 py-4 rounded border border-transparent ${tab !== 1 ? '' : '[background:linear-gradient(#2E2E32,#2E2E32)_padding-box,linear-gradient(120deg,theme(colors.zinc.700),theme(colors.zinc.700/0),theme(colors.zinc.700))_border-box]'}`}
                  onClick={(e) => { e.preventDefault(); setTab(1); }}
                >
                  <svg className="shrink-0 fill-zinc-400 mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="m7.951 14.537 6.296-7.196 1.506 1.318-7.704 8.804-3.756-3.756 1.414-1.414 2.244 2.244Zm11.296-7.196 1.506 1.318-7.704 8.804-1.756-1.756 1.414-1.414.244.244 6.296-7.196Z" />
                  </svg>
                  <div>
                    <div className="font-inter-tight text-lg font-semibold text-zinc-200 mb-1">Make designs feel real</div>
                    <div className="text-zinc-500">Save time and keep things consistent with reusable images, and 3D assets in shared libraries.</div>
                  </div>
                </button>
                <button
                  className={`text-left flex items-center px-6 py-4 rounded border border-transparent ${tab !== 2 ? '' : '[background:linear-gradient(#2E2E32,#2E2E32)_padding-box,linear-gradient(120deg,theme(colors.zinc.700),theme(colors.zinc.700/0),theme(colors.zinc.700))_border-box]'}`}
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <svg className="shrink-0 fill-zinc-400 mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="m16.997 19.056-1.78-.912A13.91 13.91 0 0 0 16.75 11.8c0-2.206-.526-4.38-1.533-6.344l1.78-.912A15.91 15.91 0 0 1 18.75 11.8c0 2.524-.602 5.01-1.753 7.256Zm-3.616-1.701-1.77-.93A9.944 9.944 0 0 0 12.75 11.8c0-1.611-.39-3.199-1.14-4.625l1.771-.93c.9 1.714 1.37 3.62 1.369 5.555 0 1.935-.47 3.841-1.369 5.555Zm-3.626-1.693-1.75-.968c.49-.885.746-1.881.745-2.895a5.97 5.97 0 0 0-.745-2.893l1.75-.968a7.968 7.968 0 0 1 .995 3.861 7.97 7.97 0 0 1-.995 3.863Zm-3.673-1.65-1.664-1.11c.217-.325.333-.709.332-1.103 0-.392-.115-.776-.332-1.102L6.082 9.59c.437.655.67 1.425.668 2.21a3.981 3.981 0 0 1-.668 2.212Z" />
                  </svg>
                  <div>
                    <div className="font-inter-tight text-lg font-semibold text-zinc-200 mb-1">Bring creatives closer</div>
                    <div className="text-zinc-500">Save time and keep things consistent with reusable images, and 3D assets in shared libraries.</div>
                  </div>
                </button>
                <button
                  className={`text-left flex items-center px-6 py-4 rounded border border-transparent ${tab !== 3 ? '' : '[background:linear-gradient(#2E2E32,#2E2E32)_padding-box,linear-gradient(120deg,theme(colors.zinc.700),theme(colors.zinc.700/0),theme(colors.zinc.700))_border-box]'}`}
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >
                  <svg className="shrink-0 fill-zinc-400 mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="m11.293 5.293 1.414 1.414-8 8-1.414-1.414 8-8Zm7-1 1.414 1.414-8 8-1.414-1.414 8-8Zm0 6 1.414 1.414-8 8-1.414-1.414 8-8Z" />
                  </svg>
                  <div>
                    <div className="font-inter-tight text-lg font-semibold text-zinc-200 mb-1">Scale and align your design team</div>
                    <div className="text-zinc-500">Save time and keep things consistent with reusable images, and 3D assets in shared libraries.</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Tabs items */}
            <div className="relative lg:max-w-none">
              <div className="relative flex flex-col" ref={tabs}>
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterFrom="opacity-0 -translate-y-4"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-4"
                  beforeEnter={() => heightFix()}
                  unmount={false}
                >
                  <div>
                    <Image className="lg:max-w-none mx-auto rounded-lg shadow-2xl" src={CarouselIllustration} width={800} height={620} alt="Carousel 01" />
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterFrom="opacity-0 -translate-y-4"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-4"
                  beforeEnter={() => heightFix()}
                  unmount={false}
                >
                  <div>
                    <Image className="lg:max-w-none mx-auto rounded-lg shadow-2xl" src={CarouselIllustration} width={800} height={620} alt="Carousel 02" />
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterFrom="opacity-0 -translate-y-4"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-4"
                  beforeEnter={() => heightFix()}
                  unmount={false}
                >
                  <div>
                    <Image className="lg:max-w-none mx-auto rounded-lg shadow-2xl" src={CarouselIllustration} width={800} height={620} alt="Carousel 03" />
                  </div>
                </Transition>
              </div>
              {/* Gear illustration */}
              <Image className="absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/3 mix-blend-exclusion max-lg:w-32" src={FeatureIllustration} alt="Features 02 illustration" width={173} height={167} aria-hidden="true" />
            </div>

          </div>
        </div>



      </div>
    </section>
  )
}
