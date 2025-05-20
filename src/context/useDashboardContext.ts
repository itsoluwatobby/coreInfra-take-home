import { Context, useContext } from "react";
import { DashboardContext } from "./DashboardContext";

export default function useDashboardContext() {

  return useContext(DashboardContext as Context<DashboardContextType>)
}