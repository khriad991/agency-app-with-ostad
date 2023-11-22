
const Brands = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4 text-center">
                <h3 className="mb-16 text-2xl font-heading">
                    Trusted by brands all over the world
                </h3>
                <div className="flex flex-wrap -mx-2">
                    <div className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/4 px-2">
                        <div>
                            <img className="mx-auto h-8" src='atis-assets/logo/brands/slack.png' alt=""/>
                        </div>
                    </div>
                    <div className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/4 px-2">
                        <div>
                            <img className="mx-auto h-8" src='atis-assets/logo/brands/dropbox.png' alt=""/>
                        </div>
                    </div>
                    <div className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/4 px-2">
                        <div>
                            <img className="mx-auto h-8" src='atis-assets/logo/brands/spotify.png' alt=""/>
                        </div>
                    </div>
                    <div className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/4 px-2">
                        <div>
                            <img className="mx-auto h-8" src='atis-assets/logo/brands/stripe.png' alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Brands;