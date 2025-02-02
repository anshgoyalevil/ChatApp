import { IconChevronDown } from "@tabler/icons-react";
import React from "react";

const SelectModel = () => {
  return (
    <div className="flex items-center gap-0 group">
      <select
        name="model"
        className="text-gray font-semibold p-3 rounded-lg border-none focus:ring-0 bg-none"
      >
        <option className="font-semibold" value="OpenAI 4o">
          OpenAI 4o
        </option>
        <option className="font-semibold" value="OpenAI o1">
          OpenAI o1
        </option>
        <option className="font-semibold" value="OpenAI o3">
          OpenAI o3
        </option>
      </select>
      <IconChevronDown />
    </div>
  );
};

export default SelectModel;
