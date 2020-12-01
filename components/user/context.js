// import { useContext, createContext } from "react";
// import { getUserData } from "services";
// import useSWR from "swr";

// const UserContext = createContext("");

// export default function UserProvider({ children }) {

//   const [id, setID] = useState(null)

//   const fetcher = () => getUserData().then((res) => res.data);

//   const { data } = useSWR();

//   useEffect(() => {

//   }, [id])

//   return <UserContext.Provider>{children}</UserContext.Provider>;
// }
