function BreadCrumb(){
    return(
        <div>任天堂バナー</div>
    )
}

function SNS(){
    return(
        <div>SNS</div>
    )
}

function Service(){
    return(
        <div>サービス</div>
    )
}

function Related1(){
    return(
        <div>会社情報</div>
    )
}

function SiteMap(){
    return(
        <div>サイトマップ</div>
    )
    
}

function Related2(){
    return(
        <div>保護者の皆さまへ</div>
    )
}

function TopBanner(){
    return(
        <div>スーパーニンテンドーワールド</div>
    )
}

function Foot(){
    return(
        <div>フッター</div>
    )
}

export default function Footer(){
    return(
        <div>
            <BreadCrumb/>
            <SNS/>
            <Service/>
            <Related1/>
            <SiteMap/>
            <Related2/>
            <TopBanner/>
            <Foot/>
        </div>
    )
}