/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {EnableSidebar, PageTitle} from '../../../_metronic/layout/core'
import {Questions} from '../../modules/apps/dev/components/partials/Questions'
import EventsPage from './EventsPage'

const DashboardWrapper: FC = () => {
  // const intl = useIntl()
  return (
    <EnableSidebar>
      <EventsPage />
    </EnableSidebar>
  )
}

export {DashboardWrapper}
