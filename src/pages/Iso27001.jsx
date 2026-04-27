import { useEffect } from 'react'
import { iso27001Data } from '../data/iso27001'
import Navbar from '../components/layout/Navbar'
import HeroSection from '../components/sections/Hero'
import BigNumbersSection from '../components/sections/BigNumbers'
import CtaDarkSection from '../components/sections/CtaDark'
import ReasonsSection from '../components/sections/Reasons'
import SeloSection from '../components/sections/Selo'
import ValidationSection from '../components/sections/Validation'
import DepoimentosSection from '../components/sections/Depoimentos'
import StepsSection from '../components/sections/Steps'
import CoverageSection from '../components/sections/Coverage'
import FaqSection from '../components/sections/Faq'
import CtaFinalSection from '../components/sections/CtaFinal'

export default function Iso27001() {
  const data = iso27001Data

  useEffect(() => {
    document.title = data.meta.title
  }, [data.meta.title])

  return (
    <>
      <Navbar ctaHref="#tally-open=wbaev2&tally-layout=modal&tally-hide-title=1" />
      <main>
        <HeroSection data={data.hero} />
        <BigNumbersSection data={data.bigNumbers} />
        <DepoimentosSection data={data.depoimentos} id="depoimentos" />
        <CtaDarkSection data={data.ctaDark} />
        <ValidationSection data={data.validation} />
        <SeloSection data={data.selo} />
        <StepsSection data={data.steps} />
        <ReasonsSection data={data.reasons} id="beneficios" />
        <CoverageSection data={data.coverage} />
        <FaqSection data={data.faq} id="faq" />
        <CtaFinalSection data={data.ctaFinal} id="contato" />
        <CtaFinalSection data={data.ctaBanner} />
      </main>
    </>
  )
}
