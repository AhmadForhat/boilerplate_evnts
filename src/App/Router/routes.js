import homeRoutes from 'Home/routes'

const getRoutes = (hasAccessToNewStructure) => {
  const oldRoutes = [
    ...homeRoutes
  ]

  const newRoutes = [
    ...homeRoutes
  ]

  return hasAccessToNewStructure ? newRoutes : oldRoutes
}

export default getRoutes
