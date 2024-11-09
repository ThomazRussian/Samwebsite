

type BackGroundImgProps = {
    bgImage?: string;
};


export function BackGroundImg({ bgImage } : BackGroundImgProps) {
    return (
        <div className="flex px-4 space-x-4 h-screen">
            <div className={`border-white ${bgImage} bg-cover bg-center min-h-screen z-0 w-1/2`}>
                <span className="z-1 text-white flex text-8xl items-center justify-center ml-40 w-[100%] h-[75%] min-h-[45%]"> 
                    Placeholder
                </span>
                <span className="h-[25%] w-[100%] flex z-1 text-white align-items-bottom ml-10 text-5xl justify-center ">
                    Placeholder
                </span>
                </div>
                <div className={`px-4 border-white ${bgImage} bg-cover bg-center min-h-screen w-1/2`}>
            </div>
        </div>
    );
};
