

const Resume = () => {
    const title= document.getElementById('title')

    title.innerText='Resume' 
    return (
        <div className=" pt-[150px] px-[10px]  md:px-[30px] lg:px-[30px]  xl:px-[30px]  2xl:px-[30px]  w-[90%] md:w-[90%] lg:w-[70%] xl:w-[50%] 2xl:w-[40%] mx-auto flex justify-center ">
            <iframe className=" w-full h-[1000px]"  src="https://docs.google.com/document/d/e/2PACX-1vQ0PXg3KS7Xjz-PUY7BSoMlZXmgo0RRKlkgt1AX-mTDDZVLaEJI06v85Q4dWLRiUkaNCD4lZx9FpnBs/pub?embedded=true"  allow="autoplay" ></iframe>
        </div>
    );
};

export default Resume;