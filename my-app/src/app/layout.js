import "./globals.css";
import Header from "../components/Header";
import "react-toastify/dist/ReactToastify.css";
import ToastProvider from "@/components/ToastProvider";
import { AuthProvider } from "@/AuthContext";
export const metadata = {
  title: "Tail Admin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ToastProvider />
          <div className="flex">
            {/* Sticky Sidebar */}
            <div className="flex-[0.2] h-screen  sticky top-0 overflow-y-auto">
              <Header />
            </div>

            <div className="flex-[0.8] bg-[#F1F0F4] h-screen overflow-y-auto">
              {children}
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
