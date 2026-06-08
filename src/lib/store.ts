export const WHATSAPP_NUMBER = "573006764605"
export const BRAND = "LUMEN"

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export type Product = {
  id: string
  name: string
  price: string
  description: string
  image: string
  tag?: string
}

export const products: Product[] = [
  {
    id: "camiseta-oversize-negra",
    name: "Camiseta Negra",
    price: "$35.000",
    description: "Algodón premium 100%, corte holgado.",
    image: "/product-1.png",
    tag: "Nuevo",
  },
  {
    id: "hoodie-beige",
    name: "Hoodie Beige Esencial",
    price: "$45.000",
    description: "Felpa suave, capucha forrada.",
    image: "/product-2.png",
  },
  {
    id: "cargo-negro",
    name: "Pantalón Cargo Negro",
    price: "$130.000",
    description: "Wide-leg con bolsillos utilitarios.",
    image: "/product-3.png",
    tag: "Top ventas",
  },
  {
    id: "abrigo-crema",
    name: "Abrigo Crema",
    price: "$89.000",
    description: "Lana mezclada, silueta limpia.",
    image: "/product-4.png",
  },
  {
    id: "bomber-negro",
    name: "Bomber Negro",
    price: "$54.000",
    description: "Acabado mate, cierre completo.",
    image: "/product-5.png",
  },
  {
    id: "sweater-gris",
    name: "Sweater Tejido Gris",
    price: "$34.000",
    description: "Tejido acanalado, cálido y ligero.",
    image: "/product-6.png",
    tag: "Nuevo",
  },
]