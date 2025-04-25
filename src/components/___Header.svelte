<script>
  let menuAbierto = false;

  export let infoContacto = {
    instagram: "",
    linkedin: "",
    email: ""
  };

  const { instagram, linkedin, email } = infoContacto;
</script>

<header class="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
  <div class="container mx-auto px-6 py-1 flex justify-between items-center">

    <!-- Logo -->
    <a href="/" class="flex items-center">
      <img src="/images/logo.png" alt="Erika Obrist - Arquitecta" class="h-12 w-auto" />
    </a>

    <!-- Botón hamburguesa (móvil) -->
    <button
        class="md:hidden"
        on:click={() => {
            menuAbierto = !menuAbierto
            console.log("Estado del menú:", menuAbierto);
        }}
        aria-label="Abrir menú"
        aria-expanded={menuAbierto}
        aria-controls="menu-movil"
        >
      <svg class="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" stroke-width="2"
        viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>




    <!-- Menú navegación desktop -->
    <nav class="hidden md:flex justify-center items-center gap-6 text-sm md:text-base">
      <a href="/">Inicio</a>
      <a href="/#proyectos">Proyectos</a>
      <a href="/#acerca-contacto">Contacto</a>
    </nav>

    <!-- Íconos sociales (visible siempre que haya espacio) -->
    <div class="hidden md:flex items-center gap-4">
      {#if instagram}
        <a href={instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer" class="hover:scale-110 transition-transform">
            <svg class="w-6 h-6" style="color: var(--color-primary)" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
        </a>
      {/if}
      {#if linkedin}
        <a href={linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" class="hover:scale-110 transition-transform">
            <svg class="w-6 h-6" style="color: var(--color-primary)" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
        </a>
      {/if}
      {#if email}
        <a href={`mailto:${email}`} aria-label="Email" target="_blank" rel="noopener noreferrer" class="hover:scale-110 transition-transform">
            <svg class="w-6 h-6" style="color: var(--color-primary)" viewBox="0 0 24 24" fill="currentColor">
            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
            </svg>  
        </a>
      {/if}
    </div>
  </div>

  <!-- Menú móvil desplegable -->
  {#if menuAbierto}
    <div id="menu-movil" class="menu-movil md:hidden bg-white w-full shadow-md px-6 py-4 flex flex-col gap-4 text-sm border-t">
      <a href="/" on:click={() => menuAbierto = false}>Inicio</a>
      <a href="/#proyectos" on:click={() => menuAbierto = false}>Proyectos</a>
      <a href="/#acerca-contacto" on:click={() => menuAbierto = false}>Contacto</a>

      <!-- Íconos sociales móviles -->
      <div class="flex justify-center gap-4 pt-2 border-t mt-2">
        {#if instagram}
          <a href={instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer" class="hover:scale-110 transition-transform">
            <svg class="w-6 h-6" style="color: var(--color-primary)" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
        {/if}
        {#if linkedin}
          <a href={linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" class="hover:scale-110 transition-transform">
            <svg class="w-6 h-6" style="color: var(--color-primary)" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        {/if}
        {#if email}
          <a href={`mailto:${email}`} aria-label="Email" target="_blank" rel="noopener noreferrer" class="hover:scale-110 transition-transform">
            <svg class="w-6 h-6" style="color: var(--color-primary)" viewBox="0 0 24 24" fill="currentColor">
            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
            </svg>  
          </a>
        {/if}
      </div>
    </div>
  {/if}
</header>

