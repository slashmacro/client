import React, { useEffect } from 'react'
import { connect } from 'react-redux'

// material-ui
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

// actions
import { getAllMacros } from '../Macro/actions'

const useStyles = makeStyles(theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}))

const LandingPage = ({ getAllMacros, macros }) => {
  const classes = useStyles()

  useEffect(() => {
    getAllMacros()
  }, [getAllMacros])

  return (
    <Container>
      {macros.data.map(macro => {
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
              <pre>
                <code className="js">{macro.macro}</code>
              </pre>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        )
      })}
    </Container>
  )
}

const mapStateToProps = state => ({
  macros: state.macros
})

const mapDispatchToProps = {
  getAllMacros
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage)
