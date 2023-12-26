"use client"
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { fadeIn } from "../variants";
import { MotionDiv } from "../motionsDev";
export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section ref={ref} className="section" id="about">
      <div className="container mx-auto">
        <div
          className="flex flex-col h-screen gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0"
        >
          <MotionDiv
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-none flex-1 lg:bg-about bg-no-repeat h-[40rem] bg-top" />
          <MotionDiv
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 pointer-events-none"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="mb-4 h3 ">I'm Ahmed, and</h3>
            <p className="mb-6">
              I am a self-taught Frontend developer with more than 3 years of experience
              more focused on UX and user interactions using the
              latest modern technology such as <b>Next.js</b>, <b>Typescript</b>,
              and <b>React</b> and highly motivated web developer with a focus
              on front-end development. I have the ability to work
              both independently and as part of a team. I am highly organized,
              and detail-oriented. I am passionate about web apps development
              and learning new technology or tools making me so excited.
            </p>
            <div className="flex mb-12 gap-x-6 lg:gap-x-10">
              <div>
                <div className=" text-[40px] font-primary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={3} duration={2} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br /> Experience
                </div>
              </div>
              <div>
                <div className=" text-[40px] font-primary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={30} duration={4} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br /> Completed
                </div>
              </div>
              <div>
                <div className=" text-[40px] font-primary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={15} duration={4} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br /> Clients
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};
