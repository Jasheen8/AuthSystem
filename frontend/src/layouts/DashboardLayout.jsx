import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <div
      style={{
        display:"flex",
        minHeight:"100vh"
      }}
    >
      <Sidebar />

      <div
        style={{
          flex:1,
          padding:"30px"
        }}
      >
         <Navbar />
        {children}
      </div>
    </div>
  );
}