import Headline from "./Headline";

export default function NewsTopic(){
    const newsArray = [
        {
            image:"",
            title:"Nintendo Switch Online14日間無料体験チケット配布中。オンラインで遊べるおすすめサービスをご紹介。",
            date:"2023.8.10"
        },
        {
            image:"",
            title:"hogehoge1",
            date:"2023.8.10"
        },
        {
            image:"",
            title:"hogehoge2",
            date:"2023.8.10"
        },
        {
            image:"",
            title:"有料追加コンテンツ『ポケットモンスター スカーレット・バイオレット ゼロの秘宝』の「前編・碧の仮面」が9月13日に配信決定。最新情報も公開。",
            date:"2023.8.10"
        },
        {
            image:"",
            title:"hogehoge4",
            date:"2023.8.10"
        },
        {
            image:"",
            title:"hogehoge5",
            date:"2023.8.10"
        },
        {
            image:"",
            title:"hogehoge6",
            date:"2023.8.10"
        },
        {
            image:"",
            title:"お子さんと楽しむNintendo Switchの夏休み。お子さんと一緒にゲームで遊びませんか？",
            date:"2023.8.10"
        }
    ]
    return(
        <div className="px-[40px] max-w-[1200px] my-0 m-auto relative box-border">
            <Headline title="トピックス" subTitle="TOPICS"/>
            <div className="flex flex-wrap pb-[56px]">
                {newsArray.map((value,index)=>{
                    let marginRight = "mr-[27px]";
                    if((index + 1)%4 === 0){
                        marginRight = ""
                    }
                    return(
                        <div key={index} className={`w-[calc((100%-81px)/4-.1px)] ${marginRight} mb-[27px]`}>
                            <div className="relative leading-[1] h-full">
                                <a href="https://www.nintendo.co.jp/" className="flex flex-col relative h-[calc(100%-15px)]">
                                    <div className="relative bg-[length:100%_100%] before:content-[''] before:block before:pb-[56.25%]">
                                        <img src="NewsTopic.png" className="absolute top-0 right-0 bottom-0 left-0 w-full h-auto after:content-[''] after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:m-auto after:bg-white after:opacity-0"/>
                                    </div>
                                    <div className="border-t-[1px] border-solid border-transparent flex-[1_0_auto]">
                                        <div className="mt-[14px] pb-[26px]">
                                            <div className="text-[14px] font-bold leading-[1.6] -mt-[0.39em] -mb-[0.21em]">{value.title}</div>
                                        </div> 
                                    </div>
                                    <div className="leading-[17px] text-zinc-300 text-xs relative">
                                        <div className="text-[12px] font-bold leading-[1.4] -mt-[0.26em] -mb-[0.14em] min-h-[12px]">{value.date}</div>
                                    </div>
                                    <div className="bottom-[2px] w-[13px] h-[13px] absolute right-0 leading-[0]">
                                        <i className="block w-full h-full">
                                            <svg className="fill-primary stroke-white block w-full h-full [orverflow-clip-margin:content-box] overflow-hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8l4 4-4 4M8 12h7"/></svg>
                                        </i>
                                    </div>
                                </a>
                                <div className="pt-[14px] border-b-[1px] border-solid border-zinc-300"></div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="w-[calc(9.5em+48px)] m-auto">
                <a href="https://topics.nintendo.co.jp/" className="bg-primary block text-center p-[11px_24px] rounded-sm border-[2px] bg-current border-solid box-border leading-normal cursor-pointer">
                    <div className="flex justify-center items-center">
                        <i className="mr-[7px] flex-[0_0_10px] w-[10px] h-[15px] text-white block">
                            <svg className="fill-white stroke-primary block w-full h-full [orverflow-clip-margin:content-box] overflow-hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8l4 4-4 4M8 12h7"/></svg>
                        </i>
                        <span className="text-[14px] leading-none my-[0em] text-white font-bold block">トピックス記事一覧</span>
                    </div>
                </a>
            </div>
        </div>
    )
}