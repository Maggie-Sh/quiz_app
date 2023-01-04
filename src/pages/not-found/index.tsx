import { Container, ButtonLink } from "../../shared/styled";
import { Text } from "./styled";

const NotFound = () => {
  return (
    <Container>
      <Text>Page is not found...</Text>
      <ButtonLink to="/" center="true">
        back home
      </ButtonLink>
    </Container>
  );
};

export default NotFound;
