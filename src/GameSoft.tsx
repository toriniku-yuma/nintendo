import Headline from "./Headline";

export default function GameSoft(){
    return(
        <div>
            <div className="mb-[49px] mt-[72px] max-w-[1200px] box-border m-[0_auto] pr-[40px] pl-[40px]">
                <Headline title="ゲームソフト" subTitle="SOFTWARE"/>
            </div>
            <div>
                <div className="pb-[69px] relative">
                    <div className="pb-[42px] relative overflow-hidden">
                        <div className="select-none m-[0_auto] max-w-[1120px] box-border w-full relative">
                            <div className="w-[1120px] h-[352px] !min-h-0 relative !block !overflow-visible">
                                <div className="w-[7620px] relative h-full"></div>
                                <div className="bottom-0 z-[999] absolute left-0 top-0"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}