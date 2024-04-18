import React from "react";

export default function OurAdvantages(){
    return(
        <>
        <section className="text-[#27115f] p-20">
            <div className="text-center">
            <h6 className="font-bold text-s p-2">WHY US?</h6>
            <h1 className="font-bold text-5xl p-2">Our Advantage</h1>
            </div>
            <div className="flex grid-cols-3 gap-8 m-10 md:grid-cols-1 p-10">
                <div className="text-xl">
                    <h2 className="font-bold text-2xl p-4">Personalised Treatment</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, architecto dolores aut nisi quam modi reprehenderit alias maxime fuga soluta voluptatem ipsum, nihil saepe maiores consequuntur omnis inventore culpa. Expedita?</p>
                </div>
                <div className="text-xl">
                    <h2 className="font-bold text-2xl p-4">Confidentiality</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, architecto dolores aut nisi quam modi reprehenderit alias maxime fuga soluta voluptatem ipsum, nihil saepe maiores consequuntur omnis inventore culpa. Expedita?</p>
                </div>
                <div className="text-xl">
                    <h2 className="font-bold text-2xl p-4">Practioners Network</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, architecto dolores aut nisi quam modi reprehenderit alias maxime fuga soluta voluptatem ipsum, nihil saepe maiores consequuntur omnis inventore culpa. Expedita?</p>
                </div>
            </div>
        </section>
        </>
    )
}