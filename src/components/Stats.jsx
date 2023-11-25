const getData = async () => {
    const res = await fetch(`${process.env.BASE_URL}api/StatList`)
    if(!res.ok){
        throw new Error("StatList colling Fail")
    }
    return res.json()

}

const Stats =async () => {

    const data = await getData()
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">


                    <div className="mb-8 w-full md:w-1/2 lg:w-1/4 text-center">
                        <span className="mb-6 inline-block p-4 rounded bg-green-100">
                            <svg
                                className="w-6 h-6 text-green-600"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                        </span>
                        <h3 className="text-2xl font-bold">{data["followers"]}</h3>
                        <p className="text-gray-500">Solved Problems</p>
                    </div>

                    <div className="mb-8 w-full md:w-1/2 lg:w-1/4 text-center">
                        <span className="mb-6 inline-block p-4 rounded bg-green-100">
                            <svg
                                className="w-6 h-6 text-green-600"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                        </span>
                        <h3 className="text-2xl font-bold">{data["solved"]}</h3>
                        <p className="text-gray-500">Solved Problems</p>
                    </div>
                    <div className="mb-8 w-full md:w-1/2 lg:w-1/4 text-center">
                        <span className="mb-6 inline-block p-4 rounded bg-green-100">
                            <svg
                                className="w-6 h-6 text-green-600"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                        </span>
                        <h3 className="text-2xl font-bold">{data["customers"]} </h3>
                        <p className="text-gray-500">Happy Customers</p>
                    </div>
                    <div className="mb-8 w-full md:w-1/2 lg:w-1/4 text-center">
                        <span className="mb-6 inline-block p-4 rounded bg-green-100">
                            <svg
                                className="w-6 h-6 text-green-600"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                            </svg>
                        </span>
                        <h3 className="text-2xl font-bold">{data["projects"]} </h3>
                        <p className="text-gray-500">Projects</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;