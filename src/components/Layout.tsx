import type { PropsWithChildren } from "react";

type ContentContainerProps = PropsWithChildren<{}>;

export function Layout({ children }: ContentContainerProps) {
  return (
    <div className="content-container">
      <div className="content">{children}</div>
    </div>
  );
}
