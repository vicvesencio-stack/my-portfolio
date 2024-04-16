import { Grid } from '@mui/material'

function App() {

  return (
    <>
      <Grid container spacing={0}>
        <Grid xs={1}></Grid>
        <Grid xs={4}>
          MORE INFO SECTION
        </Grid>
        <Grid xs={6}>
          BASIC INFO SECTION
        </Grid>
        <Grid xs={1}></Grid>
      </Grid>
    </>
  )
}

export default App
