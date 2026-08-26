import Navbar from "../components/Navbar"
import ChatWidget from "../components/ChatWidget"
import ProjectDetail from "../sections/ProjectDetail"

export function ProjectLayout() {

  return (
    <>
          <Navbar
            isDetailView={true}
          />
          <ProjectDetail />
          <ChatWidget />
        </>
  )
}