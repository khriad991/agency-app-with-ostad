'use client'
import {useState} from "react";
import toast, {Toaster} from "react-hot-toast";
import axios from "axios";

const Contacts = () => {

    const [FromValue, setFromValue] = useState({
        fname:"",
        lname:"",
        email:"",
        msg:"",
    })
    const inputChange = (name,value) => {
        setFromValue((FromValue)=>({
            ...FromValue,
            [name]:value,
        }));
    }
    const fromSubmit = async (e) => {
        e.preventDefault(); // for not reload the page
        if(FromValue.fname.length === 0){
            toast.error("first Name is required")
        }
        else if(FromValue.lname.length === 0)[
            toast.error("last name is Required")
        ]
        else if(FromValue.email.length=== 0){
            toast.error("Email is Required")
        }
        else if(FromValue.msg.length === 0 ){
            toast.error("Message is Required")
        }
        else {
            const rawResponse = await axios.post(`/api/contact`,FromValue);

        }
    }

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center justify-center -mx-4">
                    <div className="mb-16 lg:mb-0 max-w-2xl lg:w-1/2 px-4">
                        <a className="mb-6 inline-block text-3xl font-bold leading-none" href="#">
                            <img className="h-12" src="/atis-assets/logo/atis/atis-mono-sign.svg" alt="" width="auto"/>
                        </a>
                        <h2 className="mb-4 text-4xl md:text-5xl font-bold font-heading">
                            So much more than a business analytics tool
                        </h2>
                        <p className="mb-8 text-gray-500 leading-loose">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                            efficitur nisl sodales egestas lobortis.
                        </p>
                        <a className="inline-block py-2 px-6 bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-250 rounded-l-xl rounded-t-xl" href="#">
                            Get Started
                        </a>
                    </div>
                    <div className="w-full lg:w-1/2 px-4">
                        <div className="max-w-sm mx-auto lg:mr-0 lg:ml-auto">
                            <div className="mb-6 py-8 px-6 bg-white shadow rounded-t-3xl rounded-bl-3xl text-center">
                                <form action="" onSubmit={fromSubmit}>
                                    <div className="mb-6">
                                        <span className="text-sm text-gray-400">Sign Up</span>
                                        <h4 className="text-2xl">Create an account</h4>
                                    </div>
                                    <div className="mb-4 flex flex-wrap -mx-2">
                                        <div className="mb-4 lg:mb-0 w-full lg:w-1/2 px-2">
                                            <input
                                                className="py-2 px-3 w-full bg-gray-50 rounded leading-loose"
                                                type="text"
                                                placeholder="First Name"
                                                value={FromValue.fname}
                                                onChange={(e)=>{inputChange("fname",e.target.value)}}
                                            />
                                        </div>
                                        <div className="w-full lg:w-1/2 px-2">
                                            <input
                                                value={FromValue.lname}
                                                onChange={(e) => {inputChange("lname", e.target.value)}}
                                                className="py-2 px-3 w-full bg-gray-50 rounded leading-loose"
                                                type="text"
                                                placeholder="Last Name"
                                            />
                                        </div>
                                    </div>
                                    <input
                                        className="mb-4 py-2 px-3 w-full bg-gray-50 rounded leading-loose" type="email"
                                        placeholder="hello@example.com"
                                        value={FromValue.email}
                                        onChange={(e)=>{inputChange('email',e.target.value)}}
                                    />
                                    <textarea
                                        className="mb-4 py-2 px-3 w-full bg-gray-50 rounded leading-loose"
                                        placeholder="Message"
                                        value={FromValue.msg}
                                        onChange={(e)=>{inputChange('msg',e.target.value)}}
                                    />

                                    <button type={"submit"} className="mb-4 py-4 w-full rounded text-sm bg-green-600 hover:bg-green-700 text-white font-bold leading-normal transition duration-200">
                                        Send
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster position="top-center"/>
        </section>

    );
};

export default Contacts;