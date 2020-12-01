import { Input } from "antd";
import styled from "@emotion/styled";
import { useQuery } from "components/query/context";

const StyledHeader = styled.header({
  color: "red",
});

export default function Header() {
  const { query, setQuery } = useQuery();

  function updateUser() {
    // alert("works");
  }

  return (
    <StyledHeader>
      <Input onPressEnter={(e) => setQuery(e.target.value)} />
    </StyledHeader>
  );
}
