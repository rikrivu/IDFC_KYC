import { KYCApi } from '../models/api-models';
import { columnDefConfig } from '../constants/columnDef-config';
import { ColumnDefConfig } from '../models/config-models';
import { ColumnDef } from '../models/ag-grid-models';

// Method to create Column Defs from a single row data of API response for Row Data
export const createColumnDefs = (list: KYCApi): ColumnDef[] => {
    // console.log(list);
    return Object.keys(list).map((key: string) => {
        const workingKey: keyof ColumnDefConfig = key as keyof ColumnDefConfig;
        return {
            headerName: columnDefConfig[workingKey].name,
            field: key,
            headerComponentParams: {sortable: columnDefConfig[workingKey].sortable},
            cellRenderer: columnDefConfig[workingKey].cellRenderer,
            maxWidth: columnDefConfig[workingKey].maxWidth
        }
    });
};