import React from "react";
import NavigationMobile from "../components/NavigationMobile";


function Layout({ children }) {
  return (
    <div>
      <main className="w-full h-screen bg-gray-50"  >{children}</main>
      <div > <NavigationMobile/> </div>
    </div>
  );
}

export default Layout;
