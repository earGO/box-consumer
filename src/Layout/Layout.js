import React from 'react'
import {withRouter} from 'react-router-dom'
import {Flex, Box, Text} from '@design-system/atoms'

/**
 * Main application layout
 */
function Layout({children, width, maxWidth, history, ...props}) {
  const year = new Date().getFullYear()

  const FooterComponent = () => {
    return (
      <Box bg="lightGrey">
        <Box p={2} mx="auto" style={{maxWidth}} justifyContent="space-between">
          <Text color="darkGrey" fontSize={0} align="right">
            URSiP &copy; {year}
          </Text>
        </Box>
      </Box>
    )
  }

  return (
    <Flex height="100vh" flexDirection="column" alignItems="stretch" {...props}>
      <Box flex={1} mx="auto" width="100%" style={{overflow: 'hidden'}}>
        {children}
      </Box>
      <FooterComponent />
    </Flex>
  )
}

Layout.defaultProps = {
  maxWidth: 1600,
  // Responsive breackpoints
  width: ['99%', '99%', '99%', '99%']
}

export default withRouter(Layout)
