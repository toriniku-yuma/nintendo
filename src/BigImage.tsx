export default function BigImage(){
    return(
        <div className="overflow-hidden">
            <div className="relative">
                <div className=" opacity-[1] [backface-visibility:hidden] [border-top:2px_solid_#fff] [border-bottom:2px_solid_#fff] relative !h-[auto] before:content-[''] before:block before:pb-[36.1%]">
                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full block">
                        <a href="/index" className="bg-[url('NewsTopic.png')] bg-primary [text-decoration:none] absolute top-0 right-0 bottom-0 left-0 block bg-cover bg-center bg-no-repeat text-inherit"></a>
                    </div>
                </div>
            </div>
        </div>
    )
}