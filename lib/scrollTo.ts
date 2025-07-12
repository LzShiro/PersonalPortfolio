export const scrollToId = (
  id: string,
  hasNavigated: boolean,
  setHasNavigated: () => void
) => {
  const el = document.getElementById(id);
  if (!el) return;

  if (!hasNavigated) {
    setHasNavigated();                 // Marca que ya navegó
    el.scrollIntoView({ behavior: "auto" });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
};
