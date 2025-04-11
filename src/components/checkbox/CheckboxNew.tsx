// src/components/Checkbox.tsx
import React from "react";

type CheckboxProps = {
  /**
   * Label của checkbox
   */
  label: string;
  /**
   * Trạng thái của checkbox
   */
  checked: boolean;
  /**
   * Hàm xử lý sự kiện khi checkbox thay đổi
   */
  onChange: (event: boolean) => void;
  /**
   * Trạng thái disabled của checkbox
   */
  disabled?: boolean;
};

const CheckboxNew: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  disabled,
}) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer select-none">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        className="custom-checkbox"
      />
      <span
        className={`text-sm font-medium ${disabled ? "text-gray-400" : ""}`}
      >
        {label}
      </span>
    </label>
  );
};

export default CheckboxNew;
