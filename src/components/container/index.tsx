import { ReactNode } from "react";
import { Main, Card } from "./styled";

interface Props {
  children: ReactNode;
  center?: string;
}

const Container = ({ children, center }: Props) => {
  return (
    <Main>
      <Card className={center ? "centered" : ""}>{children}</Card>
    </Main>
  );
};

export default Container;
