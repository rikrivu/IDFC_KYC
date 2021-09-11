export interface ColumnDefConfig {
    kyc_id: ColumnConfig;
    assigned_on: ColumnConfig;
    last_updated: ColumnConfig;
    customer_name: ColumnConfig;
    agent_name: ColumnConfig;
    ai_checks: ColumnConfig;
    status: ColumnConfig;
}

export interface ColumnConfig {
    name: string;
    sortable: boolean;
    cellRenderer: string;
    maxWidth: number | undefined;
}