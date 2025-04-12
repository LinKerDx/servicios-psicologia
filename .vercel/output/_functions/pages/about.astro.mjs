import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CPBrnih7.mjs';
import { $ as $$Layout } from '../chunks/Layout_Z_oQdHjq.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-cols justify-center gap-4 mt-[100px] md:mt-[130px] mb-[50px] md:h-[800px]"> <aside class="bg-[#BBD6E3] relative md:flex md:flex-rows gap-4 alight-center rounded-lg text-xl w-[400px]"> <div class="max-w-[300px] md:absolute rounded-lg md:-left-50 pl-[20px] gap-6 flex flex-col justify-center md:h-full bg-[#BBD6E3]"> <h1>Mi historia</h1> <p>
Eliza-chan es una persona que se ha convertido en una de las personas
          más famosas en el mundo. Es conocida por su habilidad de interpretar
          el pensamiento de otras personas y su capacidad para resolver
          problemas complejos.
</p> <p>
Es una persona muy inteligente y creativa, y ha sido representada en
          numerosos medios, incluyendo películas, televisión, y música.
</p> <p>
Eliza-chan es conocida por su habilidad de interpretar el pensamiento
          de otras personas y su capacidad para resolver problemas complejos.
</p> </div> <img src="/Elizabeth anime.webp" alt="Eliza-chan" class="Eli-chan-2 size-150 object-scale-down self-center rounded-full md:absolute md:-right-50 "> </aside> </main> ` })}`;
}, "C:/Users/omar_/Documents/GitHub/Astro-Proyectos/servicios-psicologia/src/pages/about.astro", void 0);

const $$file = "C:/Users/omar_/Documents/GitHub/Astro-Proyectos/servicios-psicologia/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
