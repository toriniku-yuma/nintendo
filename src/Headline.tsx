type Props = {
    title:string
    subTitle:string
}

export default function Headline(props:Props){
    return(
        <div className="pt-[72px] mb-[49px] flex justify-between relative items-center before:absolute before:-bottom-[16px] before:content-[''] before:h-[2px] before:bg-zinc-300 before:w-full">
            <div className="leading-8 text-[21px] font-bold relative before:absolute before:-bottom-[16px] before:content-[''] before:h-[2px] before:bg-primary before:block before:w-full z-10">{props.title}</div>
            <div>
                <span className="text-xs font-bold -mt-[5px] text-zinc-300">{props.subTitle}</span>
            </div>
        </div>
    )
}