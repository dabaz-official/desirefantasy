export default function Promo() {
  return (
    <div className="relative overflow-hidden bg-white -z-10">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl">
              Ignite your fantasy
            </h1>
            <p className="mt-4 text-xl text-neutral-500">
              Specializing in high-quality erotic lingerie, we are committed to bringing elegance, sexiness, and confidence to adults.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-xl sm:opacity-0 lg:opacity-100">
                        <img
                          src="/images/home/hero/hero-1.webp"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-xl">
                        <img
                          src="/images/home/hero/hero-2.webp"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-xl">
                        <img
                          src="/images/home/hero/hero-3.webp"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-xl">
                        <img
                          src="/images/home/hero/hero-4.webp"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-xl">
                        <img
                          src="/images/home/hero/hero-5.webp"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-xl">
                        <img
                          src="/images/home/hero/hero-6.webp"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-xl">
                        <img
                          src="/images/home/hero/hero-7.webp"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="inline-block rounded-xl border border-transparent bg-pink-600 px-4 py-3 text-center font-medium text-white hover:bg-pink-700 cursor-pointer"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}