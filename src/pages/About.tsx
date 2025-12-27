
const About = () => {
    return (
        <>
            <section id="about" className="section pt-20 px-6 flex items-center justify-center">
                <div className="max-w-4xl grid md:grid-cols-3 gap-10 items-start">
                    <div className="text-center">
                        <div className="w-40 h-40 mx-auto rounded-full bg-green-500 flex items-center justify-center text-white text-4xl shadow">
                            <i className="fas fa-user"></i>
                        </div>
                    </div>

                    <div className="md:col-span-2 space-y-4">
                        <h2 className="text-4xl font-bold">About the Gardener</h2>
                        <p>
                            Hi! I'm a passionate developer who believes in cultivating digital experiences
                            that grow and flourish over time.
                        </p>
                        <p>
                            Each project needs care, patience and the right environment to bloom.
                        </p>

                        <div className="space-y-2 pt-4">
                            <div className="flex justify-between border-b pb-1"><span>2022</span><span>Started coding</span></div>
                            <div className="flex justify-between border-b pb-1"><span>2023</span><span>Started competetive programming</span></div>
                            <div className="flex justify-between border-b pb-1"><span>2024</span><span>Started web developing</span></div>
                            <div className="flex justify-between"><span>2025</span><span>The journey starts here.</span></div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}


export default About;