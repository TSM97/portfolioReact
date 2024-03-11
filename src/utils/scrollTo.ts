export default function scrollTo(elementId: string) {
  console.log("patisa koympi");
  window.scrollTo({
    top: document?.getElementById(elementId)?.offsetTop,
    behavior: "smooth",
  });
}
