"use client"
import { v4 } from "uuid"

import { usePathname } from "next/navigation"
import Link from "next/link"
export default function Navigation() {
  const pathname = usePathname()

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

  const handleColor = (value: string) =>
    pathname.includes(value) ? "bg-blue-500" : "bg-red-500"

  const createnastedRoutes = (routes: RoutesType[], parentPath: string) =>
    routes.map((route) => {
      if (route.children !== undefined) {
        return (
          <li
            key={v4()}
            className={`py-4 inline-block relative group cursor-pointer ${handleColor(
              route.path
            )}`}
          >
            <Link
              className={`text-nowrap ${handleColor(route.path)}`}
              href={parentPath + route.path}
            >
              {route.name}
            </Link>
            {
              <ul className={`absolute left-full hidden group-hover:block`}>
                {createnastedRoutes(route.children, parentPath + route.path)}
              </ul>
            }
          </li>
        )
      }

      return (
        <li key={v4()} className="py-4 inline-block">
          <Link
            className={`text-nowrap ${handleColor(route.path)}`}
            href={parentPath + route.path}
          >
            {route.name}
          </Link>
        </li>
      )
    })

  return (
    <nav className=" pr-40">
      <ul className=" right-20 flex">
        {createnastedRoutes(routesColection, "")}
      </ul>
    </nav>
  )
}
