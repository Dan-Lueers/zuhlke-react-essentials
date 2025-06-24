import type { PropsWithChildren } from "react";
import { MainMenu } from "./MainMenu";

type ContentContainerProps = PropsWithChildren<{}>;

export function Layout({ children }: ContentContainerProps) {
  return (
    <>
      <MainMenu />
      <div className="content-container">
        <div className="content">{children}</div>
      </div>
    </>
  );
}
