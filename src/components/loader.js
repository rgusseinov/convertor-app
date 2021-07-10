import { CircularProgress, Grid } from '@material-ui/core'

function Loader() {
  return (
    <Grid container justify="center" alignItems="center">
      <CircularProgress />
    </Grid>
  )
}

export default Loader
