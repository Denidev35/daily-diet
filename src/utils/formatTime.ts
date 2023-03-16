import dayjs from "dayjs"

export function formatTime(time: Date) {
  const hours = String(dayjs(time).hour()).padStart(2, '0')
  const minutes = String(dayjs(time).minute()).padStart(2, '0')
  const formatedHours = `${hours}:${minutes}`

  return formatedHours
}