import {calculateInvestmentResults} from "../util/investment.js";
import {formatter} from "../util/investment.js";

export default function Table(props){

 const data = calculateInvestmentResults(props.input);
    console.log(data);
return (
<table id='result'>
    <thead>
    <tr>
        <th>Year</th>
        <th>Investment</th>
        <th>Interest</th>
        <th>Total Interest</th>
        <th>Total Amount Invested</th>
    </tr>

    </thead>
    <tbody>

    {data.map((item) => (
        <tr key={item.year}>
            <td>{item.year}</td>
            <td>{formatter.format(item.valueEndOfYear)}</td>
            <td>{formatter.format(item.interest)}</td>
            <td>{formatter.format(props.initialInvestment - item.valueEndOfYear - item.annualInvestment)}</td>
            <td>{formatter.format(item.valueEndOfYear - item.interest)}</td>
        </tr>
    ))}

    </tbody>

</table>
)
}