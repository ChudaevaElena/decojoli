import SectionHeader from './SectionHeader';

export default function AdvantagesSection() {
  const advantages = [
    {
      title: 'Более 20 лет опыта',
      description:
        'Всё это время мы создаём мебель, которая служит годами. Знаем все тонкости работы с деревом, камнем, металлом.',
    },
    {
      title: 'Сложные проекты – наша стихия',
      description:
        'Нестандартные формы, радиусные фасады, уникальные инкрустации – реализуем любые задумки, даже самые смелые.',
    },
    {
      title: 'Выгодные условия',
      description:
        'Собственное производство без посредников позволяет предлагать высокое качество по честной цене. Доставка по всей России.',
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '40px',
          alignItems: 'start',
          marginBottom: '40px',
        }}>
          <h2 className="section-title">Почему decojoli</h2>
          <p className="h2">С нами надёжно и выгодно</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {advantages.map((adv, idx) => (
            <div key={idx} style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: '40px',
              alignItems: 'start',
            }}>
              <h3 className="title">{adv.title}</h3>
              <p className="text" style={{ color: 'var(--8e-gray)' }}>{adv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}