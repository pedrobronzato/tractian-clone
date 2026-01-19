export default function imgixLoader({ src }) {
  if (
    src.startsWith('http://') ||
    src.startsWith('https://')
  ) {
    return src;
  }
  const url = new URL(`https://imgix.tractian.com${src}`);

  return url.href;
}
