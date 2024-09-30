export default function scrollTo(elementId: string) {
  window.scrollTo({
    top: document?.getElementById(elementId)?.offsetTop,
    behavior: "smooth",
  });
}
