export default function getInfoField(data, path, defaultValue = "_") {
  const keys = path.split(".");
  let result = data;

  for (let key of keys) {
    result = result ? result[key] : null;
  }

  return result !== null && result !== undefined ? result : defaultValue;
}