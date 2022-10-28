export async function request (url, method) {
  const response = await fetch(url, {
    method
  });
  
  const result = await response.json();

  return result;
}