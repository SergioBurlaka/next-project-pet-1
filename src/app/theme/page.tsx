"use client"
import React, { useEffect, useLayoutEffect } from "react"

import { changeTheme } from "@/src/utils/changeTheme"

// link to lesson for thems

// https://dev.to/ultroneoustech/creating-multiple-themes-in-tailwind-css-and-nextjs-2e98

const ThemeSwitcher = () => {
  useEffect(() => {
    const appTheme = localStorage.getItem("app-theme")

    if (appTheme) {
      changeTheme(appTheme)
    } else {
      changeTheme("")
    }
  }, [])

  return (
    <div className=" pt-36">
      <div className="py-10">
        <h2>Creating Multiple Themes in Tailwind CSS and Next.js</h2>

        <a
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          href="https://dev.to/ultroneoustech/creating-multiple-themes-in-tailwind-css-and-nextjs-2e98"
          target="_blank"
        >
          Link to post
        </a>
      </div>

      <div className="h-screen grid place-items-center bg-primary">
        <div>
          <button
            className="py-2 px-8 bg-buttons text-typography m-2"
            onClick={() => changeTheme("")}
          >
            Default
          </button>
          <button
            className="py-2 px-8 bg-buttons text-typography m-2"
            onClick={() => changeTheme("theme1")}
          >
            theme 1
          </button>
          <button
            className="py-2 px-8 bg-buttons text-typography m-2"
            onClick={() => changeTheme("theme2")}
          >
            theme 2
          </button>
          <button
            className="py-2 px-8 bg-buttons text-typography m-2"
            onClick={() => changeTheme("theme3")}
          >
            theme 3
          </button>
        </div>
      </div>
    </div>
  )
}

export default ThemeSwitcher
