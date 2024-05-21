import React from 'react'
import { MemoryRouter, Route, Routes, Link, matchPath, useLocation } from 'react-router-dom'
import { Stack, Box, Tabs, Tab, Typography } from '@mui/material'

const Router = (props) => {
  const { children } = props;
  return (
    <MemoryRouter initialIndex={0}>
       {children}
    </MemoryRouter>    
  )
}

export default Router