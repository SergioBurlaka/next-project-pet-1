"use client"

import Navigation from "./Navigation"

export default function Header() {
  return (
    <div className=" fixed w-full flex between">
      <span>My Logo</span>
      <Navigation />
    </div>
  )
}
