import React, { useState } from "react";
import MostPopularComponent from "./MostPopular";
import MostSharedComponent from "./MostShared";

const TabComponent: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<"mostPopular" | "mostShared">(
    "mostPopular"
  );

  return (
    <div>
      <div className="flex  mt-8">
        <button
          className={`mr-4 px-4 py-2 rounded-lg focus:outline-none ${
            selectedTab === "mostPopular"
              ? "bg-blue-500 text-white"
              : "bg-gray-300"
          }`}
          onClick={() => setSelectedTab("mostPopular")}
        >
          Most Popular
        </button>
        <button
          className={`px-4 py-2 rounded-lg focus:outline-none ${
            selectedTab === "mostShared"
              ? "bg-blue-500 text-white"
              : "bg-gray-300"
          }`}
          onClick={() => setSelectedTab("mostShared")}
        >
          Most Shared
        </button>
      </div>
      <div className="mt-8">
        {selectedTab === "mostPopular" && <MostPopularComponent />}
        {selectedTab === "mostShared" && <MostSharedComponent />}
      </div>
    </div>
  );
};

export default TabComponent;
