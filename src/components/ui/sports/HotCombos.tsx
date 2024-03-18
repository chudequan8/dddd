import { CustomIcon } from "@/components/icon/common";
import classNames from "classnames";

const teamList = [
    {
        title: "RCD Mallorca",
        subtitle: 'FC Andorra vs SD Amorebieta',
        score: 2.72,
    },
    {
        title: "RCD Mallorca",
        subtitle: 'FC Andorra vs SD Amorebieta',
        score: 2,
    },
    {
        title: "RCD Mallorca",
        subtitle: 'FC Andorra vs SD Amorebieta',
        score: 2,
    },
    {
        title: "RCD Mallorca",
        subtitle: 'FC Andorra vs SD Amorebieta',
        score: 2,
    },
]

const priceList = [
    3000,
    7000,
    15000,
    40000
];

export default function HotCombos() {
    return (
        <div className="relative flex flex-col items-center w-full h-full rounded-lg bg-[#24262B] px-2">
            <div className="flex items-center justify-center mb-4 mt-6">
                <CustomIcon
                    type="file"
                    svgProps={{
                        className: "w-[32px] h-[32px] mr-2 text-red-600",
                    }}
                />
                <h3 className="text-white text-[22px] font-semibold">
                    Hot Combos
                </h3>
            </div>
            <div className="w-full flex-1 px-2 text-xs">
                {
                    teamList.map((item, index) => (
                        <div className="flex items-center text-1h443ei mb-2 rounded-md border-r-8 border-solid border-primary bg-[#2e3036] px-2 py-2" key={index}>
                            <div className="flex-1">
                                <div className="flex items-center">
                                    <CustomIcon type="soccer" svgProps={{
                                        className: 'opacity-75 mr-1'
                                    }} />
                                    <span> {item.title} </span>
                                </div>
                                <div className="text-1h443ei opacity-75 mt-1 text-[10px]">
                                    <p>{item.subtitle}</p>
                                    <p>1x2</p>
                                </div>
                            </div>
                            <div className="text-lg font-semibold px-4">
                                {item.score}
                            </div>
                        </div>
                    ))
                }
                <div className=" relative flex items-center text-1h443ei h-10 mb-2 px-2 rounded-md border-2 border-solid border-primary bg-[#2e3036]">
                    x1.15 Comboboost
                    <span className="absolute -right-0.5 -top-0.5 uppercase bg-[var(--color-primary)] rounded-tr-md rounded-bl-md text-[9px] py-0.5 px-1.5">comboboost</span>
                </div>
            </div>
            <div className="px-2">
                <div className="flex mb-4">
                    <label className="flex items-center gap-2 w-[100px] pl-2 rounded-md bg-[#1c1e22] border border-solid border-[#2b2e35]">
                        <input type="text" defaultValue={"1000"} className="grow text-right text-12v585s bg-[#1c1e22] w-full" placeholder="0" />
                        <span className="ml-1 mr-2 text-12v585s">¥</span>
                    </label>
                    <div className="ml-2 h-[32px] overflow-hidden">
                        {priceList.map((item, index) => (
                            <div
                                key={item}
                                className={classNames(
                                    "inline-flex items-center justify-center cursor-pointer mr-2 h-[32px] rounded-[16px] px-4 text-12v585s",
                                    index === 0
                                        ? " bg-[#3BC117]"
                                        : " bg-[#2e3036]"
                                )}
                            >
                                <span className="text-base">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-2.5 px-2 text-xs w-full">
                <div className="flex justify-between mt-1.5 text-primary">
                    <span>Comboboost</span>
                    <div className="inline-flex items-end">
                        <CustomIcon type="gift" size={16} svgProps={{
                            className: "w-[16px] h-[16px] mr-1"
                        }} />
                        <span>x1.15</span>
                    </div>
                </div>
                <div className="flex justify-between mt-1.5 text-12v585s opacity-60">
                    <span>Total Odds</span>
                    <div className="inline-flex">
                        <span>18.095</span>
                    </div>
                </div>
                <div className="flex justify-between mt-1.5 text-12v585s opacity-60">
                    <span>Total Bet</span>
                    <div className="inline-flex">
                        <span>18.095 ¥</span>
                    </div>
                </div>
                <div className="flex justify-between mt-1.5 text-base text-12v585s font-semibold">
                    <span className=" uppercase">Potential Win</span>
                    <div className="inline-flex">
                        <span>18 192 ¥</span>
                    </div>
                </div>
            </div>
            <div className=" relative flex justify-center mt-2.5 px-2 pb-6 text-xs w-full">
                <button className="opacity-50 text-white h-10 mx-4 px-[70px] rounded-[20px] bg-white bg-opacity-20" disabled>
                    <span className=" opacity-100 uppercase text-base font-semibold">Place Bet</span>
                </button>
                <div className="group-hover:opacity-80 opacity-100 transition-opacity duration-300 absolute z-10 flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 pointer-events-none	">
                    {/* <a
                        className="btn btn-circle pointer-events-auto"
                    >
                        ❮
                    </a>
                    <a
                        className="btn btn-circle pointer-events-auto"
                    >
                        ❯
                    </a> */}
                </div>
            </div>
        </div>
    );
}
