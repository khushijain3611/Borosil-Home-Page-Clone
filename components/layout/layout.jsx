import React from 'react'
import HEADER from './components/HEADER'
import CONTENT from './content/content'

export default function LAYOUT({children}) {
  return (
    <>
    <HEADER/>
    <CONTENT/>
    {children}
    </>
  )
}
