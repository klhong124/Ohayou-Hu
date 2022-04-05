import DataTable, { createTheme } from "react-data-table-component";
import Icon from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";

createTheme("white", {
    background: {
        default: "#fafafa",
    },
});

export const sortIcon = <Icon path={mdiChevronDown} size={1} />;

export default DataTable