
import { Button } from "@/components/Button"
import { useTranslation } from 'react-i18next';
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero";

function App() {
  const { t } = useTranslation();
  
  return (
    <>
      <div className="h-screen w-full">
        <Header></Header>
        <Hero>
        <Button>{ t('amazonPurchase') }</Button>
        </Hero>
        
      </div>
    </>
  )
}
export default App
