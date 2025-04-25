// src/types.ts

// Interface unificada para slides (elimina SliderItem y Slide duplicados)
export interface Slide {
  id?: string; // Opcional porque no todos los slides necesitan ID
  imagen: string;
  titulo: string;
  bajada: string;
}

export interface Proyecto {
  id: string;
  slug: string;
  titulo: string;
  categorias: string;
  descripcion: string;
  imagenes: string[];
}

// Props para el componente Slider
export interface SliderProps {
  slides: Slide[];
}