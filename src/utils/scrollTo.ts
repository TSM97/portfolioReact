import { lenisInstance } from "../Context/LenisScrollProvider";

export default function scrollTo(elementId: string) {
  const top = document.getElementById(elementId)?.offsetTop ?? 0;
  // Go through Lenis so it doesn't fight a native smooth scroll
  if (lenisInstance) {
    lenisInstance.scrollTo(top);
  } else {
    window.scrollTo({ top, behavior: "smooth" });
  }
}
