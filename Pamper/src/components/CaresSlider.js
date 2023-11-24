'use client'

import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa'

import Link from 'next/link'
import React, { useRef, useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const data = [
  {
    id: 1,
    thumbnail:
      'https://images.ctfassets.net/9wtva4vhlgxb/2baSM1NIXo3WtrIhiOqfSq/39841ccbc08d116b4422e64267f84176/Pamper_site_BB_Banner_1360x800.jpg?fm=webp&q=70&w=800&h=400',
    title: "Don't fear blowouts",
    description:
      'New Pampers Swaddlers with Blowout Barrier helps prevent up to 100% of leaks, even blowouts',
    button: {
      name: 'Lear More',
      url: 'https://www.pampers.com/en-us/diapers-wipes/pampers-swaddlers-diapers',
    },
  },

  {
    id: 2,
    thumbnail:
      'https://images.ctfassets.net/9wtva4vhlgxb/2jD5mDk42kFGXD3sX8XuMe/17ed81eac32921aeab5f832634577c97/fwb2.png?fm=webp&q=70&w=800&h=400',
    title: 'Watch our free birthing classes',
    description:
      "Be prepared for your baby's arrival with exclusive FREE videos led by clinical childbirth experts",
    button: {
      name: 'Start the classes',
      url: 'https://www.pampers.com/en-us/diapers-wipes/pampers-swaddlers-diapers',
    },
  },

  {
    id: 3,
    thumbnail:
      'https://images.ctfassets.net/9wtva4vhlgxb/3tvGzoScOWbHQ01374TJ2B/c467851a79e29bc21331e1adecc03b8c/fwb3.jpeg?fm=webp&q=70&w=800&h=400',
    title: 'Maternal Health Equity',
    description:
      'In the U.S., Black moms die from pregnancy related complications 3x the rate of white women. Join us in the fight for equity!',
    button: {
      name: 'Lear More',
      url: 'https://www.pampers.com/en-us/diapers-wipes/pampers-swaddlers-diapers',
    },
  },
]

const CaresSlider = () => {
  const [playSlide, setPlaySlide] = useState(true)

  const slideRef = useRef(null)

  const play = () => {
    slideRef.current.slickPlay()
    setPlaySlide(!playSlide)
  }

  const pause = () => {
    slideRef.current.slickPause()
    setPlaySlide(!playSlide)
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplayspeed: 2000,
  }

  return (
    <section className="mt-5">
      <div className="container">
        <Slider
          ref={slideRef}
          {...settings}
          className={
            playSlide
              ? 'parenting-tools-slider play-animation'
              : 'parenting-tools-slider pause-animation'
          }
        >
          {data.length &&
            data.map((item) => {
              return (
                <div>
                  <div className="row g-0">
                    <div className="col-md-6">
                      <div className="thumb">
                        <img
                          src={item.thumbnail}
                          alt=""
                          className="img-fluid w-100"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="bg-teal h-100 p-5 text-center">
                        <h3 className="title-2 text-indigo">{item.title}</h3>
                        <p className="text-indigo">{item.description}</p>
                        <div className="mt-5">
                          <Link href={item.button.url} className="btn-coral ">
                            {item.button.name}
                          </Link>
                        </div>
                        <div className="fa__icon">
                          {playSlide ? (
                            <FaPauseCircle className="fa-icon" onClick={pause} />
                          ) : (
                            <FaPlayCircle className="fa-icon" onClick={play}/>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
        </Slider>
      </div>
    </section>
  )
}

export default CaresSlider
