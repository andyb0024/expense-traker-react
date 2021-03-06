import './ExpenseDate.css'
function ExpenseDate(props){
const month=props.date.toLocaleString('fr-FR',{month:'long'});
const day=props.date.toLocaleString('fr-FR',{month:'2-digit'})
const year=props.date.getFullYear();

return (
    <div>
    <div>{month}</div>   
    <div>{day}</div> 
    <div>{year}</div> 
    </div> 
)

}

export default ExpenseDate;