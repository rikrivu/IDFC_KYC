import { ColumnDefConfig } from "../models/config-models";

export const columnDefConfig: ColumnDefConfig = {
    kyc_id: {
        name: 'KYC ID',
        sortable: false,
        cellRenderer: '',
        maxWidth: undefined
    },
    assigned_on: {
        name: 'Assigned On',
        sortable: true,
        cellRenderer: '',
        maxWidth: undefined
    },
    last_updated: {
        name: 'Last Updated',
        sortable: true,
        cellRenderer: '',
        maxWidth: undefined
    },
    customer_name: {
        name: 'Customer Name',
        sortable: false,
        cellRenderer: '',
        maxWidth: undefined
    },
    agent_name: {
        name: 'Agent Name',
        sortable: false,
        cellRenderer: '',
        maxWidth: undefined
    },
    ai_checks: {
        name: 'AI Checks',
        sortable: false,
        cellRenderer: 'aiChecks',
        maxWidth: undefined
    },
    status: {
        name: 'Status',
        sortable: true,
        cellRenderer: 'kycStatusCell',
        maxWidth: 120
    }
};