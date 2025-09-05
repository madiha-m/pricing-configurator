"use client";

// import { Layout } from "antd";

// const { Content: AntContent } = Layout;

// const AppContent = () => {
//   return <AntContent style={{ textAlign: "center" }}>nothing</AntContent>;
// };



const AppContent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <main>
      {children}
    </main>
  )
}
export default AppContent;