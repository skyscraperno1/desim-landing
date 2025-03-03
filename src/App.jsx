
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero";
import { Explain } from "@/components/Explain";
import { TimeLimit } from "@/components/TimeLimit";
import { OverseaTest } from "@/components/OverseaTest"
import { Service } from "@/components/Service";
import { Purchase } from "@/components/Purchase";
import { Destination } from "@/components/Destination";
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
      </div>
    </>
  )
}
export default App
