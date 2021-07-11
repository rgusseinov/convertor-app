import {
  Typography, Card, CardContent, CardActions,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { getCurrentDate } from '../../utils';
import classes from './convertor-result.module.css'

interface ConvertResultProps {
  result: string
}

const ConvertResult: React.FC<ConvertResultProps> = props => {
  const { t } = useTranslation()
  const currentDate: string = `${getCurrentDate()}`
  return (
    <Card className={classes.card}>
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2"> {t('Result')} </Typography>
      <Typography variant="h4" className={classes.title} color="textPrimary" gutterBottom>
        { props.result }
      </Typography>
      <CardActions>
        <Typography variant="body2" component="p"> {currentDate} </Typography>
      </CardActions>
    </CardContent>
  </Card>
  )
}

export default ConvertResult
