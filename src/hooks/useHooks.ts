import { useMediaQuery, useTheme } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux'

export function useHooks() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'))
  const useAppDispatch = useDispatch()
  const selector = useSelector((state: RootState) => state)

  const hooks = {
    useAppSelect: selector,
    dispatch: useAppDispatch,
    display: matches
  }

  return hooks
}
