import React from 'react'
import moment from 'moment'

// material-ui
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'

const MacroCard = ({ createdOn, createdBy, title, macro }) => {
  const { photo } = createdBy
  const UserAvatar = <Avatar src={photo} />
  const formattedDate = moment(createdOn).fromNow()
  return (
    <Card elevation={0}>
      <CardHeader title={title} subheader={formattedDate} avatar={UserAvatar} />
      <CardContent>{macro}</CardContent>
    </Card>
  )
}

export default MacroCard
