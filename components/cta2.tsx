import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/logo-02.png'

export default function Features02() {
  return (
    <section>
      <div className="pt-6 md:pt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="font-inter-tight text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Request  <em className="relative not-italic inline-flex justify-center items-end">
                 free
                <svg className="absolute fill-zinc-300 w-[calc(100%+1rem)] -z-10" xmlns="http://www.w3.org/2000/svg" width="120" height="10" viewBox="0 0 120 10" aria-hidden="true" preserveAspectRatio="none">
                  <path d="M118.273 6.09C79.243 4.558 40.297 5.459 1.305 9.034c-1.507.13-1.742-1.521-.199-1.81C39.81-.228 79.647-1.568 118.443 4.2c1.63.233 1.377 1.943-.17 1.89Z" />
                </svg>
              </em> consultation
            </h2>
            <p className="text-lg text-zinc-500 mb-8">Gray removes creative distances by connecting beginners, pros, and every team in between. Are you ready to start your journey?</p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div>
                <a className="btn text-zinc-100 bg-zinc-900 hover:bg-zinc-800 w-full shadow" href="https://calendar.app.google/5JqBYPj4hTdFjSQq6">Free Consultation</a>
              </div>
              <div>
                <a className="btn text-zinc-600 bg-white hover:text-zinc-900 w-full shadow" href="https://bourgeon.bubbleapps.io/version-test">Leave A Message</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
