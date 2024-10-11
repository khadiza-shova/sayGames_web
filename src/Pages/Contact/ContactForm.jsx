


const ContactForm = () => {

    return (
        <section className="w-full">

            {/* title */}
            <div className="w-full flex flex-col items-center justify-center mt-10">
                <h1 className="text-[2rem] font-bold text-primary leading-[36px]">Contact Us</h1>
               
            </div>

            {/* form area */}
            <form className="w-full mt-[50px]">
                <div className="flex flex-col sm:flex-row items-center gap-[20px]">
                    <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                        <label className="relative">
                            <input type="text"
                                className="peer border-[#e5eaf2] border rounded-md outline-none px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
                            />
                            <span
                                className=" absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-black text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                                Your name
                            </span>
                        </label>
                    </div>

                    <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                        <label className="relative">
                            <input type="email"
                                className="peer border-[#e5eaf2] border rounded-md outline-none px-4 py-3 w-full focus:border-black transition-colors duration-300"
                            />
                            <span
                                className=" absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-black text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                                Email Address
                            </span>
                        </label>
                    </div>
                </div>

                <div className="flex flex-col gap-[5px] w-full mt-[20px]">
                    <label className="relative w-full ">
                        <textarea
                            className="peer min-h-[200px] border-[#e5eaf2] border rounded-md outline-none px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
                        ></textarea>
                        <span
                            className=" absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-black text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                            Write Message
                        </span>
                    </label>
                </div>


                <button type="submit" className={`py-3 px-4 border border-blue-500 bg-white text-black rounded-md outline-none mt-[10px]`}>Submit</button>

            </form>
        </section>
    );
};

export default ContactForm;
