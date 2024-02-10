import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import MostPopularComponent from "./MostPopular";
import MostSharedComponent from "./MostShared";

const TabComponent: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<"mostPopular" | "mostShared">(
    "mostPopular"
  );

  return (
    <div className="w-4/5 mx-auto px-2 py-10 sm:px-0">
      <Tab.Group>
        <div className="flex  justify-end">
          <Tab.List className="flex w-full md:w-1/2 lg:w-1/3  bg-white rounded-xl  p-1">
            <Tab
              className={({ selected }) =>
                `w-full rounded-lg py-2.5 text-sm p-2 font-medium leading-5  ring-offset-2  focus:outline-none  ${
                  selected
                    ? "bg-[#5046E5] font-bold text-white shadow"
                    : "text-black font-semibold bg-[#F1F5F9] "
                }`
              }
              onClick={() => setSelectedTab("mostPopular")}
            >
              Most Popular
            </Tab>
            <Tab
              className={({ selected }) =>
                `w-full rounded-lg py-2.5 text-sm font-medium leading-5  ring-offset-2  focus:outline-none  ${
                  selected
                    ? "bg-[#5046E5] font-bold text-white shadow"
                    : "text-black font-semibold bg-[#F1F5F9] "
                }`
              }
              onClick={() => setSelectedTab("mostShared")}
            >
              Most Shared
            </Tab>
          </Tab.List>
        </div>
        <Tab.Panels className="mt-2">
          <Tab.Panels className="mt-8">
            <Tab.Panel>
              <MostPopularComponent />
            </Tab.Panel>
            <Tab.Panel>
              <MostSharedComponent />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default TabComponent;
