"use client";

import React, { useRef, useContext, useState, useCallback } from "react";
import Image from "next/image";
import { ScrollContext } from "@df/utils/ScrollObserver";

const Masthead: React.FC = () => {
  const refContainer = useRef<HTMLDivElement>(null)
  const { scrollY } = useContext(ScrollContext)

  let progress = 0

  const { current: elContainer } = refContainer
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight)
  }

  return (
    <div
      ref={refContainer} 
      className="min-h-screen flex flex-col items-center justify-center sticky top-0 -z-10"
      style={{
        transform: `translateY(-${progress * 16}vh)`
      }}
    >
      <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover -z-50">
        <source src="/videos/hero.mp4" type="video/mp4; codecs=hvc1" />
        <source src="/videos/hero.webm" type="video/webm; codecs=vp9" />
      </video>
      <div className={`flex-grow-0 transition-opacity duration-1000 -z-40`}>
        <Image
          src="/images/logo.svg"
          width={900 / 3}
          height={600 / 3}
          className="drop-shadow-[0_5px_3px_rgb(0,0,0,0.4)] -z-10"
          alt="Logo"
        />
      </div>
    </div>
  )
}

export default Masthead;