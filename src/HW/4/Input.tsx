type InputPropsType = {
    currentText: string // НУЖНО ПРОТИПИЗИРОВАТЬ
    setCurrentText: (value: string) => void // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Input = (props: InputPropsType) => {
    const onChangeHandler = (value: string) => {
        // НУЖНО ДОПИСАТЬ
        props.setCurrentText(value)
    };

    return (
        <input id={'hw04-input'} type="text"
               value={props.currentText}
               onChange={e => onChangeHandler(e.currentTarget.value)}/>
    );
};
