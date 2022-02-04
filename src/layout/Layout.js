import React from "react";
import NavigationMobile from "../components/NavigationMobile";


function Layout({ children }) {
  return (
    <div className="h-screen">
      <main className="w-screen h-full bg-gray-50 "  >{children}</main>
      <div  > <NavigationMobile/> </div>
    </div>
  );
}

export default Layout;
