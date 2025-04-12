import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CPBrnih7.mjs';
import { $ as $$Layout } from '../chunks/Layout_B6QTDASA.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col justify-center items-center gap-4 mt-[100px] mb-[50px] md:h-[800px]"> <h1>404</h1> <p>La página que estás buscando no existe</p> </main> ` })}`;
}, "C:/Users/omar_/Documents/GitHub/Astro-Proyectos/servicios-psicologia/src/pages/404.astro", void 0);

const $$file = "C:/Users/omar_/Documents/GitHub/Astro-Proyectos/servicios-psicologia/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
