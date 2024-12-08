import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

import Banner from "../assets/Images/GEC.webp"
import Footer from "../components/Common/Footer"
import ReviewSlider from "../components/Common/ReviewSlider"
import CTAButton from "../components/core/HomePage/Button"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import ExploreMore from "../components/core/HomePage/ExploreMore"
import HighlightText from "../components/core/HomePage/HighlightText"
import InstructorSection from "../components/core/HomePage/InstructorSection"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import TimelineSection from "../components/core/HomePage/Timeline"

function Home() {
    return (
        <div>
            <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
                <Link to={"/signup"}>
                    <div className="group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none"></div>
                </Link>

                <div className="text-center text-4xl font-semibold">
                    Empower Your Future with
                    <HighlightText text={"Technical Skills"} />
                </div>

                <div className="-mt-3 w-[90%] text-justify text-lg font-bold text-richblack-300 md:text-center">
                    This is our e-Learning webpage. We are providing onine
                    courses in every domain of engineering. Through this online
                    courses you enhance your Theoritical, Paractical &
                    Technological knowledge.
                </div>

                <div className="mt-8 flex flex-row gap-7">
                    <CTAButton active={true} linkto={"/signup"}>
                        Learn More
                    </CTAButton>
                    <CTAButton
                        active={false}
                        linkto={"https://www.gec.edu.in/"}
                    >
                        Visit Our College Site
                    </CTAButton>
                </div>

                <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
                    <img
                        className="max-w-6xl shadow-[10px_10px_rgba(255,255,255)] md:shadow-[20px_20px_rgba(255,255,255)]"
                        src={Banner}
                        alt="Giet-College-Banner"
                    />
                </div>

                <div>
                    <CodeBlocks
                        position={"lg:flex-row"}
                        heading={
                            <div className="text-4xl font-semibold">
                                Unlock your
                                <HighlightText text={"coding potential"} /> with
                                our online courses.
                            </div>
                        }
                        subheading={
                            "Our courses are designed and taught by industry experts who have years of experience in Technical education and are passionate about sharing their knowledge with you."
                        }
                        ctabtn1={{
                            btnText: "Try it Yourself",
                            link: "/signup",
                            active: true,
                        }}
                        ctabtn2={{
                            btnText: "Learn More",
                            link: "/signup",
                            active: false,
                        }}
                        codeColor={"text-yellow-25"}
                        codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>Er. Abinash Sahoo</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
                        backgroundGradient={
                            <div className="codeblock1 absolute"></div>
                        }
                    />
                </div>

                <div>
                    <CodeBlocks
                        position={"lg:flex-row-reverse"}
                        heading={
                            <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                                Start Your
                                <HighlightText text={"journey"} />
                            </div>
                        }
                        subheading={
                            "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
                        }
                        ctabtn1={{
                            btnText: "Continue Lesson",
                            link: "/signup",
                            active: true,
                        }}
                        ctabtn2={{
                            btnText: "Learn More",
                            link: "/signup",
                            active: false,
                        }}
                        codeColor={"text-white"}
                        codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
                        backgroundGradient={
                            <div className="codeblock2 absolute"></div>
                        }
                    />
                </div>

                <ExploreMore />
            </div>

            <div className="bg-pure-greys-5 text-richblack-700">
                <div className="homepage_bg h-[320px]">
                    <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
                        <div className="lg:h-[150px]"></div>
                        <div className="flex flex-row gap-7 text-white lg:mt-8">
                            <CTAButton active={true} linkto={"/signup"}>
                                <div className="flex items-center gap-2">
                                    Explore Full Catalog
                                    <FaArrowRight />
                                </div>
                            </CTAButton>
                            <CTAButton active={false} linkto={"/login"}>
                                Learn More
                            </CTAButton>
                        </div>
                    </div>
                </div>

                <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
                    <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
                        <div className="text-4xl font-semibold lg:w-[45%] ">
                            Get the skills you need for a{" "}
                            <HighlightText text={"job that is in demand."} />
                        </div>
                        <div className="flex flex-col items-start gap-10 lg:w-[40%]">
                            <div className="text-[16px]">
                                The modern E-Learning platform is the dictates
                                its own terms. Today, to be a competitive
                                specialist requires more than professional
                                skills.
                            </div>
                            <CTAButton active={true} linkto={"/signup"}>
                                <div className="">Learn More</div>
                            </CTAButton>
                        </div>
                    </div>

                    <TimelineSection />
                </div>
            </div>

            <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
                <InstructorSection />

                <h1 className="mt-8 text-center text-4xl font-semibold">
                    Reviews from other learners
                </h1>
                <ReviewSlider />
            </div>

            <Footer />
        </div>
    )
}

export default Home
