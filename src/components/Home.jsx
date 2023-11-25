import React from 'react'
import Sections from './Sections'
function Home() {
  return (
    <>
    <Sections
      car_name="Model S"
      car_des="Order online for touchless delivery"
      image_link="model-s.jpg"
      LeftButton_text="custom order"
      RightButton_text="Existing inventory"
      />
    <Sections
      car_name="Model x"
      car_des="Order online for touchless delivery"
      image_link="model-x.jpg"
      LeftButton_text="custom order"
      RightButton_text="Existing inventory"
      />
    <Sections
      car_name="Model y"
      car_des="Order online for touchless delivery"
      image_link="model-y.jpg"
      LeftButton_text="custom order"
      RightButton_text="Existing inventory"
      />
    <Sections
      car_name="Model 3"
      car_des="Order online for touchless delivery"
      image_link="model-3.jpg"
      LeftButton_text="custom order"
      RightButton_text="Existing inventory"
      />
      </>
  )
}

export default Home