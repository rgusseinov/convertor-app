import {
  Typography, Card, CardContent, CardActions,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import classes from './convertor-result.module.css'

function ConvertResult({ result }) {
  const { t } = useTranslation()
  return (
    <Card className={classes.card}>
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2"> {t('Result')} </Typography>
      <Typography variant="h4" className={classes.title} color="textPrimary" gutterBottom>
        { result }
      </Typography>
      <CardActions>
        <Typography variant="body2" component="p"> 10.07.2021 </Typography>
      </CardActions>
    </CardContent>
  </Card>
  )
}

export default ConvertResult
