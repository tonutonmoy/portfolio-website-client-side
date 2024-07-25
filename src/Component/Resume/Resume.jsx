

const Resume = () => {
    const title= document.getElementById('title')

    title.innerText='Resume' 
    return (
        <div className=" pt-[150px] px-[10px]  md:px-[30px] lg:px-[30px]  xl:px-[30px]  2xl:px-[30px]  w-[90%] md:w-[90%] lg:w-[90%] xl:w-[70%] 2xl:w-[60%] 3xl:w-[50%]  mx-auto flex justify-center overflow-x-auto ">
          
      
            <iframe className=" w-full h-[1000px] " src="https://docs.google.com/document/d/e/2PACX-1vTyQrArrYF59SOFRJPDuc5AnOnlWawjTvX0FyxhJyuDjxgMdm4XtQGtbd5L4Q2kmnPtxqFzpI_rIiQ3/pub?embedded=true"></iframe>
        </div>
    );
};

export default Resume;