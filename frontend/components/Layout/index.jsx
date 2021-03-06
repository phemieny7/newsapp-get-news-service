import React from "react";
import { useRouter } from "next/router";

import Header from "../Header";
import PageHeader from "../PageHeader";
import Footer from "../Footer";
import Loader from "../Loader";
import SidebarNav from "../SidebarNav";

export default function Layout({ children, title }) {
  const [toggle, setToggle] = React.useState(false);
  const router = useRouter();
  const Navigation = ({ title }) => {
    return (
      <>
      {
        router.pathname == "/" ? (
          <>
             <Header/> 
        {/* Header ends here */}
        <div className="sidenav-black-overlay"></div>
        <SidebarNav />
          </>
        ) : ( <>
        <PageHeader title={title} />
        </>)
      }
       
      </>
    );
  };
  return (
    <>
      {/* <Loader /> */}
      <Navigation title={title} />

      <div className="page-content-wrapper">{children}</div>
      <Footer />
    </>
  );
}
