function SelectableList(props) {
    const { items } = props;
    const [selectedItems, setSelectedItems] = useState([]);
    function selectItem(e) {
        const checked = e.target.checked;
        const item = e.target.parentElement.textContent;
        if (checked) {
            setSelectedItems(items => items.concat([item]));
        } else {
            setSelectedItems(items => items.filter(x => x !== item));
        }
    }
    return (
        <>
            <p>Selected Itmes: {selectedItems.join(", ")}</p>
            <ul>
                {items.map(item => (
                    <li key={item} style={{ direction: "rtl" }}>
                        <label>
                            {item}
                            <input
                                type="checkbox"
                                onChange={selectItem}
                                checked={selectedItems.includes(item)}
                            />
                        </label>
                    </li>
                ))}
            </ul>
        </>
    );
}