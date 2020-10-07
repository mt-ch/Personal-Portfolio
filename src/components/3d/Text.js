import * as THREE from 'three'
import React, { forwardRef, useMemo } from 'react'
import { useLoader, useUpdate } from 'react-three-fiber'

const Text = forwardRef(({ children, vAlign = 'center', hAlign = 'center', size = 1, color = '#000000', ...props }, ref) => {
  const fontJson = require( "../assets/fonts/droid_sans_mono_regular.typeface.json" );
  const font = new THREE.Font( fontJson );
  const config = useMemo(() => ({ font, size: 40, height: 50 }), [font])

  return (
    <group ref={ref} {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
      <mesh>
        <textBufferGeometry attach="geometry" font={font} />
        <meshPhongMaterial attach="material" color='#97df5e' />
      </mesh>
    </group>
  )
})

export default Text
