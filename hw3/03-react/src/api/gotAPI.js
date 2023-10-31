
/**
 * (GET Request): Fetches data from the Game of Thrones API
 * @param url the url path required to fetch the data
 * @returns the response data as a .json() object
 */
const fetchData = async function fetchCharactersAPI() {
  const url = "https://thronesapi.com/api/v2/Characters";
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    throw new Error("Error fetching API data");
  }
};

 
export default fetchData;