
import { Button } from "@/components/Button"
import { useTranslation } from 'react-i18next';
import { Header } from "@/components/Header"

function App() {
  const { t } = useTranslation();

  return (
    <>
      <div className="h-screen w-full">
        <Header></Header>
        <Button>{ t('amazonPurchase') }</Button>
      </div>
    </>
  )
}
export default App
