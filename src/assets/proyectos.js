export function initPaginador(proyectos, proyectosPorPagina) {
    const totalPaginas = Math.ceil(proyectos.length / proyectosPorPagina);
    const paginaActual = new URLSearchParams(window.location.search).get('pagina') || 1;
  
    const proyectosPag = proyectos.slice(
      (paginaActual - 1) * proyectosPorPagina, 
      paginaActual * proyectosPorPagina
    );
  
    const proyectosContainer = document.getElementById('proyectos-container');
    proyectosContainer.innerHTML = ''; // Limpia el contenedor
  
    proyectosPag.forEach((proyecto) => {
      const proyectoElement = document.createElement('a');
      proyectoElement.href = `/proyectos/${proyecto.slug}`;
      proyectoElement.classList.add(
        'group', 'block', 'overflow-hidden', 'rounded-lg', 'shadow-md', 'hover:shadow-xl', 'transition-all', 'duration-300'
      );
  
      proyectoElement.innerHTML = `
        <div class="relative overflow-hidden h-64">
          <img src="${proyecto.imagenes[0]}" alt="${proyecto.titulo}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
          <div class="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
        </div>
        <div class="p-3 bg-white">
          <h3 class="text-lg font-semibold" style="color: var(--color-primary)">
            ${proyecto.titulo}
          </h3>
          <p class="text-gray-600 line-clamp-2 tracking-tighter text-sm">${proyecto.descripcion}</p>
          <span class="inline-block mt-3 px-3 py-1 text-sm rounded-full" style="background-color: var(--color-beige)">
            ${proyecto.categorias.split(',')[0].trim()}
          </span>
        </div>
      `;
      proyectosContainer.appendChild(proyectoElement);
    });
  }
  