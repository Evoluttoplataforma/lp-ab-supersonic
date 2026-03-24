import { useEffect } from 'react'
import { pbqphData } from '../data/pbqph'
import Navbar from '../components/layout/Navbar'
import HeroSection from '../components/sections/Hero'
import BigNumbersSection from '../components/sections/BigNumbers'
import WhyChooseSection from '../components/sections/WhyChoose'
import ProcessSection from '../components/sections/Process'
import GuaranteeSection from '../components/sections/Guarantee'
import SpeedSection from '../components/sections/Speed'
import ValidationSection from '../components/sections/Validation'
import ReasonsSection from '../components/sections/Reasons'
import SeloSection from '../components/sections/Selo'
import DepoimentosSection from '../components/sections/Depoimentos'
import BenefitsGridSection from '../components/sections/BenefitsGrid'
import CoverageSection from '../components/sections/Coverage'
import StepsSection from '../components/sections/Steps'
import CtaDarkSection from '../components/sections/CtaDark'
import FaqSection from '../components/sections/Faq'
import CtaFinalSection from '../components/sections/CtaFinal'

export default function PbqpH() {
  const data = pbqphData

  useEffect(() => {
    document.title = data.meta.title
  }, [data.meta.title])

  return (
    <>
      <Navbar ctaHref="#tally-open=woJR7e&tally-layout=modal&tally-hide-title=1" />
      <main>
        <HeroSection data={data.hero} />
        <BigNumbersSection data={data.bigNumbers} />
        <WhyChooseSection data={data.whyChoose} id="sobre" />
        <ProcessSection data={data.process} id="como-funciona" />
        <GuaranteeSection data={data.guarantee} />
        <SpeedSection data={data.speed} />
        <ValidationSection data={data.validation} />
        <ReasonsSection data={data.reasons} id="beneficios" />
        <SeloSection data={data.selo} />
        <DepoimentosSection data={data.depoimentos} id="depoimentos" />
        <BenefitsGridSection data={data.benefitsGrid} />
        <CoverageSection data={data.coverage} />
        <StepsSection data={data.steps} />
        <CtaDarkSection data={data.ctaDark} />
        <FaqSection data={data.faq} id="faq" />
        <CtaFinalSection data={data.ctaFinal} id="contato" />
      </main>
    </>
  )
}
