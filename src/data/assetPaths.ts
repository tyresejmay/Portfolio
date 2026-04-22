const basePath = import.meta.env.BASE_URL;

export function publicAssetPath(path: string) {
  return `${basePath}${path.replace(/^\//, '')}`;
}

