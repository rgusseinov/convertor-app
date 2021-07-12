import { Container, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next';
import classes from './footer.module.css'

function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear()
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography component="p" align="center" gutterBottom> @{year} {t('Copyright')} </Typography>
      </Container>
    </footer>
  )
}

export default Footer
