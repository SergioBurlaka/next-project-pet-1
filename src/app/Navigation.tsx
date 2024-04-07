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
            },
            {
              path: "/sub-post-3",
              name: "sub-post-3"
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

        const uniqKey = v4()
        const listGroup = route.name.toLowerCase()
        return (
          <li
            key={uniqKey}
            className={`relative group cursor-pointer ${
              pathname.includes(route.path) ? "bg-blue-500" : "bg-red-500"
            }`}
          >
            <Link
              className={`link ${
                pathname.includes(route.path) ? "bg-blue-500" : "bg-red-500"
              }`}
              href={parentPath + route.path}
            >
              {route.name}
            </Link>
            {
              <ul className={`relative left-full hidden group-hover:block`}>
                {/* <ul className="hidden group-hover:flex"> */}
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
