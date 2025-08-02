export async function tryLoadModule(path: string) {
  try {
    const mdModule = await import(/* @vite-ignore */ `../${path}`);
    return mdModule.default;
  } catch (e: unknown) {
    console.warn(`⚠️ Échec du chargement de ${path}`);
    return null;
  }
}