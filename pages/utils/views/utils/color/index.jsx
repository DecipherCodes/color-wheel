import { useStore } from "./utils";

export function useColor({
  position,
  index,
  background,
  isFocused,
  opacity,
  name,
}) {
  const { className, style } = useStore({
    position,
    index,
    background,
    isFocused,
    name,
  });

  return <main className={className} style={{ ...style, opacity }} />;
}
