import { Notifications, Permissions } from 'expo'
import { AsyncStorage } from 'react-native'

export const clearLocalNotification = () => {
  return AsyncStorage.removeItem('NOTIFICATION').then(Notifications.cancelAllScheduledNotificationsAsync)
}

export const setLocalNotification = () => {
  AsyncStorage.getItem('NOTIFICATION').then(data => {
    if (data === null){
      Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
        if (status === 'granted'){
          Notifications.cancelAllScheduledNotificationsAsync()

          let tomorrow = new Date()
          tomorrow.setDate(tomorrow.getDate()+1)
          tomorrow.setHours(14)
          tomorrow.setMinutes(0)
          Notifications.scheduleLocalNotificationAsync(
            {
              title: 'Take a Quiz!',
              body: 'Don\'t forget to quiz yourself today :)',
              ios: {
                sound: true,
              },
              android: {
                sound: true,
                priority: 'high',
                sticky: false,
                vibrate: true
              }
            },
            {
              time: tomorrow,
              repeat: 'day'
            }
          )

          AsyncStorage.setItem('NOTIFICATION', JSON.stringify(true))
        }
      })
    }
  })
}
