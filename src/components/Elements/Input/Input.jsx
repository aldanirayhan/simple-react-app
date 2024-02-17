const Input = (props) => {
    const { type, placeholder, name } = props
    return (
        <input 
        type={type} 
        className="text-sm w-full borber rounded 2-full py-2 text-slate-700 opacity-50 p-2" 
        placeholder={placeholder} 
        name={name} 
        id={name}
        />
    );
}

export default Input;