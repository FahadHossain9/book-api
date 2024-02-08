// ListSelect.tsx
import React from "react";
import { Select } from "antd";

const { Option } = Select;

interface Props {
  lists: { list_name: string; list_name_encoded: string }[];
  defaultValue: string;
  onChange: (value: string) => void;
}

const ListSelect: React.FC<Props> = ({ lists, defaultValue, onChange }) => {
  return (
    <Select
      value={defaultValue}
      style={{ width: 270, }}
      onChange={onChange}
    >
      {lists.map(({ list_name, list_name_encoded }: any) => (
        <Option key={list_name_encoded} value={list_name_encoded}>
          {list_name}
        </Option>
      ))}
    </Select>
  );
};

export default ListSelect;
