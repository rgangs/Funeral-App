import React from "react";
import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";

import Layout from "@/components/Layout";
import WelcomePage from "@/pages/Welcome";
import FuneralSetupPage from "@/pages/FuneralSetup";
import DashboardPage from "@/pages/Dashboard";
import InvitationsPage from "@/pages/Invitations";
import GuestListPage from "@/pages/GuestList";
import FuneralPage from "@/pages/Funeral";
import WakePage from "@/pages/Wake";
import MemorialPage from "@/pages/Memorial";
import InnerChatPage from "@/pages/InnerChat";
import PhotoGalleryPage from "@/pages/PhotoGallery";
import BudgetPage from "@/pages/Budget";
import DocumentationPage from "@/pages/Documentation";
import { PAGE_ROUTES } from "@/utils";

const pathToPageName = Object.entries(PAGE_ROUTES).reduce((acc, [pageName, path]) => {
  acc[path] = pageName;
  return acc;
}, {});

const LayoutRoute = () => {
  const location = useLocation();
  const currentPageName = pathToPageName[location.pathname] ?? "";

  return (
    <Layout currentPageName={currentPageName}>
      <Outlet />
    </Layout>
  );
};

const App = () => (
  <Routes>
    <Route path={PAGE_ROUTES.Welcome} element={<WelcomePage />} />
    <Route element={<LayoutRoute />}>
      <Route path={PAGE_ROUTES.FuneralSetup} element={<FuneralSetupPage />} />
      <Route path={PAGE_ROUTES.Dashboard} element={<DashboardPage />} />
      <Route path={PAGE_ROUTES.Invitations} element={<InvitationsPage />} />
      <Route path={PAGE_ROUTES.GuestList} element={<GuestListPage />} />
      <Route path={PAGE_ROUTES.Funeral} element={<FuneralPage />} />
      <Route path={PAGE_ROUTES.Wake} element={<WakePage />} />
      <Route path={PAGE_ROUTES.Memorial} element={<MemorialPage />} />
      <Route path={PAGE_ROUTES.InnerChat} element={<InnerChatPage />} />
      <Route path={PAGE_ROUTES.PhotoGallery} element={<PhotoGalleryPage />} />
      <Route path={PAGE_ROUTES.Budget} element={<BudgetPage />} />
      <Route path={PAGE_ROUTES.Documentation} element={<DocumentationPage />} />
    </Route>
    <Route path="*" element={<Navigate to={PAGE_ROUTES.Welcome} replace />} />
  </Routes>
);

export default App;
