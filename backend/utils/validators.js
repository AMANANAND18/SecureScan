export const isValidURL = (url) => {
  const pattern = new RegExp("^(https?:\/\/)?" +
    "((([a-zA-Z\d]([a-zA-Z\d-]*[a-zA-Z\d])*)\.)+[a-zA-Z]{2,}|" +
    "((\d{1,3}\.){3}\d{1,3}))" +
    "(\:\d+)?(\/[-a-zA-Z\d%_.~+]*)*" +
    "(\?[;&a-zA-Z\d%_.~+=-]*)?" +
    "(\#[-a-zA-Z\d_]*)?$", 'i');
  return !!pattern.test(url);
};