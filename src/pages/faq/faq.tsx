import { Accordion } from "../../components/accordion/accordion"
import { FAQContent } from "../../static/content"

export default function FAQ(): JSX.Element {
    return (
        <div
            style={{
                background: `linear-gradient(0deg, #039876, #fff)`
            }}
            className="py-6 mt-24"
        >
            <div className="border pt-6 pb-6 bg-white mx-6 md:mx-12 rounded-lg border-black">
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
            </div>
        </div>
    )
}