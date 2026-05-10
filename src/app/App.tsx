import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import MembersPage from "./pages/MembersPage";
import AttendancePage from "./pages/AttendancePage";
import EventsPage from "./pages/EventsPage";
import FinancePage from "./pages/FinancePage";
import SermonsPage from "./pages/SermonsPage";
import CellGroupsPage from "./pages/CellGroupsPage";
import AnnoucementsPage from "./pages/AnnoucementsPage";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-70">
          <Header />
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/members" element={<MembersPage />} />
            <Route path="/attendance" element={<AttendancePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/finance" element={<FinancePage />} />
            <Route path="/sermons" element={<SermonsPage />} />
            <Route path="/cell-groups" element={<CellGroupsPage />} />
            <Route path="/annoucements" element={<AnnoucementsPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}