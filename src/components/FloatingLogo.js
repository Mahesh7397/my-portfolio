'use client'

import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Image } from '@react-three/drei'
import * as THREE from 'three'

const Dpos=[
  [-2.8, 10.0, -3.6],
  [ 2.6,  9.1, -4.1],
  [-2.3,  8.2, -4.7],
  [ 2.1,  7.3, -5.3],
  [-1.9,  6.4, -5.9],

  [ 2.4,  5.5, -3.8],
  [-2.6,  4.6, -4.4],
  [ 2.8,  3.7, -5.0],
  [-1.7,  2.8, -5.6],
  [ 1.9,  1.9, -6.2],

  [-2.2,  1.0, -4.3],
  [ 2.0,  0.1, -4.9],
  [-1.8, -0.8, -5.5],
  [ 1.6, -1.7, -6.1],
  [-1.4, -2.6, -6.7],

  [ 2.2, -3.5, -7.1],
  [-2.5, -4.4, -7.5],
  [ 2.7, -5.3, -7.8],
  [ 0.0, -8.0, -6.0]
]

const Mpos=[
  [-0.9, 10.0, -3.5],
  [ 0.7,  9.0, -4.0],
  [-0.6,  8.0, -4.6],
  [ 0.8,  7.0, -5.2],
  [-0.5,  6.0, -5.8],

  [ 0.6,  5.0, -3.9],
  [-0.8,  4.0, -4.5],
  [ 0.9,  3.0, -5.1],
  [-0.4,  2.0, -5.7],
  [ 0.5,  1.0, -6.3],

  [-0.7,  0.0, -4.2],
  [ 0.8, -1.0, -4.9],
  [-0.6, -2.0, -5.5],
  [ 0.7, -3.0, -6.1],
  [-0.5, -4.0, -6.7],

  [ 0.6, -5.0, -7.2],
  [-0.8, -6.0, -7.6],
  [ 0.9, -7.0, -7.9],
  [ 0.0, -8.0, -6.0]
]

function Element({
  url,
  index,
  speed = 1,
  amplitude = 0.15,
}) {
  const ref = useRef()
  
  const {viewport}=useThree()
  const position= viewport.width<=1?Mpos[index]:Dpos[index]
  const baseY = position[1]
  useFrame(({ clock }) => {
    if (!ref.current) return
    ref.current.position.y =
      baseY + Math.sin(clock.elapsedTime * speed) * amplitude
  })

  return (
     <Image
      ref={ref}
      url={url}
      position={position}
      scale={0.3}
      transparent
      toneMapped={false}
      opacity={0.8}
      // 🌟 Glow (GPU cheap)
      style={{
        filter: 'drop-shadow(0 0 8px rgba(0,212,255,0.55))',
      }}
    />
  )
}

export function FloatingLogo({
  arr=[],

}) {

  return(
  arr.map((logo,i)=>{
  return(
        <Element url={`/logos/${logo}`} key={i} index={i} speed={0.8 + i * 0.05}
          amplitude={0.12}/>
  )
  }))
}
