import { useEffect } from 'react'
import { iso9001Data } from '../data/iso9001'
import Navbar from '../components/layout/Navbar'
import HeroSection from '../components/sections/Hero'
import BigNumbersSection from '../components/sections/BigNumbers'
import WhyChooseSection from '../components/sections/WhyChoose'
import ProcessSection from '../components/sections/Process'
import CtaDarkSection from '../components/sections/CtaDark'
import ReasonsSection from '../components/sections/Reasons'
import SeloSection from '../components/sections/Selo'
import ValidationSection from '../components/sections/Validation'
import ComparisonTableSection from '../components/sections/ComparisonTable'
import DepoimentosSection from '../components/sections/Depoimentos'
import BenefitsGridSection from '../components/sections/BenefitsGrid'
import StepsSection from '../components/sections/Steps'
import CoverageSection from '../components/sections/Coverage'
import FaqSection from '../components/sections/Faq'
import CtaFinalSection from '../components/sections/CtaFinal'

export default function Iso9001() {
  const data = iso9001Data

  useEffect(() => {
    document.title = data.meta.title
  }, [data.meta.title])

  return (
    <>
      <Navbar />
      <main>
        <HeroSection data={data.hero} />
        <BigNumbersSection data={data.bigNumbers} />
        <WhyChooseSection data={data.whyChoose} id="sobre" />
        <ProcessSection data={data.process} id="como-funciona" />
        <CtaDarkSection data={data.ctaDark} />
        <ReasonsSection data={data.reasons} id="beneficios" />
        <SeloSection data={data.selo} />
        <ValidationSection data={data.validation} />
        <ComparisonTableSection data={data.comparison} />
        <DepoimentosSection data={data.depoimentos} id="depoimentos" />
        <StepsSection data={data.steps} />
        <CoverageSection data={data.coverage} />
        <CtaFinalSection data={data.ctaFinal} id="contato" />
        <FaqSection data={data.faq} id="faq" />
        <CtaFinalSection data={data.ctaBanner} />
      </main>
    </>
  )
}
