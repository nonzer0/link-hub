import React from 'react'
import { useQuery } from '@tanstack/react-query'

export function User() {
    const result: any = useQuery(['session']);

    if (result.status === 'loading') {
        return (
            <div className="loading">
                Loading...
            </div>
        )
    }

    if (result.status === 'error') {
        return (
            <div className="error">
                Error while fetching resources
            </div>
        )
    }

    return (
        <>
            <p>{result.data.user.email}</p>
        </>
    )
}