import { useMediaQuery, useTheme } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux'
import { useNavigate } from 'react-router-dom'

export function useHooks() {
  const theme = useTheme();

  const hooks = {
    useAppSelect: useSelector((state: RootState) => state),
    dispatch: useDispatch(),
    display: useMediaQuery(theme.breakpoints.up('lg')),
    navigate: useNavigate()
  }

  return hooks
}
