export default function BigImageCategory(){
    const categoryArray = [
        {image:"",title:"Pikmin 4(ピクミン4)"},
        {image:"",title:"ファミコン40周年キャンペーンサイト"},
        {image:"",title:"ポケットモンスター スカーレット・バイオレット ゼロの秘宝"},
        {image:"",title:"ザ・スーパーマリオブラザーズ・ムービー"},
        {image:"",title:"スプラトゥーン甲子園2023"}
    ]
    return(
        <div className="visible h-[74px] text-[0] leading-[-0.5em] whitespace-nowrap">
            {categoryArray.map((value,index)=>{
                let afterBorderStyles
                const afterNavTimerStyles = "after:content-[''] after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:bg-zinc-300"
                if(index !== 0){
                    afterBorderStyles = "after:content-[''] after:w-[1px] after:absolute after:top-[20px] after:bottom-[15px] after:-left-[1px] after:[background-image:linear-gradient(to_bottom,#b4b4b4,#b4b4b4_1px,transparent_1px,transparent_3px)] after:bg-repeat-y after:bg-right-top after:bg-[length:1px_4px]"
                }
                return(
                    <div key={index} className={`[border-left:none] [border-bottom:1px_solid_#ededed] cursor-pointer inline-block w-[20%] h-full box-border pt-[4px] bg-zinc-300 tracking-normal align-top relative after:content ${afterBorderStyles}`}>
                        <a href="/index" className="[text-decoration:none] p-[0_14px] flex items-center justify-between h-full box-border bg-white text-inherit">
                            <div className={`w-0 h-[4px] absolute left-0 top-0 bg-primary opacity-0 ${afterNavTimerStyles}`}></div>
                            <div className="w-[42px] h-[42px]">
                                <img src="CategoryIcon.png" alt={value.title} className="w-full"/>
                            </div>
                            <div className="pl-[12px] text-[12px] -mt-[0.65em] -mb-[0.35em] leading-[1.4] flex-1 font-bold whitespace-normal">
                                <div>{value.title}</div>
                            </div>
                        </a>
                    </div>
                )
            })}
        </div>
    )
}