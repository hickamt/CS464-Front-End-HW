import { createContext, useContext, useEffect, useState } from "react";
import gotAPI from "../api/gotAPI";
import { cleanData } from "../modules/validateAndClean";
// See Notes for DataProvider Considerations Below.

// Create a context
const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  // create a try catch block for useEffect data fetch
  useEffect(() => {
    try {
      console.log("DataProvider useEffect()");
      const getData = async () => {
        const response = await gotAPI();
        setData(cleanData(response));
      };
      getData();
    } catch (error) {
      console.error(error.message, error);
    }
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

// Create a custom hook to use the context
export const useData = () => {
  return useContext(DataContext);
};

/**
 * DataProvider Considerations:
 * Size of Data: large datasets can slow down the application and consome a large portion of memory.
 *  - Consider using pagination or infinite scrolling to limit the amount of data displayed at once.
 *  - Consider using a state management library like Redux to store data in a global state.
 *  - Consider using a database to store data.
 * Number of API Calls:
 *  - Consider using a state management library like Redux to store data in a global state.
 *  - Consider using a database to store data.
 *  - Consider using a caching library like SWR to cache data.
 *  - Consider using a library like Axios to make API calls.
 *  - Consider using a library like React Query to make API calls.
 * Loading State:
 *  - Consider using a loading state to display a loading animation while the data is being fetched.
 * Updating Data:
 * - If the data can change while the user is viewing the app (live data like stock prices),
 *    you will need a strategy for updating the data.
 * - One method is polling the API at regular intervals to check for changes.
 * - Another method is is using websockets or Server-Sent Events for realtime updates
 * Data Structures:
 * - Consider the method you will use to structure the data in your
 *    applications state. This will depend on the nature of the data
 *    and how it's used in your app.
 * - For complex state management, consider using a state management library like Redux or MobX.
 */
