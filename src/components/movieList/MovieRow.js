import React from 'react'

export default function MovieRow({ id, title, rank, year, image, imDbRating, imDbRatingCount }) {
    return (
        <tr>
            <td>
                <img className='poster' src="" />
            </td>
            <td>
                <span className='rank'>1. </span>
                <a className='title'
                    href={'http://imdb.com/title/' + id}>
                    title
                </a>
                <span className='year'> (2022)</span>
            </td>
            <td>
                ⭐&nbsp;<span className='rating'>9.1</span>
            </td>
        </tr>
    )
}