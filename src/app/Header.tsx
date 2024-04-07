"use client"

import Navigation from "./Navigation"

export default function Header() {
  return (
    <header className="shadow-lg fixed w-full flex justify-between items-center bg-slate-200">
      <span className=" mx-10 uppercase font-bold">My Logo</span>
      <Navigation />
    </header>
  )
}
