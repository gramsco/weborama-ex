import { notification } from "antd";
import { useQuery } from "components/query/context";
import { useState, useEffect } from "react";
import { getUserData } from "services";
import Dashboard from "components/user/dashboard";

export default function Home() {
  const { query } = useQuery();

  const [loading, setLoading] = useState(false);

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    getUserData(query)
      .then((res) => {
        notification.success({ message: "User found!" });
        setLoading(false);
        setUserData(res.data);
      })
      .catch(() => {
        notification.error({ message: "An error occured" });
        setLoading(false);
      });
  }, [query]);

  return (
    <div>
      <h1>GitHub Dashboard</h1>
      <div style={{ display: "grid", placeItems: "center" }}>
        <p>Use the above searchbar to query for github users.</p>
      </div>
      {!!userData && <Dashboard {...userData} />}
    </div>
  );
}
