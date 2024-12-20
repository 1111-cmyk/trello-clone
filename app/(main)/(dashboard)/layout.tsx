import { ClerkProvider } from "@clerk/nextjs";
import { Navbar } from "./components/navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />

      {children}
    </div>
  );
};

export default DashboardLayout;
