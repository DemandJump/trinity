import React from "react";
export interface FormikSelectItem {
    menuItemIcon: React.ReactNode;
    label: string;
    value: string;
}
interface FormikSelectProps {
    name: string;
    items: FormikSelectItem[];
    required?: boolean;
}
declare const DJSelectField: React.FC<FormikSelectProps>;
export default DJSelectField;
