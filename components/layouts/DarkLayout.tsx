import { PageProps } from "@/interfaces/global.interface";
import { FC } from "react";

const DarkLayout:FC<PageProps> = ({children}) => {
  return (
    <div
      style={{
        background: "rgba(0,0,0,0.3)",
        borderRadius: 3,
        padding: 10,
      }}
    >
      <h3>Dark</h3>
      {children}
    </div>
  );
};


export default DarkLayout