import React, { useState, useEffect } from 'react'
import axios from 'axios'

// material-ui
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles(theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}))

const LandingPage = () => {
  const classes = useStyles()
  const [macros, set] = useState([])
  const getMacros = () => {
    axios.get('/api/macros').then(res => set(res.data))
  }
  useEffect(() => {
    getMacros()
  }, [])
  return (
    <Container>
      {macros.map(macro => {
        return (
          <ExpansionPanel key={macro._id}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>{macro.title}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>{macro.macro}</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        )
      })}
    </Container>
  )
}

export default LandingPage
