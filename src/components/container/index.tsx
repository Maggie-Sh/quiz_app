import { ReactNode } from "react";
import { Main, Card } from "./styled";

interface Props {
  children: ReactNode;
  sm?: string;
}

const Container = ({ children, sm }: Props) => {
  return (
    <Main>
      <Card sm={sm}>{children}</Card>
    </Main>
  );
};

export default Container;
