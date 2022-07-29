
const AlphabetBox = ({ i, arr, displayText }) => {
    return (
        <div className="alphabet-container">
            <h2 className="alphabet-element">
                {
                    i === 20 ? displayText : arr[i].toLocaleUpperCase()
                }
            </h2>
        </div>
    );
};

export default AlphabetBox;