//Redux-toolkit, CSR
'use client'
import { useSelector } from "react-redux"
import { RootState } from "@/app/store/store"

//other
import procImg from '../../assets/procIcon.jpg';
import { Product } from '@/types/type';
import CardNoHeard from "../newsCart/CardNoHeard";


export default function LikedItems() {
    const products: Product[] = [
        {
          id: 1,
          image: procImg,
          title: 'Процесор AMD Ryzen 9 1',
          price: 25819,
          bonus: 21,
          property: [
            {
              proc: '16 ядер',
              frequency: '4.2(5.7)GHz',
              memory: '128MB',
              type: 'AM5',
            },
          ],
        },
        {
          id: 2,
    
          image: procImg,
          title: 'Процесор AMD Ryzen 9 2',
          price: 25000,
          bonus: 20,
          property: [
            {
              proc: '15 ядер',
              frequency: '4.2(5.7)GHz',
              memory: '128MB',
              type: 'AM5',
            },
          ],
        },
        {
          id: 3,
    
          image: procImg,
          title: 'Процесор AMD Ryzen 9 3',
          price: 25819,
          bonus: 19,
          property: [
            {
              proc: '14 ядер',
              frequency: '4.2(5.7)GHz',
              memory: '128MB',
              type: 'AM5',
            },
          ],
        },
        {
          id: 4,
    
          image: procImg,
          title: 'Процесор AMD Ryzen 9 4',
          price: 25819,
          bonus: 21,
          property: [
            {
              proc: '16 ядер',
              frequency: '4.2(5.7)GHz',
              memory: '128MB',
              type: 'AM5',
            },
          ],
        },
        {
          id: 5,
          image: procImg,
          title: 'Процесор AMD Ryzen 9 5',
          price: 25819,
          bonus: 21,
          property: [
            {
              proc: '16 ядер',
              frequency: '4.2(5.7)GHz',
              memory: '128MB',
              type: 'AM5',
            },
          ],
        },
        {
          id: 6,
    
          image: procImg,
          title: 'Процесор AMD Ryzen 9 6',
          price: 25819,
          bonus: 21,
          property: [
            {
              proc: '16 ядер',
              frequency: '4.2(5.7)GHz',
              memory: '128MB',
              type: 'AM5',
            },
          ],
        },
      ];

    const items = useSelector( (state:RootState) =>  state.pushItem.id)
    return(
        <div className="border max-w-[900px] h-max-[200px] flex flex-wrap mt-[100px] gap-5">
            {items.map((item, id) => <CardNoHeard
                key={id}
                product={products[item]}
                width={390}
                discount={products[item].bonus}
                fontSize={18}/>
            )}
        </div>
    )
};
