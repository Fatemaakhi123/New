import Advantages from '@/components/Advantages/Advantages'
import Banner from '@/components/Banner/Banner'
import Commision from '@/components/Commision/Commision'
import Counter from '@/components/Counter/Counter'
import Finance from '@/components/Finance/Finance'
import Innstruments from '@/components/Instruments/Innstruments'
import Pricing from '@/components/Pricing/Pricing'
import Program from '@/components/Program/Program'
import FAQ from '@/components/FAQ/FAQ'
import React from 'react'
import Script from 'next/script'
import Preloader from '@/components/Header/Preloader/Preloader'
const index = () => {
  return (
    <div>
     <Preloader/>
      <Banner/>
      <Counter/>
      <Advantages/>
      <Finance/>
      <Commision/>
      <Program/>
      <Pricing/>
      <Innstruments/>
      <FAQ/>
      <Script src="assets/js/jquery-3.6.0.min.js"></Script>
     <Script src="assets/js/bootstrap.bundle.min.js"></Script>
     <Script src="assets/js/isotope/js/imagesloaded.pkgd.min.js"></Script>
     <Script src="assets/js/isotope/js/isotope.pkgd.min.js"></Script>
     <Script src="assets/js/all.min.js"></Script>
     <Script src="assets/js/swiper-bundle.min.js"></Script>
     <Script src="assets/js/aos.js"></Script>
     <Script src="assets/js/jquery.nice-select.min.js"></Script>
     <Script src="assets/js/countdown.min.js"></Script>
     <Script src="assets/js/lightcase.js"></Script>
     <Script src="assets/js/text-rotator.min.js"></Script>
     <Script src="assets/js/purecounter_vanilla.js"></Script>
     <Script src="assets/js/custom.js"></Script>


    </div>
  )
}

export default index