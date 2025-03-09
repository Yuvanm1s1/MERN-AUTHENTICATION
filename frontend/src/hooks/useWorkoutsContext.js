import { WorkoutsContext } from '../context/WorkoutContext'  // ✅ Use correct context
import { useContext } from 'react'

export const useWorkoutsContext = () => {  // ✅ Correct function name
  const context = useContext(WorkoutsContext)

  if (!context) {
    throw Error('useWorkoutsContext must be used inside a WorkoutsContextProvider')
  }

  return context
}
