import {useState} from 'react';
import {Input} from "../4/Input";

export const HW3 = () => {
    // 1️⃣ Раскомментируйте JSX(HW3.tsx) и вы увидите,
    // что приложение начнет гореть красным и ругаться 😡
    // 2️⃣ Ваша задача: ❗ПОЧИНИТЬ ПРОЕКТ❗
    // - прописать типизацию, где необходимо
    // - починить все, что горит красным
    // - дописать функциональность (где указано комментариями)
    // - приложение должно компилироваться и запускаться в браузере


    const [currentText, setCurrentText] = useState('');
    const [texts, setTexts] = useState<string[]>([
        'То, что вы делаете по ночам, то и делает вас богатым. (Аль Капоне)',
    ]);

    const handleChange = (value: string) => {
        setCurrentText(value);
    };

    const handleSave = () => {
        // ЗАСЕТАТЬ БЫ ТЕКСТ В texts И НЕ ПОТЕРЯТЬ НАПУТСТВИЕ ИЗ ПРОШЛОГО ВЕКА)
        // А ЗАТЕМ УБРАТЬ ЗА СОБОЙ В currentText
        let textsArray = [...texts, currentText]
        setTexts(textsArray)
        setCurrentText('')

    };

    return (
        <div id={'hw03'}>
            {currentText ? (
                <h1 id={'hw03-text'}>{currentText}</h1>
            ) : (
                <h1 id={'hw03-default-text'}>Здесь появится новое дело</h1> // ничего не меняем, здесь все норм
            )}

            {/*<input id={'hw03-input'} type="text" value={currentText}*/}
            {/*       onChange={(e) => handleChange(e.currentTarget.value)}/>*/}
            <Input setCurrentText={setCurrentText} currentText={currentText}/>
            <button id={'hw03-button'} onClick={handleSave}>
                Сохранить
            </button>

            <h1 style={{marginTop: '50px'}}>СПИСОК ДЕЛ НА ДЕНЬ:</h1>

            <ol id={'hw03-tasks'}>
                {texts.map((el, index) => {
                    return (
                        <li key={index} id={`hw03-task-${index}`}>
                            {el}
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};