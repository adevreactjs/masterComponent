import BenefitsCard from './BenefitsCard';

export default function OurBenefits() {
  return (
    <div className='mb-[10vw] mt-[5vw]'>
      <h2 className='mb-[3vw] text-center text-[3vw] font-[500] min-[280px]:text-[22px] min-[795px]:text-[4vw]'>
        Наші переваги
      </h2>
      <div className='flex flex-row flex-wrap justify-center min-[280px]:gap-[15px] min-[920px]:gap-[2vw]'>
        <BenefitsCard
          Num='1'
          Point='Конфігуратор ПК'
          Text='Конфігуратор допоможе зібрати ПК, який відповідає потребам та бюджету покупця, шляхом підбору оптимальних та сумісних компонентів.'
        />
        <BenefitsCard
          Num='2'
          Point='Офіційні партнери'
          Text='Наші офіційні партнери: Asus, AMD, Nivida, Intel. Закдяки цьому покупці мають доступ до спеціальних пропозицій, знижок та додаткових послуг.'
        />
        <BenefitsCard
          Num='3'
          Point='Система знижок'
          Text='Наші клієнти можуть накопичувати бонуси при кожній покупці і потім використовувати їх для отримання знижки на майбутні покупки.'
        />
        <BenefitsCard
          Num='4'
          Point='5 років довіри'
          Text='5 років роботи та більше 10000 відгуків, які допоможуть вам обрати потрібний продукт та покращити якісь нашої з покупцями взаємодії.'
        />
        <BenefitsCard
          Num='5'
          Point='Фізичні магазини'
          Text='Фізичні магазини надають можливість оглянути та випробувати товари перед покупкою, що створює додатковий рівень впевненості.'
        />
      </div>
    </div>
  );
}
