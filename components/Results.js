import { get, map } from 'lodash';
import React from 'react'
import Thumbnail from './Thumbnail';
import FlipMove from 'react-flip-move';


export default function Results({ results }) {

  return (
    <FlipMove className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-4 3xl:flex flex-wrap justify-center'>
      {map(get(results, 'results', ''), (result, key) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  )
}