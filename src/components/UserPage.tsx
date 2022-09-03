import { useState } from "react";
import { Team } from "./Team/Team";

type Tab = {
  name: string;
  label: string;
  active: boolean;
};

export function UserPage() {
  const [tabs, setTabs] = useState<Tab[]>([
    { name: "team", label: "Team", active: true },
    { name: "forms", label: "Forms", active: false },
    { name: "responses", label: "Responses", active: false },
  ]);

  function activateTab(tabName: string) {
    setTabs((tabs) =>
      tabs.map((tab) => {
        if (tab.name === tabName) return { ...tab, active: true };
        else return { ...tab, active: false };
      })
    );
  }

  function getActiveTab(): Tab | undefined {
    return tabs.find((tab) => tab.active);
  }

  return (
    <div className="p-4">
      <div className="card w-full bg-base-100 shadow-xl mb-6">
        <div className="card-body p-4">
          <div className="flex items-center justify-center">
            <div className="tabs">
              {tabs.map((tab, index) => (
                <a
                  className={`tab tab-bordered ${
                    tab.active ? "tab-active" : ""
                  }`}
                  key={index}
                  onClick={(e) => activateTab(tab.name)}
                >
                  {tab.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {getActiveTab()?.name === "team" && <Team />}
      {getActiveTab()?.name === "forms" && <div>Forms</div>}
      {getActiveTab()?.name === "responses" && <div>Responses</div>}
    </div>
  );
}
