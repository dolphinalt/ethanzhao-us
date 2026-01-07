// import React from "react";

import BlogPage from "../../components/BlogPage";

const F1Wheel = () => {
  return (
    <BlogPage
      title="FIN01: 3D Printed F1 Steering Wheel"
      date="June 7, 2025"
      tags={["3D Printing", "Arduino", "CAD Design"]}
      content={
        <>
          <h2 className="h1-blog">Inspiration</h2>
          <p className="mb-4">
            The steering wheel was designed using Onshape, a cloud-based CAD
            software. The design process focused on ergonomics, ensuring that
            the wheel would be comfortable to hold during extended gaming
            sessions. The wheel features multiple buttons and switches,
            mimicking the layout of a real Formula 1 steering wheel.
          </p>
          <p className="mb-4">
            Once the design was finalized, the components were 3D printed using
            PLA filament. The printing process required careful consideration of
            print orientation and support structures to ensure high-quality
            results.
          </p>
          <h2 className="h2-blog">Electronics Integration</h2>
          <p className="mb-4">
            An Arduino microcontroller was used to manage the button inputs on
            the steering wheel. Each button was wired to the Arduino, which was
            programmed to send corresponding signals to the computer when
            pressed. This setup allows the steering wheel to function as a fully
            operational gaming peripheral.
          </p>
          <p className="mb-4">
            The Arduino was housed within the steering wheel, with careful
            routing of wires to maintain a clean appearance and prevent
            interference with the user's grip.
          </p>
          <h2 className="h2-blog">Conclusion</h2>
          <p className="mb-4">
            The FinF1 project successfully combined 3D design, printing, and
            electronics to create a functional and visually appealing Formula 1
            style steering wheel for gaming. This project not only enhanced my
            skills in CAD design and 3D printing but also provided valuable
            experience in integrating hardware components for custom
            peripherals.
          </p>
        </>
      }
    />
  );
};

export default F1Wheel;
