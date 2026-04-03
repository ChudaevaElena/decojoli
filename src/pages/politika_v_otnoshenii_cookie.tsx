import Head from 'next/head';

export default function CookiePolicy() {
  return (
    <>
      <Head>
        <title>decojoli – Политика в отношении cookie</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="Политика использования файлов cookie на сайте decojoli."
        />
      </Head>
      <main className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 className="h1" style={{ marginBottom: '40px' }}>Политика в отношении cookie</h1>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <p className="text" style={{ color: 'var(--8e-gray)' }}>
              Настоящая политика применения веб-технологий («Политика использования файлов cookie»)
              устанавливает правила, согласно которым decojoli управляет своим веб-сайтом и защищает
              при этом интересы посетителей сайта в отношении конфиденциальности передаваемых данных.
            </p>

            <h2 className="h3">Файлы cookie</h2>
            <p className="text" style={{ color: 'var(--8e-gray)' }}>
              В соответствии с настройками вашего браузера файл cookie позволяет автоматически собирать
              информацию, направляемую нам вашим веб-браузером при доступе на наши веб-сайты.
              Как правило, эта информация содержит IP-адрес, присвоенный в настоящий момент вашему
              компьютеру, а также сведения о типе установленной операционной системы и браузера.
            </p>
            <p className="text" style={{ color: 'var(--8e-gray)' }}>
              Файл cookie — это небольшой текстовый файл, который сохраняется на ваш жесткий диск
              веб-сервером.
            </p>
            <p className="text" style={{ color: 'var(--8e-gray)' }}>
              Мы различаем «сеансовые файлы cookie» и «постоянные файлы cookie».
            </p>

            <h2 className="h3">Постоянные файлы cookie</h2>
            <p className="text" style={{ color: 'var(--8e-gray)' }}>
              В дозволенных случаях мы используем постоянные файлы cookie, которые не удаляются сразу
              после закрытия браузера, а остаются на вашем компьютере до истечения срока их действия
              по окончании установленного периода или до тех пор, пока вы не сотрете их самостоятельно.
            </p>

            <h2 className="h3">Согласие на использование файлов cookie</h2>
            <p className="text" style={{ color: 'var(--8e-gray)' }}>
              Ваше предварительное согласие на использование сеансовых файлов cookie не требуется,
              так как они необходимы для функционирования веб-сайта, и срок их действия истекает
              сразу же после того, как вы покинете сайт.
            </p>

            <h2 className="h3">Как изменить настройки файлов cookie</h2>
            <p className="text" style={{ color: 'var(--8e-gray)' }}>
              Настройка конфигурации Интернет-браузера является бесплатным и эффективным способом
              управления файлами cookie.
            </p>
            <ul className="text" style={{ color: 'var(--8e-gray)', marginLeft: '20px' }}>
              <li>возможность использования всех файлов cookie, интегрированных на страницы и в просматриваемое вами содержание.</li>
              <li>блокирование файлов cookie на вашем устройстве.</li>
              <li>запрос от браузера предоставить согласие или отказ до установки нового файла cookie.</li>
              <li>принять или отклонить файлы cookie в зависимости от отправителя.</li>
            </ul>

            <h2 className="h3">Режим управления файлами cookie зависит от вашего браузера</h2>
            <ul className="text" style={{ color: 'var(--8e-gray)', marginLeft: '20px' }}>
              <li><a href="https://support.microsoft.com/ru-ru/windows" target="_blank" style={{ textDecoration: 'underline' }}>Internet Explorer</a></li>
              <li><a href="https://support.google.com/chrome/answer/95647?hl=ru" target="_blank" style={{ textDecoration: 'underline' }}>Chrome</a></li>
              <li><a href="https://support.apple.com/en-us/105082" target="_blank" style={{ textDecoration: 'underline' }}>Safari</a></li>
              <li><a href="https://support.mozilla.org/ru/kb/uluchshennaya-zashchita-ot-otslezhivaniya-firefox-dlya-kompyutera" target="_blank" style={{ textDecoration: 'underline' }}>Firefox</a></li>
              <li><a href="https://help.opera.com/ru/latest/web-preferences/#cookies" target="_blank" style={{ textDecoration: 'underline' }}>Opera</a></li>
              <li><a href="https://yandex.ru/support/browser/personal-data-protection/cookies.html" target="_blank" style={{ textDecoration: 'underline' }}>Яндекс.Браузер</a></li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}