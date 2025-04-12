import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderTransition } from '../../chunks/astro/server_CPBrnih7.mjs';
import { $ as $$Layout } from '../../chunks/Layout_Z_oQdHjq.mjs';
import { s as servicios } from '../../chunks/servicios_B8panDt-.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const servicio = servicios.serviciosPsicologia.find(
    (servicio2) => servicio2.id === id
  );
  if (!servicio) return Astro2.redirect("/404");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="flex flex-col items-center justify-center gap-4 mt-[80px] md:mt-[130px] mb-[50px] p-2"> <a href="/#servicios"> <img class="aspect-9/16 size-150 md:size-200 rounded-lg object-scale-down md:object-cover rounded-lg"${addAttribute(`card-image-${id}`, "data-id")} fetchpriority="low"${addAttribute(servicio?.img, "src")}${addAttribute(`imagen de servicio de ${servicio?.nombre}`, "alt")} decoding="async"${addAttribute(renderTransition($$result2, "67k5437f", "", `image-${id}`), "data-astro-transition-scope")}> </a> <h1>${servicio?.nombre}</h1> <p class="text-center md:text-right">${servicio?.descripcion}</p> <p>Duración: ${servicio?.duracion}</p> <p>$${servicio?.precio} USD</p> <div class="flex flex-row gap-2"> ${servicio?.modalidad.map((modalidad) => renderTemplate`<p class="badges rounded-lg border-2 border-black bg-[#0DC143] px-3"> ${modalidad} </p>`)} </div> <div class="flex flex-col md:flex-row gap-2"> ${servicio?.areasEnfoque.map((area) => renderTemplate`<span class="flex justify-center border-2 rounded-full px-2 py-1 text-[12px] md:text-xl"> ${area} </span>`)} </div> <a href="/#servicios">Regresar a servicios ←</a> </article> ` })}`;
}, "C:/Users/omar_/Documents/GitHub/Astro-Proyectos/servicios-psicologia/src/pages/servicespsy/[id].astro", "self");

const $$file = "C:/Users/omar_/Documents/GitHub/Astro-Proyectos/servicios-psicologia/src/pages/servicespsy/[id].astro";
const $$url = "/servicespsy/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
