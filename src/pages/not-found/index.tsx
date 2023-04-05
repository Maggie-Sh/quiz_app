import { Link } from "react-router-dom";
import { FilledButton } from "../../shared/styled";
import { Text, Main } from "./styled";

const NotFound = () => {
  return (
    <Main>
      <Text>Page is not found...</Text>
      <FilledButton as={Link} to="/" className="centered">
        back home
      </FilledButton>
    </Main>
  );
};

export default NotFound;
