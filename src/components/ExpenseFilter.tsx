import categories from "../categories.ts"
interface Props {
    onSelectCategory: (category: string) => void;
}
const ExpenseFilter = ({ onSelectCategory }: Props) => {
    return (
        <select
            className="form-select mb-3"
            onChange={e => onSelectCategory(e.target.value)}
        >
            <option value="">All Category</option>
            {categories.map(category => (
                <option key={category} value={category}>{category}</option>
            ))}
        </select>
    );
};

export default ExpenseFilter;
