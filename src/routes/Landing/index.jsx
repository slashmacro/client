import React, { useEffect } from 'react'
import { connect } from 'react-redux'

// material-ui
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

// components
import MacroCard from 'components/MacroCard'

// actions
import { getAllMacros } from '../Macro/actions'

const useStyles = makeStyles(theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}))

const LandingPage = ({ getAllMacros, macros }) => {
  useEffect(() => {
    getAllMacros()
  }, [getAllMacros])

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Grid container spacing={2}>
            {macros.data.map(macro => {
              return (
                <Grid key={macro._id} item xs={12}>
                  <MacroCard {...macro} />
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
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
