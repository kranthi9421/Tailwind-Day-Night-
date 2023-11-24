'use client'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import Card from '@/components/Card'

const sliderData = [
  {
    id: 1,
    thumbnail:
      'https://images.ctfassets.net/9wtva4vhlgxb/4aChpqN53N7uKiaV1LbtyS/d2ac45f0128cfa49ffff122272fc098d/rectangle.jpg?fm=webp&q=70',
    title: 'Online birthing classes',
    icon: 'https://images.ctfassets.net/9wtva4vhlgxb/18MXClUhP6NhIoM6hYTJYM/351bd9e0c95312852efc164cd9d91725/childbirth.svg?fm=webp&q=70',
  },

  {
    id: 2,
    thumbnail:
      'https://images.ctfassets.net/9wtva4vhlgxb/1POG2lQ6BoDOfNuj8CIJ01/afd2dc915766efc7ed79b9a65c481f95/rectangle.png?fm=webp&q=70',
    title: 'PREGNANCY DUE DATE CALCULATOR',
    icon: 'https://images.ctfassets.net/9wtva4vhlgxb/66dfJRF5e1xxh1ElQNnPBf/92f3cff9d4d41088d4c634429cc38770/ddc.svg?fm=webp&q=70',
  },

  {
    id: 3,
    thumbnail:
      'https://images.ctfassets.net/9wtva4vhlgxb/5ODVUW9X1hDHw56l0WFuHC/61bf4c8acb18cb48779db61ae897f9c6/Diaper_stash_carousel_image.png?fm=webp&q=70',
    title: 'DIAPER STASH',
    icon: 'https://images.ctfassets.net/9wtva4vhlgxb/2S5o1aVjlR5gZPDYw7zv7G/0e05f6c5797a2aebf5fadc7fa2c5a6f6/c.svg?fm=webp&q=70',
  },

  {
    id: 4,
    thumbnail:
      'https://images.ctfassets.net/9wtva4vhlgxb/7mlSXwBOTsb99ERaxrGBRn/47b1a860472f32cc6181bc72e453f624/caroussel-img_M.jpg?fm=webp&q=70',
    title: 'PREGNANCY MILESTONES TRACKER',
    icon: 'https://images.ctfassets.net/9wtva4vhlgxb/5i7UD334904v8gvm67ABbH/49163112ec88af78b119ab97ad4e87a0/icon-notifier.svg?fm=webp&q=70',
  },
  {
    id: 5,
    thumbnail:
      'https://images.ctfassets.net/9wtva4vhlgxb/58DE29qBHkHzsINQCQFiZJ/86168210ed97b93e6207eb248778a4bf/rectangle_2x.png?fm=webp&q=70',
    title: 'BABY BIRTHDAY FACTS',
    icon: 'https://images.ctfassets.net/9wtva4vhlgxb/4tn1QSdqnkYIN78LkhIBs7/6fb78559d0153496b9e223bd9119f5ba/Icon_planet__1_.svg?fm=webp&q=70',
  },
  {
    id: 5,
    thumbnail:
      'https://images.ctfassets.net/9wtva4vhlgxb/4DJtRijqIY6jcGeGqG6ZX0/7ffde1ec952b2a44607717a79f5861af/rectangle.jpg?fm=webp&q=70',
    title: 'BABY NAME GENERATOR',
    icon: 'https://images.ctfassets.net/9wtva4vhlgxb/5vrh5zGpnfT5qZBSLkL3de/7dac9cb5887b4f00b1923c1bf1e92830/bng.svg?fm=webp&q=70',
  },
]

export default function ParentingTools({ title }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5.5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  }

  return (
    <main className="mt-5">
      <div className="container">
        <h2 className="title-1">{title}</h2>
        <Slider {...settings} className="parenting-tools-slider">
          {sliderData.length &&
            sliderData.map((item) => {
              return <Card item={item} />
            })}
        </Slider>
      </div>
    </main>
  )
}
