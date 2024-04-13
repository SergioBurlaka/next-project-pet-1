"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"

import type { MenuProps } from "antd"
import { Menu } from "antd"

import { usePathname } from "next/navigation"

import Container from "./Container"

type BaseRoute = {
  path: string
  name: string
}

type AbsoluteRoute = {
  path: string
  name: string
  absolutePath: string
}

type RoutesType = {
  children?: RoutesType[]
} & BaseRoute

const routesColection: RoutesType[] = [
  {
    path: "/",
    name: "Home"
  },
  {
    path: "/theme",
    name: "Theme"
  },
  {
    path: "/posts",
    name: "Posts",
    children: [
      {
        path: "/post-1",
        name: "post-1",
        children: [
          {
            path: "/sub-post-1",
            name: "sub-post-1"
          },
          {
            path: "/sub-post-2",
            name: "sub-post-2"
          }
        ]
      },
      {
        path: "/post-2",
        name: "post-2"
      },
      {
        path: "/post-3",
        name: "post-3"
      }
    ]
  }
]

const getRoutesCollection = (
  routesColection: RoutesType[],
  parentPath: string
) => {
  const resultRoutes: AbsoluteRoute[] = []

  routesColection.forEach((route) => {
    if (route.children !== undefined) {
      const res: AbsoluteRoute[] = getRoutesCollection(
        route.children,
        parentPath + route.path
      )
      resultRoutes.push(...res)
    }
    resultRoutes.push({
      path: route.path,
      name: route.name,
      absolutePath: parentPath + route.path
    })
  })

  return resultRoutes
}

const createnastedRoutes = (
  routes: RoutesType[],
  parentPath: string,
  childrenElements: boolean
): MenuProps["items"] =>
  routes.map((route) => {
    const labelComponent = (
      <div className={childrenElements ? "" : "py-4 flex items-center"}>
        <Link href={parentPath + route.path}>{route.name}</Link>
      </div>
    )
    if (route.children !== undefined) {
      return {
        key: route.name,
        label: labelComponent,
        children: createnastedRoutes(
          route.children,
          parentPath + route.path,
          true
        )
      }
    }

    return {
      key: route.name,
      label: labelComponent
    }
  })

export default function HeaderMenu() {
  const pathname = usePathname()

  const [current, setCurrent] = useState("")

  console.log("current", current)

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e)
    setCurrent(e.key)
  }

  useEffect(() => {
    console.log("pathname", pathname)
    const collectionOfAllPathes = getRoutesCollection(routesColection, "")
    const activeRoute = collectionOfAllPathes.filter(
      (route) => route.absolutePath === pathname
    )
    console.log("activeRoute name", activeRoute[0].name)

    setCurrent(activeRoute[0].name)
  }, [pathname])

  const itemsFromRoutes = createnastedRoutes(routesColection, "", false)

  return (
    <div className="fixed w-full">
      <Container>
        <header className="z-10 bg-white shadow-lg flex justify-between items-center px-5">
          <div className="uppercase font-bold">My super logo</div>
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={itemsFromRoutes}
          />
        </header>
      </Container>
    </div>
  )
}
