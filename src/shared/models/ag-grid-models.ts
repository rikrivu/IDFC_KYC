export interface ColumnDef {
    headerName: string;
    field: string;
    headerComponentParams: any;
    cellRenderer: string;
    maxWidth: number | undefined;
}

export interface SortState {
    criteria: string | null;
    state: 'asc' | 'desc' | 'unsort',
    page: number
}