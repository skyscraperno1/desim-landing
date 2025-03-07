
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero";
import { Explain } from "@/components/Explain";
import { TimeLimit } from "@/components/TimeLimit";
import { OverseaTest } from "@/components/OverseaTest"
import { Service } from "@/components/Service";
import { Purchase } from "@/components/Purchase";
import { Destination } from "@/components/Destination";
import { UserVoice } from "@/components/UserVoice"; 
import { Recommend } from "@/components/Recommend";    
import { Process } from "@/components/Process";
import { DestinationPlane } from "@/components/DestinationPlane";
import { Footer } from "@/components/Footer";
function App() {
  return (
    <>
      <div className="h-full w-full">
        <Header></Header>
        <Hero></Hero>
        <Explain></Explain>
        <TimeLimit></TimeLimit>
        <OverseaTest></OverseaTest>
        <Service></Service>
        <Purchase></Purchase>
        <Destination></Destination>
          <UserVoice></UserVoice>
        <Recommend></Recommend>
        <Process></Process>
        <DestinationPlane></DestinationPlane>
        <Footer></Footer>
      </div>
    </>
  )
}
export default App
