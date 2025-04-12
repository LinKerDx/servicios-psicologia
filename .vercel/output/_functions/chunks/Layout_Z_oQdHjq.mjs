import { c as createComponent, m as maybeRenderHead, a as renderTemplate, b as createAstro, s as spreadAttributes, r as renderComponent, d as addAttribute, g as renderScript, h as renderHead, i as renderSlot } from './astro/server_CPBrnih7.mjs';
/* empty css                         */
import 'clsx';

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form action="" class="flex flex-col md:grid md:grid-cols-2 p-5 md:p-13 gap-10 md:h-[300px] w-full bg-[#030712] text-white place-items-center" id="contacto"> <div class="md:max-w-[500px] flex flex-col gap-4"> <div class="flex flex-col"> <label for="nombre">Nombre</label> <input type="text" placeholder="Juan, Teresa, Ana...."> </div> </div> <div class="md:max-w-[500px] flex flex-col gap-4 justify-center"> <div class="flex flex-col"> <label for="nombre">Apellido</label> <input type="text" placeholder="Sanchez, Rodriguez..."> </div> </div> <div class="md:max-w-[500px] flex flex-col gap-4 justify-center"> <div class="flex flex-col"> <label for="nombre">Correo</label> <input type="text" placeholder="ejemplo@ejemplo.com"> </div> </div> <div class="md:max-w-[500px] flex flex-col gap-4 justify-center"> <div class="flex flex-col"> <label for="nombre">Déjanos un mensaje...</label> <textarea name="textarea" rows="1" cols="21" placeholder="Me gustaría..."></textarea> </div> </div> <button type="submit" disabled class="col-span-2 cursor-pointer border-2 border-black bg-[#0DC143] text-white rounded-lg hover:bg-[#fffff] px-6 py-2">Enviar</button> </form>`;
}, "C:/Users/omar_/Documents/GitHub/Astro-Proyectos/servicios-psicologia/src/components/Contacto.astro", void 0);

const $$Astro$6 = createAstro();
const $$ToTop = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ToTop;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path><path d="M12 8l-4 4"></path><path d="M12 8v8"></path><path d="M16 12l-4 -4"></path></svg>`;
}, "C:/Users/omar_/Documents/GitHub/Astro-Proyectos/servicios-psicologia/src/components/Icons/ToTop.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="flex flex-rows place-content-around items-center h-[100px] bg-[#252529] text-white px-4"> <div class="flex flex-rows gap-4"> <p>Términos y Condiciones</p> <p>Política de Privacidad</p> </div> <p>© 2023 Mentes Sanas</p> <a href="#top" id="toTop" class="fixed right-2 bottom-25 bg-[gray] md:hidden border border-white rounded-full p-2 hover:bg-[#252529] transition">${renderComponent($$result, "ToTop", $$ToTop, { "class": "size-12" })}</a> </footer>`;
}, "C:/Users/omar_/Documents/GitHub/Astro-Proyectos/servicios-psicologia/src/components/Footer.astro", void 0);

const $$Astro$5 = createAstro();
const $$Facebook = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Facebook;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 36 36" fill="url(#a)" height="40" width="40"${spreadAttributes(Astro2.props)}><defs><linearGradient x1="50%" x2="50%" y1="97.078%" y2="0%" id="a"><stop offset="0%" stop-color="#0062E0"></stop><stop offset="100%" stop-color="#19AFFF"></stop></linearGradient></defs><path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path><path fill="#FFF" d="m25 23 .8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"></path></svg>`;
}, "C:/Users/omar_/Documents/GitHub/Astro-Proyectos/servicios-psicologia/src/components/Icons/Facebook.astro", void 0);

const $$Astro$4 = createAstro();
const $$Instagram = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Instagram;
  return renderTemplate`${maybeRenderHead()}<svg height="40" width="40" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"${spreadAttributes(Astro2.props)}><path fill="#fff" d="M128 23.064c34.177 0 38.225.13 51.722.745 12.48.57 19.258 2.655 23.769 4.408 5.974 2.322 10.238 5.096 14.717 9.575 4.48 4.479 7.253 8.743 9.575 14.717 1.753 4.511 3.838 11.289 4.408 23.768.615 13.498.745 17.546.745 51.723 0 34.178-.13 38.226-.745 51.723-.57 12.48-2.655 19.257-4.408 23.768-2.322 5.974-5.096 10.239-9.575 14.718-4.479 4.479-8.743 7.253-14.717 9.574-4.511 1.753-11.289 3.839-23.769 4.408-13.495.616-17.543.746-51.722.746-34.18 0-38.228-.13-51.723-.746-12.48-.57-19.257-2.655-23.768-4.408-5.974-2.321-10.239-5.095-14.718-9.574-4.479-4.48-7.253-8.744-9.574-14.718-1.753-4.51-3.839-11.288-4.408-23.768-.616-13.497-.746-17.545-.746-51.723 0-34.177.13-38.225.746-51.722.57-12.48 2.655-19.258 4.408-23.769 2.321-5.974 5.095-10.238 9.574-14.717 4.48-4.48 8.744-7.253 14.718-9.575 4.51-1.753 11.288-3.838 23.768-4.408 13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95-8.418 3.271-15.556 7.648-22.672 14.764C14.367 28.6 9.991 35.738 6.72 44.155 3.555 52.297 1.392 61.602.77 75.226.147 88.878 0 93.237 0 128c0 34.763.147 39.122.77 52.774.622 13.625 2.785 22.93 5.95 31.071 3.27 8.417 7.647 15.556 14.763 22.672 7.116 7.116 14.254 11.492 22.672 14.763 8.142 3.165 17.446 5.328 31.07 5.95 13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95 8.418-3.27 15.556-7.647 22.672-14.763 7.116-7.116 11.493-14.254 14.764-22.672 3.164-8.142 5.328-17.446 5.95-31.07.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07-3.271-8.418-7.648-15.556-14.764-22.672C227.4 14.368 220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0Zm0 62.27C91.698 62.27 62.27 91.7 62.27 128c0 36.302 29.428 65.73 65.73 65.73 36.301 0 65.73-29.428 65.73-65.73 0-36.301-29.429-65.73-65.73-65.73Zm0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667-19.103 42.667-42.667 42.667Zm83.686-110.994c0 8.484-6.876 15.36-15.36 15.36-8.483 0-15.36-6.876-15.36-15.36 0-8.483 6.877-15.36 15.36-15.36 8.484 0 15.36 6.877 15.36 15.36Z"></path></svg>`;
}, "C:/Users/omar_/Documents/GitHub/Astro-Proyectos/servicios-psicologia/src/components/Icons/Instagram.astro", void 0);

const $$Astro$3 = createAstro();
const $$Twitter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Twitter;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 256 209" height="40" width="40" preserveAspectRatio="xMidYMid"${spreadAttributes(Astro2.props)}><path d="M256 25.45c-9.42 4.177-19.542 7-30.166 8.27 10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45" fill="#55acee"></path></svg>`;
}, "C:/Users/omar_/Documents/GitHub/Astro-Proyectos/servicios-psicologia/src/components/Icons/Twitter.astro", void 0);

const $$Astro$2 = createAstro();
const $$Pinterest = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Pinterest;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="32" height="32" viewBox="0 0 256 256"> <path fill="#CB1F27" d="M0 128.002c0 52.414 31.518 97.442 76.619 117.239c-.36-8.938-.064-19.668 2.228-29.393c2.461-10.391 16.47-69.748 16.47-69.748s-4.089-8.173-4.089-20.252c0-18.969 10.994-33.136 24.686-33.136c11.643 0 17.268 8.745 17.268 19.217c0 11.704-7.465 29.211-11.304 45.426c-3.207 13.578 6.808 24.653 20.203 24.653c24.252 0 40.586-31.149 40.586-68.055c0-28.054-18.895-49.052-53.262-49.052c-38.828 0-63.017 28.956-63.017 61.3c0 11.152 3.288 19.016 8.438 25.106c2.368 2.797 2.697 3.922 1.84 7.134c-.614 2.355-2.024 8.025-2.608 10.272c-.852 3.242-3.479 4.401-6.409 3.204c-17.884-7.301-26.213-26.886-26.213-48.902c0-36.361 30.666-79.961 91.482-79.961c48.87 0 81.035 35.364 81.035 73.325c0 50.213-27.916 87.726-69.066 87.726c-13.819 0-26.818-7.47-31.271-15.955c0 0-7.431 29.492-9.005 35.187c-2.714 9.869-8.026 19.733-12.883 27.421a127.897 127.897 0 0 0 36.277 5.249c70.684 0 127.996-57.309 127.996-128.005C256.001 57.309 198.689 0 128.005 0C57.314 0 0 57.309 0 128.002"></path> </svg>`;
}, "C:/Users/omar_/Documents/GitHub/Astro-Proyectos/servicios-psicologia/src/components/Icons/Pinterest.astro", void 0);

const $$Astro$1 = createAstro();
const $$Men = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Men;
  return renderTemplate`${maybeRenderHead()}<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${spreadAttributes(Astro2.props)}><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 6h16"></path><path d="M7 12h13"></path><path d="M10 18h10"></path></svg>`;
}, "C:/Users/omar_/Documents/GitHub/Astro-Proyectos/servicios-psicologia/src/components/Icons/Men\xFA.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const nav = [
    { name: "Facebook", icon: $$Facebook, href: "/" },
    { name: "Instagram", icon: $$Instagram, href: "/" },
    { name: "Twitter", icon: $$Twitter, href: "/" },
    { name: "Pinterest", icon: $$Pinterest, href: "/" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 left-0 right-0 z-10"> <nav class="flex gap-3 justify-end items-center h-[50px] bg-[#252529] text-white px-4"> ${nav.map((btn) => renderTemplate`<a${addAttribute(btn.href, "href")}> ${renderComponent($$result, "btn.icon", btn.icon, { "class": "size-6 hover:scale-120 transition" })} </a>`)} </nav> <div class="flex flex-cols justify-between items-center px-2 md:px-4 h-[50px] md:h-[80px] backdrop-blur-sm"> <a href="/"><h1 class="font-bold text-md md:text-3xl">
Mentes Sanas <small>by Eli-chan</small> </h1></a> <button class="md:hidden cursor-pointer">${renderComponent($$result, "Men\xFA", $$Men, {})}</button> <div class="hidden md:inline-flex font-bold text-sm md:text-md flex flex-rows gap-2 md:gap-9"> <a href="/"><span class="hover:color-[#466C7F] transition-all">Inicio</span></a> <a href="/about"><span class="hover:color-[#466C7F] transition-all">Nosotros</span></a> <a href="/#contacto"><span class="hover:color-[#466C7F] transition-all">Contacto</span></a> </div> </div> </header>`;
}, "C:/Users/omar_/Documents/GitHub/Astro-Proyectos/servicios-psicologia/src/components/Header.astro", void 0);

const $$Astro = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/omar_/Documents/GitHub/Astro-Proyectos/servicios-psicologia/node_modules/.pnpm/astro@5.6.1_typescript@5.8.3/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/omar_/Documents/GitHub/Astro-Proyectos/servicios-psicologia/node_modules/.pnpm/astro@5.6.1_typescript@5.8.3/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>Mentes Sanas</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Contacto", $$Contacto, {})} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/omar_/Documents/GitHub/Astro-Proyectos/servicios-psicologia/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
