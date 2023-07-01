

const Resume = () => {
    const title= document.getElementById('title')

    title.innerText='Resume' 
    return (
        <div className="md:p-[100px] w-[90%] mx-auto ">
            <iframe className=" w-full h-[1000px]" src="https://drive.google.com/file/d/1-HdBuq2ComjRwBL1ecjPkZDui5CuP18h/preview" width="640" height="480" allow="autoplay" ></iframe>
        </div>
    );
};

export default Resume;