'use client'

import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ModuleRegistry } from '@ag-grid-community/core';
import { AgGridReact } from '@ag-grid-community/react';

import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-quartz.css';




ModuleRegistry.registerModules([ClientSideRowModelModule]);

function DashboardTable({ value }: { value: any[] }) {
    const colDefs = [
        { field: 'Country' },
        { field: 'Category' },
        { field: 'Title' },
        { field: 'Source' },
        { field: 'LatestValueDate' },
        { field: 'LatestValue' },
        { field: 'Title' },
        { field: 'Source' },
        { field: 'Category' },
        { field: 'Title' },
        { field: 'Source' },
    ];

    const defaultColDef = {
        flex: 1,
    };


    return (
        <div
            className={
                "ag-theme-quartz"
            }
            style={{ width: '100%', height: '300px' }}
        >
            <AgGridReact rowData={value} columnDefs={colDefs} defaultColDef={defaultColDef} />
        </div>
    );
};


export default DashboardTable