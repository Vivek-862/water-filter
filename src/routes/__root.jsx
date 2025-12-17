// import { createRootRoute, Outlet } from "@tanstack/react-router";
// import Header from "../component/Header.jsx";
// import Footer from "../component/Footer.jsx";

// export const Route = createRootRoute({
//   component: () => (
//     <div className="h-screen flex flex-col overflow-hidden">
      
//       {/* Fixed Header */}
//       <div className="fixed top-0 left-0 right-0 z-50">
//         <Header />
//       </div>

//       {/* Scrollable Content */}
//       <main className="flex-1 mt-24 mb-20 overflow-y-auto">
//         <Outlet />
//       </main>

//       {/* Fixed Footer */}
//       <div className="fixed bottom-0 left-0 right-0 z-50">
//         <Footer />
//       </div>

//     </div>
//   ),
// });


// import { createRootRoute, Outlet } from "@tanstack/react-router";
// import Header from '../component/Header.jsx'
// import Footer from "../component/Footer.jsx";

// export const Route = createRootRoute({
//   component: () => (
//     <>
//       <Header/>
//       <div className="pt-40">
//         <Outlet />
//       </div>
//       <Footer/>
//     </>
//   ),
// });
import { createRootRoute, Outlet } from "@tanstack/react-router";
import Header from "../component/Header.jsx";
import Footer from "../component/Footer.jsx";

export const Route = createRootRoute({
  component: () => (
    <div className="h-screen flex flex-col">
      
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      {/* Scrollable Content + Footer */}
      <main className="flex-1 mt-24 overflow-y-auto">
        <Outlet />

        {/* Footer sticks to bottom of content */}
        <Footer />
      </main>

    </div>
  ),
});
