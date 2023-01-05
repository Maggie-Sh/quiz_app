import { ButtonLink } from "../../shared/styled";
import { Text, Main } from "./styled";

const NotFound = () => {
  return (
    <Main>
      <Text>Page is not found...</Text>
      <ButtonLink to="/" center="true">
        back home
      </ButtonLink>
    </Main>
  );
};

export default NotFound;
