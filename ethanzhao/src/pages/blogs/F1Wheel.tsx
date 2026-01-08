// import React from "react";

import BlogPage from "../../components/BlogPage";
import CodeBlock from "../../components/CodeBlock";
import Image from "../../components/Image";

const F1Wheel = () => {
  return (
    <BlogPage
      title="FIN01: 3D Printed F1 Steering Wheel"
      date="June 7, 2025"
      tags={["3D Printing", "Arduino", "CAD Design"]}
      content={
        <>
          <p className="h1-blog">Introduction</p>
          <p className="mb-4">
            In the fall of 2023, my Formula 1 addiction started. I was
            captivated by the speed, percision, and most of all, the
            technologies behind every tenth of a second gained. As I grew more
            and more invested, my addiction demanded I not just watch the sport,
            but try to experience it first hand, thus starting my journey into
            sim racing.
          </p>
          <p className="mb-4">
            Dispite being a beginner, I wanted to get the most immersive
            experience possible, and racing using a keyboard and mouse simply
            didn't cut it for me. I needed to get a steering wheel, a 8nm direct
            drive wheelbase, and pedals. Within the first few google searches, I
            quickly realized that even the cheapest sim racing setups would set
            me back hundreds, if not thousands of dollars, money I simply did
            not have.
          </p>
          <p className="mb-4">
            Realizing there might be many others in the same situation, wanting
            to sim race but not having the money, an idea sprung to my mind:
            What if I made my own simracing peripherals as a cheap alternative
            to big name brands such as Fanetec or MOZA? And so began the months
            long development of my Formula 1 style racing wheel, dubbed the
            FIN01.
          </p>
          <p className="h1-blog">Early Struggles</p>
          <p className="mb-4">
            As soon as I started looking for ways to turn my ideas into reality,
            I found out just how much knolwedge I lacked. I had no idea, at this
            point, what CAD was, no clue how electronics even worked, and was
            ultimately severly underprepared to take on this project.
          </p>
          <p className="mb-4">
            Fortunately, at this time (around November of 2024 I believe?), I
            was taking a Principles of Engineering class at my High School,
            which opened my eyes to a very simplistic online CAD website:
            Tinkercad by Autodesk. I spent a couple weeks playing around with
            the website, exploring it's capabilities and assessing it's
            viability for my project. At one point, I found out that it was
            possible to create 3D designs from SVG files, leading to my first
            experimental model being created.
          </p>
          <Image
            src="/F1Wheel/TinkerCADFirstDesign.png"
            alt="First TinkerCAD Design"
            caption="Very rudimentary first draft of the wheel"
          />
          <CodeBlock language="python" code={`print("Hello, World!")`} />
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
