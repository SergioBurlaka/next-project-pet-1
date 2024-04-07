"use client"

import React, { useState } from "react"
import Link from "next/link"

import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined
} from "@ant-design/icons"
import type { MenuProps } from "antd"
import { Menu } from "antd"

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

const items: MenuProps["items"] = [
  {
    label: "Navigation One",
    key: "mail"
  },
  {
    label: "Navigation Two",
    key: "app"
  },
  {
    label: "Navigation Three - Submenu",
    key: "SubMenu",

    children: [
      {
        type: "group",
        label: "Item 1",

        children: [
          {
            label: "Option 1",
            key: "setting:1",
            style: { padding: 0 }
          },
          {
            label: "Option 2",
            key: "setting:2",
            style: { padding: 0 }
          }
        ]
      },
      {
        type: "group",
        label: "Item 2",

        children: [
          {
            label: "Option 3",

            key: "setting:3"
          },
          {
            label: "Option 4",

            key: "setting:4"
          }
        ]
      }
    ]
  },
  {
    label: (
      <Link className={`text-nowrap p-0 m-0`} href="/posts/post-2">
        posts/post-2
      </Link>
    ),

    key: "alipay"
  }
]

// (

//   {
//       {createnastedRoutes(route.children, parentPath + route.path)}
//   }
// )

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
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={itemsFromRoutes}
    />
  )
}
