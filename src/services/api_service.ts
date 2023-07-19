const API_URL = 'https://run.mocky.io/v3/6d0ad460-f600-47a7-b973-4a779ebbaeaf';
export async function fetchHoldings(): Promise<any[]> {
  try {
    const response = await fetch(API_URL);
    const jsonData = await response.json();
    return jsonData.data;
  } catch (e) {
    throw new Error('Failed to fetch holdings data');
  }
}
