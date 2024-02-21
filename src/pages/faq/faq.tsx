import { Accordion } from "../../components/accordion/accordion"
import { FAQContent } from "../../static/content"

export default function FAQ(): JSX.Element {
    return (
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
    )
}