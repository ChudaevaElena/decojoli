import SectionHeader from './SectionHeader';

export default function AboutSection() {
  return (
    <section className="section">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '40px',
          alignItems: 'start',
        }}>
          <h2 className="section-title">мы</h2>
          <div>
            <p className="h2" style={{ marginBottom: '24px' }}>
              Более 20 лет создаём мебель
            </p>
            <p className="text" style={{ color: 'var(--8e-gray)', marginBottom: '16px' }}>
              Наше кредо – безупречное качество и внимание к деталям. Мы не штампуем типовые решения,
              а проектируем каждый предмет индивидуально. В основе – лучшие материалы, опыт мастеров
              и любовь к своему делу.
            </p>
            <p className="text" style={{ color: 'var(--8e-gray)' }}>
              Сложные запросы? Для нас это вызов, который мы принимаем с удовольствием. Нестандартные формы,
              редкие породы дерева, уникальная фурнитура – воплощаем любые идеи. Прямое производство без
              посредников делает эксклюзивную мебель доступной.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}