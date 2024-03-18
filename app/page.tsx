import { TaskProvider } from "./components/TaskContext"
import Homepage from "./components/Homepage/Homepage"

export default function Home(){
  return (
    <TaskProvider>
        <Homepage/>
    </TaskProvider>
  )
}
 