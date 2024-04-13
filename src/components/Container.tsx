"use client"
import { FC, ReactElement } from "react"

const Container: FC<{ children: ReactElement }> = ({ children }) => {
  return <div className="container mx-auto px-4">{children}</div>
}

export default Container
