import React from "react";
import "./tabOptions.css";

const tabs = [
  {
    id: 1,
    name: "Overview",
  },
  {
    id: 2,
    name: "Order Online",
  },
  {
    id: 3,
    name: "Photos",
  },
  {
    id: 4,
    name: "Contact Us",
  },
];

function TabOptions({ activeTab, setactiveTab }) {
  return (
    <div className="tab-options">
      <div className="options-wrappers">
        {tabs.map((tab) => (
          <div
            className={`tab-items absolute-center cur-po ${
              activeTab === tab.name && "active-tab"
            }`}
            onClick={() => setactiveTab(tab.name)}
            key={tab.id}
          >
            <div className="tab-name">{tab.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TabOptions;
