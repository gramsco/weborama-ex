import { createContext, useState, useContext } from "react";

const QueryContext = createContext();

export default function ContextProvider({ children }) {
  const [query, setQuery] = useState("");

  const clear = () => setQuery("");

  return (
    <QueryContext.Provider value={{ query, setQuery, clear }}>
      {children}
    </QueryContext.Provider>
  );
}

export function useQuery() {
  let { query, clear, setQuery } = useContext(QueryContext);

  return { query, clear, setQuery };
}
