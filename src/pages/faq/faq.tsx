import { Accordion, SpecialQS } from "../../components/accordion/accordion"
import { FAQContent } from "../../static/content"

export default function FAQ(): JSX.Element {
    return (
        <div
            style={{
                background: `#039876`
            }}
            className=""
            id="faq"
        >
            <div className="pt-6 pb-6 bg-white mx-6 md:mx-12 rounded-lg">
                <h1 className='text-4xl font-bold text-center mt-3'>FAQ</h1>
                <div className="text-black">
                    {
                        FAQContent.map((
                            item: {
                                question: string,
                                answer: string
                            },
                            i: any,
                        ) => {
                            return (
                                <Accordion question={item.question} answer={item.answer} key={i} />
                            )
                        })
                    }
                </div>
                <SpecialQS />
            </div>
        </div>
    )
}