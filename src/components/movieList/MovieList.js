import React from 'react'
import './Movies.css'

export default function MovieList({ movies }) {
    return (
        <div className='table-container'>
            <table className='movies'>
                <thead>
                    <tr>
                        <th colSpan="2">
                            Rank & Title
                        </th>
                        <th>
                            IMDb<br />Rating
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* map movie data (json) => movie cards (JSX) here */}
                </tbody>
            </table>
        </div>
    )
}
