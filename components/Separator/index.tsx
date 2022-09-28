import React from 'react'
import _ from 'lodash'

export function Separator(props: any) {
  console.log('props.turns', props.turns)
  return (
    <div
      style={{
        position: 'absolute',
        height: '100%',
        transform: `rotate(${props.turns}turn)`,
      }}
    >
      <div style={props.style} />
    </div>
  )
}

export function RadialSeparators(props: any) {
  const turns = 1 / props.count
  return _.range(props.count).map((index, idx) => (
    <Separator key={idx} turns={index * turns} style={props.style} />
  ))
}
