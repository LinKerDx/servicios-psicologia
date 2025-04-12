import { c as createComponent, m as maybeRenderHead, a as renderTemplate, b as createAstro, d as addAttribute, e as renderTransition, r as renderComponent } from '../chunks/astro/server_CPBrnih7.mjs';
import 'clsx';
import { s as servicios } from '../chunks/servicios_B8panDt-.mjs';
/* empty css                                 */
import { $ as $$Layout } from '../chunks/Layout_B6QTDASA.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main class="flex flex-col justify-center md:grid md:grid-cols-5 md:gap-1 relative mt-[98px] md:mt-[130px] md:mb-[150px] md:h-[800px]"> <img src="/Elizabeth anime.webp" alt="Eliza-chan" class="Eli-chan place-self-center size:100 md:size-200 md:col-span-2 lg:col-span-1 object-scale-down md:object-none md:object-top"> <img src="/psico.webp" alt="imagen de una persona leyendo un libro" class="h-[800px] w-[1200px] object-cover hidden md:block md:inline-flex col-span-3"> <img src="/cerebro.webp" alt="imagen de interpretación del pensamiento en forma de cerebro" class="size:100 md:size-200 object-none object-left hidden md:hidden lg:inline-flex col-span-1"> <div class="md:absolute place-self-center md:-bottom-10 text-sm md:text-3xl bg-[#ffffff] h-[63px] w-[200px] md:w-[700px] flex flex-rows justify-center items-center"> <p class="text-center font-bold">
Entendiendo tus emociones guiando tu camino.
</p> </div> </main>`;
}, "C:/Users/omar_/Documents/GitHub/Astro-Proyectos/servicios-psicologia/src/components/Hero.astro", void 0);

const $$Astro = createAstro();
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { id, nombre, img, modalidad, duracion, precio } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/ServicesPsy/${id}`, "href")}${addAttribute(id, "data-id")}> <article class="Card-service flex flex-cols gap-1 md:gap-3 rounded-lg overflow-hidden border w-[270px] h-[216px] md:w-[380px] md:min-h-[305px] hover:bg-[#a0d8d7] hover:text-black"> <img${addAttribute(`card-image-${id}`, "data-id")} fetchpriority="low"${addAttribute(img, "src")}${addAttribute(`imagen del servicio de ${nombre}`, "alt")} class="w-[150px] md:w-[200px] object-cover" decoding="async"${addAttribute(renderTransition($$result, "kypyzgfb", "", `image-${id}`), "data-astro-transition-scope")}> <div class="grid content-between gap-2 md:gap-4 text-[10px] md:text-sm text-center p-1"> <div class="flex flex-col gap-2 md:gap-4 text-[10px] md:text-sm text-center p-1"> <h2 class="text-[14px] md:text-2xl font-bold">${nombre}</h2> <p>Duración: ${duracion}</p> <p>Costo: $${precio} USD</p> <div class="flex flex-col md:flex-rows gap-1"> ${modalidad.map((modalidad2) => renderTemplate`<p class="badges rounded-lg border-2 border-black bg-[#0DC143]"> ${modalidad2} </p>`)} </div> </div> <button>Presiona aquí </button> </div> </article> </a>`;
}, "C:/Users/omar_/Documents/GitHub/Astro-Proyectos/servicios-psicologia/src/components/ServiceCard.astro", "self");

const $$Servicios = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<aside id="servicios" class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center p-4 bg-gray-100 rounded-lg shadow-md"> <h2 class="text-3xl font-bold text-center mb-4 md:col-span-2 lg:col-span-3">
Servicios de Psicología
</h2> ${servicios.serviciosPsicologia.map(
    ({ id, nombre, img, modalidad, duracion, precio }) => renderTemplate`${renderComponent($$result, "ServiceCard", $$ServiceCard, { "id": id, "nombre": nombre, "img": img, "modalidad": modalidad, "duracion": duracion, "precio": precio })}`
  )} </aside>`;
}, "C:/Users/omar_/Documents/GitHub/Astro-Proyectos/servicios-psicologia/src/components/Servicios.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Servicios", $$Servicios, {})} ` })}`;
}, "C:/Users/omar_/Documents/GitHub/Astro-Proyectos/servicios-psicologia/src/pages/index.astro", void 0);

const $$file = "C:/Users/omar_/Documents/GitHub/Astro-Proyectos/servicios-psicologia/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
