import React from "react";
import { DatePicker } from "antd";
import days, { ConfigType } from "dayjs";

interface Props {
  defaultValue: ConfigType;
  onChange: (date: ConfigType | null) => void;
}

const CustomDatePicker: React.FC<Props> = ({ defaultValue, onChange }) => {
  return (
    <>
      <DatePicker
        defaultValue={defaultValue}
        maxDate={days()}
        onChange={(date) => onChange(date as ConfigType)}
        format="YYYY-MM-DD"
      />
      <br />
    </>
  );
};

export default CustomDatePicker;
