

const Contacts = () => {
    return (
        <main className="section">
        <div className="container">
                <h1 className="title-1">Мои контакты</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Ставропольский край, Россия</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p><a href="tel:+79051234567">+7 (988) 868-66-17</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:krzkrz@rambler.ru">krzkrz@rambler.ru</a></p>
                    </li>
                </ul>

        </div>
    </main>

    );
}

export default Contacts;