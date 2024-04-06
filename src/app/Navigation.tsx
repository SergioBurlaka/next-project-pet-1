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
          path: "/first",
          name: "First",
          children: [
            {
              path: "/one",
              name: "one"
            },
            {
              path: "/two",
              name: "two"
            },
            {
              path: "/three",
              name: "three"
            }
          ]
        },
        {
          path: "/second",
          name: "Second"
        },
        {
          path: "/third",
          name: "Third"
        }
      ]
    }
  ]

  const createRouterList = (routes: BaseRoute[]) => (
    <ul>
      {routes.map(({ path, name }) => (
        <li key={v4()}>
          <Link
            className={`link ${
              pathname === path ? "bg-blue-500" : "bg-red-500"
            }`}
            href={path}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  )

  const createnastedRoutes = (routes: RoutesType[], parentPath: string) => {
    return routes.map((route) => {
      if (route.children !== undefined) {

        const path = parentPath + route.path
        return (
          <li
            key={v4()}
            className={`group cursor-pointer ${
              pathname.includes(route.path) ? "bg-blue-500" : "bg-red-500"
            }`}
          >
            <span>{route.name}</span>
            {
              <ul className="hidden group-hover:flex">
                {createnastedRoutes(route.children, path)}
              </ul>
            }
          </li>
        )
      }

      return (
        <li key={v4()}>
          <Link
            className={`link ${
              pathname.includes(route.path) ? "bg-blue-500" : "bg-red-500"
            }`}
            href={parentPath + route.path}
          >
            {route.name}
          </Link>
        </li>
      )
    })
  }

  return (
    <nav>
      <ul className="flex">{createnastedRoutes(routesColection, "")}</ul>
    </nav>
  )
}
