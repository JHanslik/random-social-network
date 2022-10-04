const Input = ({
    handleChange,
    type,
    name,
    value,
    placeholder,
    error,
    isDisabled,
}) => {
    return (
        <fieldset className="mt-5">
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {name}
                </label>
                <input
                    className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500"
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    disabled={isDisabled}
                />
            </div>

            {error && <p className="text-red-600">{error}</p>}
        </fieldset>
    );
};

export default Input;
