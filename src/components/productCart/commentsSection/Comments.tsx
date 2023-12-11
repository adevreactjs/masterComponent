'use client'
import { StaticImageData } from "next/image"
import { useSession } from "next-auth/react"
import defaulIcon from "../../../assets/avatar.svg"

import Vitaliy from '../../../assets/productCard/comments/Vitaliy.png'
import Roman from '../../../assets/productCard/comments/Roman.png'
import Sergiy from '../../../assets/productCard/comments/Sergiy.png'
import Yuli from '../../../assets/productCard/comments/Yulia.png'
import Pavlo from '../../../assets/productCard/comments/Pavlo.png'
import avatarIcon from '../../../assets/avatar.svg';
import clipGrey from '../../../assets/productCard/comments/clip.svg'
import CommentsHandle from "./CommentsHandle"
import { useState } from "react"
interface commentChild {
    name: string | null | undefined;
    image: StaticImageData;
    inputImg: string;
    commentText: string;
    date: string;
}
interface commentParent {
    name: string | null | undefined;
    image: StaticImageData;
    inputImg: string;
    commentText: string;
    date: string;
    marginB: string;
    reply: commentChild[]
}

export default function Comments() {
    const { data: session } = useSession()
    const allComments:commentParent[] = [
        {
            name: "Віталій",
            image: Vitaliy,
            inputImg: "",
            commentText: "Задоволений роботою. Швидкість передачі даних інтегрованого Wi-Fi вражає, а підтримка новітніх процесорів дозволяє максимально використовувати їх потужність.",
            date: "01.02.2023",
            marginB: "54",
            reply: [
                {
                    name: "Роман",
                    image: Roman,
                    inputImg: "",
                    commentText: "На жаль, виявив проблеми з інтегрованим Wi-Fi на материнській платі. Швидкість передачі даних не відповідає заявленим характеристикам, що призвело до нестабільного з'єднання.",
                    date: "01.02.2023"
                }
            ]
        },
        {
            name: "Юлія",
            image: Yuli,
            inputImg: "",
            commentText: "Ідеальне поєднання якості та функціональності. Легка у встановленні, має велику кількість роз'ємів для розширення функціоналу комп'ютера. Рекомендую як надійний компонент для збірки потужного ПК.",
            date: "01.02.2023",
            marginB: "54",
            reply: [
                {
                    name: "Сергій",
                    image: Sergiy,
                    inputImg: "",
                    commentText: "Хоча функціональність материнської плати і вражає, але в процесі монтажу зіткнувся з проблемою - деякі роз'єми можуть бути зайняті при встановленні деяких великих компонентів, що ускладнює розширення функціоналу. Для мене це стало певним недоліком у використанні даної моделі",
                    date: "01.02.2023"
                },
                {
                    name: "Павло",
                    image: Pavlo,
                    inputImg: "",
                    commentText: "Повністю підтверджую. Багато роз'ємів і портів дають можливість максимально розширити можливості комп'ютера. Рекомендую як найкращий вибір для створення потужного ПК!",
                    date: "01.02.2023"
                }
            ]
        },
    ]
    const [ commentsState, setCommentsState ] = useState(allComments)
    return(
        <div className="min-[1300px]:max-w-[42vw]">
            {commentsState.map( (item, index) => (
                <CommentsHandle key={index} comment={item}/>
            ))}
        </div>
    )
};
