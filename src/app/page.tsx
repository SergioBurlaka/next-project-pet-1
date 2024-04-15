"use client"
import { Button } from "antd"

import Image from "next/image"

// https://medium.com/@mertenercan/nextjs-13-folder-structure-c3453d780366

export default function Home() {
  return (
    <main className=" pt-32 px-5">
      <h1 className=" text-center text-4xl md:text-5xl font-bold mb-5">
        Welcome to my home page
      </h1>

      <Button
        // style={{'zIndex': -1}}
        className="-z-10"
        type="primary"
      >
        Button
      </Button>

      <div className="py-10">
        <h2>folder structure for NEXT 14</h2>
        <a
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          href="https://medium.com/@mertenercan/nextjs-13-folder-structure-c3453d780366"
          target="_blank"
        >
          NextJS 14 Folder Structure
        </a>
      </div>

      <Image
        src="https://placehold.co/600x400.png"
        alt="placeholder"
        width="600"
        height="400"
      />

      <p className="mx-auto">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia fuga ut
        reiciendis soluta consequatur ipsa necessitatibus molestiae recusandae
        enim culpa voluptas, voluptates doloribus quod, rem nemo eius nobis,
        accusantium alias asperiores. Provident, nihil vitae deleniti ipsa
        facilis omnis minima vel incidunt. Corporis earum sequi, sint recusandae
        optio natus. Non, iure! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Consectetur deserunt, odit quas quisquam asperiores
        veritatis! Inventore, vel! Pariatur maxime similique exercitationem
        repudiandae, velit ea cum excepturi, explicabo architecto, voluptatem
        dolore ducimus illo saepe nesciunt in. Numquam, culpa at quod temporibus
        voluptate rem incidunt similique ad harum reiciendis animi voluptatem
        cum amet, labore eaque? Veniam deleniti, cum distinctio nostrum error
        similique repudiandae non libero eos incidunt ipsum nisi a quam
        reiciendis recusandae praesentium harum voluptatum accusamus minima
        necessitatibus assumenda! Quod in velit itaque hic delectus animi
        voluptates possimus omnis nulla, doloribus est cum ut eius dolor esse
        amet repellendus maiores fugiat. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Quia fuga ut reiciendis soluta consequatur ipsa
        necessitatibus molestiae recusandae enim culpa voluptas, voluptates
        doloribus quod, rem nemo eius nobis, accusantium alias asperiores.
        Provident, nihil vitae deleniti ipsa facilis omnis minima vel incidunt.
        Corporis earum sequi, sint recusandae optio natus. Non, iure! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Consectetur deserunt,
        odit quas quisquam asperiores veritatis! Inventore, vel! Pariatur maxime
        similique exercitationem repudiandae, velit ea cum excepturi, explicabo
        architecto, voluptatem dolore ducimus illo saepe nesciunt in. Numquam,
        culpa at quod temporibus voluptate rem incidunt similique ad harum
        reiciendis animi voluptatem cum amet, labore eaque? Veniam deleniti, cum
        distinctio nostrum error similique repudiandae non libero eos incidunt
        ipsum nisi a quam reiciendis recusandae praesentium harum voluptatum
        accusamus minima necessitatibus assumenda! Quod in velit itaque hic
        delectus animi voluptates possimus omnis nulla, doloribus est cum ut
        eius dolor esse amet repellendus maiores fugiat. Lorem ipsum dolor sit
        amet consectetur, adipisicing elit. Quia fuga ut reiciendis soluta
        consequatur ipsa necessitatibus molestiae recusandae enim culpa
        voluptas, voluptates doloribus quod, rem nemo eius nobis, accusantium
        alias asperiores. Provident, nihil vitae deleniti ipsa facilis omnis
        minima vel incidunt. Corporis earum sequi, sint recusandae optio natus.
        Non, iure! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consectetur deserunt, odit quas quisquam asperiores veritatis!
        Inventore, vel! Pariatur maxime similique exercitationem repudiandae,
        velit ea cum excepturi, explicabo architecto, voluptatem dolore ducimus
        illo saepe nesciunt in. Numquam, culpa at quod temporibus voluptate rem
        incidunt similique ad harum reiciendis animi voluptatem cum amet, labore
        eaque? Veniam deleniti, cum distinctio nostrum error similique
        repudiandae non libero eos incidunt ipsum nisi a quam reiciendis
        recusandae praesentium harum voluptatum accusamus minima necessitatibus
        assumenda! Quod in velit itaque hic delectus animi voluptates possimus
        omnis nulla, doloribus est cum ut eius dolor esse amet repellendus
        maiores fugiat. Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Quia fuga ut reiciendis soluta consequatur ipsa necessitatibus
        molestiae recusandae enim culpa voluptas, voluptates doloribus quod, rem
        nemo eius nobis, accusantium alias asperiores. Provident, nihil vitae
        deleniti ipsa facilis omnis minima vel incidunt. Corporis earum sequi,
        sint recusandae optio natus. Non, iure! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Consectetur deserunt, odit quas quisquam
        asperiores veritatis! Inventore, vel! Pariatur maxime similique
        exercitationem repudiandae, velit ea cum excepturi, explicabo
        architecto, voluptatem dolore ducimus illo saepe nesciunt in. Numquam,
        culpa at quod temporibus voluptate rem incidunt similique ad harum
        reiciendis animi voluptatem cum amet, labore eaque? Veniam deleniti, cum
        distinctio nostrum error similique repudiandae non libero eos incidunt
        ipsum nisi a quam reiciendis recusandae praesentium harum voluptatum
        accusamus minima necessitatibus assumenda! Quod in velit itaque hic
        delectus animi voluptates possimus omnis nulla, doloribus est cum ut
        eius dolor esse amet repellendus maiores fugiat. Lorem ipsum dolor sit
        amet consectetur, adipisicing elit. Quia fuga ut reiciendis soluta
        consequatur ipsa necessitatibus molestiae recusandae enim culpa
        voluptas, voluptates doloribus quod, rem nemo eius nobis, accusantium
        alias asperiores. Provident, nihil vitae deleniti ipsa facilis omnis
        minima vel incidunt. Corporis earum sequi, sint recusandae optio natus.
        Non, iure! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consectetur deserunt, odit quas quisquam asperiores veritatis!
        Inventore, vel! Pariatur maxime similique exercitationem repudiandae,
        velit ea cum excepturi, explicabo architecto, voluptatem dolore ducimus
        illo saepe nesciunt in. Numquam, culpa at quod temporibus voluptate rem
        incidunt similique ad harum reiciendis animi voluptatem cum amet, labore
        eaque? Veniam deleniti, cum distinctio nostrum error similique
        repudiandae non libero eos incidunt ipsum nisi a quam reiciendis
        recusandae praesentium harum voluptatum accusamus minima necessitatibus
        assumenda! Quod in velit itaque hic delectus animi voluptates possimus
        omnis nulla, doloribus est cum ut eius dolor esse amet repellendus
        maiores fugiat.
      </p>
    </main>
  )
}
