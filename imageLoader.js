export default function imgixLoader({ src }) {
  const url = new URL(`https://imgix.tractian.com${src}`);

  return url.href;
}
