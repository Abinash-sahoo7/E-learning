import React from "react"

const Stats = [
    { count: "4K+", label: "Happy Students" },
    { count: "200+", label: "Faculties" },
    { count: "15+", label: "Courses" },
    { count: "6 Lacks", label: "Avg Package" },
    { count: "13+", label: "Years" },
]

const StatsComponenet = () => {
    return (
        <div className="bg-richblack-700">
            <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white ">
                <div className="grid grid-cols-2 text-center md:grid-cols-5">
                    {Stats.map((data, index) => {
                        return (
                            <div className="flex flex-col py-10" key={index}>
                                <h1 className="text-[30px] font-bold text-richblack-5">
                                    {data.count}
                                </h1>
                                <h2 className="text-[16px] font-semibold text-richblack-500">
                                    {data.label}
                                </h2>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default StatsComponenet
