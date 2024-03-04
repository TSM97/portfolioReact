export default function scrollTo(elementRef: unknown) {
  window.scrollTo({
    top: elementRef.current.offsetTop,
    behavior: 'smooth',
  });
}
