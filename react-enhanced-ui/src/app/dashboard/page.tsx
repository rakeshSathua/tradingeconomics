import React, { StrictMode } from 'react';

import DashboardTable from '../components/DashboardTable';
import { getIndicator } from '@/services/indicator';

async function Dashboard() {
    const value = await getIndicator();

    return (
        <>
            <h1> Countries By Indicator </h1>
            <DashboardTable value={value} />
        </>
    )
}

export default Dashboard