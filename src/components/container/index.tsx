import { ReactNode } from "react";
import { Main, Card } from "./styled";

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <Main>
      <Card>{children}</Card>
    </Main>
  );
};

export default Container;
