import './Home.scss';
import React, { useEffect, useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

// Ag Grid Themes
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

// Import Services
import * as dataService from '../../shared/services/data-service';

// Import Utility Methods
import { createColumnDefs } from '../../shared/utils/ag-grid-methods';

// Import Interfaces
import { KYCApi, KYCListApi } from '../../shared/models/api-models';
import { ColumnDef, SortState } from '../../shared/models/ag-grid-models';
import { SelectedPage } from '../../shared/models/paginator-models';

// Import Components
import SortableHeaders from '../../Components/SortableHeaders/SortableHeaders';
import StatisticsPanel from '../../Components/StatisticsPanel/StatisticsPanel';
import KYCStatusCell from '../../Components/KYCStatusCell/KYCStatusCell';
import Paginator from '../../Components/Paginator/Paginator';
import AIChecks from '../../Components/AIChecksCell/AIChecksCell';

function Home () {
    
    const [kycListData, setKycListData] = useState<KYCListApi | null>(null);    // Store KYC List API Response in kycListData
    const [sortState, setSortState] = useState<SortState>({                     // Maintain current sorting state of the Table
        criteria: null,
        state: 'unsort',
        page: 1
    });
    const [gridApi, setGridApi] = useState<any | null>(null);                   // ag GridApi
    const [gridColumnApi, setGridColumnApi] = useState(null);                   // agGridColumnApi
    const [rowData, setRowData] = useState<KYCApi[]>([]);                       // Table Row Data
    const [columnDefs, setColumnDefs] = useState<ColumnDef[]>([]);              // Table column Definitions
    const frameworkComponents = {                                               // Custom components for agGrid Table
        agColumnHeader: SortableHeaders,
        kycStatusCell: KYCStatusCell,
        aiChecks: AIChecks
    };

    // Function that runs when grid is Ready
    function onGridReady(params: any): void {
        // console.log('called');
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
    }

    // Resizing columns to fit available width when data is rendered for the first time
    const onFirstDataRendered = (params: any): void => {
        gridApi.sizeColumnsToFit();
    }

    // Method to sort columns and setting sort state
    const sort = (criteria: string): void => {
        const updatedSortState: SortState = {
            ...sortState,
            criteria: criteria
        };
        if (sortState.criteria === criteria) {
            switch (sortState.state) {
                case 'unsort': {
                    updatedSortState.state = 'asc';
                    break;
                }
                case 'asc': {
                    updatedSortState.state = 'desc';
                    break;
                }
                case 'desc': {
                    updatedSortState.state = 'unsort';
                    break;
                }
            }
        } else {
            updatedSortState.state = 'asc';
        }
        // console.log('Called', updatedSortState);
        setSortState(updatedSortState);
    }

    // Method to update sort state when page changes
    const changePage = (selectedPage: SelectedPage): void => {
        // console.log('Selected Page Index', selectedPage);
        setSortState({
            ...sortState,
            page: selectedPage.selected + 1
        });
    }

    // Trigger API call to fetch table row data everytime any of the parameters in sort state changes
    useEffect(() => {
        // console.log('Sortstate', sortState);
        dataService.getKYCData().then((res: KYCListApi) => {
            // console.log('Data', createColumnDefs(res));
            setKycListData(res);
            setColumnDefs(createColumnDefs(res.kycs[0]));
            setRowData(res.kycs);
        });
      },[sortState])

    return (
        <React.Fragment>

            {/* Statistics Panel Starts */}
            {
                kycListData ?
                <StatisticsPanel statistics={kycListData?.statistics}></StatisticsPanel>
                : null
            }
            {/* Statistics Panel Ends */}

            {/* agGrid Table Starts */}
            <div className="table-container">
                <div className="ag-theme-alpine" style={ { height: '100%', width: '100%' } }>
                    <AgGridReact
                        onGridReady={onGridReady}
                        onFirstDataRendered={onFirstDataRendered}
                        defaultColDef={{resizable: true, cellClass: 'default-cell'}}
                        domLayout={'autoHeight'}
                        animateRows={true}
                        rowData={rowData}
                        frameworkComponents={frameworkComponents}
                        rowClassRules={{
                            'alt-background': (params) => {
                                return params.node.rowIndex % 2 !== 0;
                            },
                        }}
                        rowHeight={50}
                        // columnDefs={columnDefs}
                    >

                        {
                            columnDefs && columnDefs.length ?

                            columnDefs.map((col: ColumnDef, index: number) => {
                                return (
                                    <AgGridColumn
                                        key={index}
                                        headerName={col.headerName}
                                        field={col.field}
                                        maxWidth={col.maxWidth}
                                        headerComponentParams={
                                            {
                                                ...col.headerComponentParams,
                                                sort: sort,
                                                sortState: sortState
                                            }
                                        }
                                        cellRenderer={col.cellRenderer}
                                    ></AgGridColumn>
                                );
                            })
                            : null
                        }

                    </AgGridReact>
                </div>
            </div>
            {/* agGrid Table Ends */}
            
            {/* Paginator Starts */}
            {
                kycListData ?
                <Paginator pageSize={kycListData.size} changePage={changePage}></Paginator>
                : null
            }
            {/* Paginator Ends */}

        </React.Fragment>
    );
}

export default Home;