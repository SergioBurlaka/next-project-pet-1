"use client"

import React, { useState } from "react"
import Link from "next/link"

import type { MenuProps } from "antd"
import { Menu } from "antd"

import Container from "./Container"

type BaseRoute = {
  path: string
  name: string
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

const createnastedRoutes = (
  routes: RoutesType[],
  parentPath: string
): MenuProps["items"] =>
  routes.map((route) => {
    if (route.children !== undefined) {
      return {
        key: route.name,
        label: <Link href={parentPath + route.path}>{route.name}</Link>,
        children: createnastedRoutes(route.children, parentPath + route.path)
      }
    }

    return {
      key: route.name,
      label: <Link href={parentPath + route.path}>{route.name}</Link>
    }
  })

export default function HeaderMenu() {
  const [current, setCurrent] = useState("mail")

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e)
    setCurrent(e.key)
  }

  const itemsFromRoutes = createnastedRoutes(routesColection, "")

  return (
    <div className="fixed w-full">
      <Container>
        <header className="shadow-lg ">
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
